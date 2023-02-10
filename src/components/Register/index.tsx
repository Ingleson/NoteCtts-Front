import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";
import { BaseRegister, RegisterForm } from "./style";


const Register = () => {

  const {loginScreen, setLoginScreen, onSubmitRegister} = useContext(GeneralContext)

  const RegisterUserSchema = yup.object().shape({
    full_name: yup.string().required("Precisa do seu nome completo").matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),
    email: yup.string().required("Email é obrigatório").email("Email invalido"),
    password: yup.string().required("Senha é obrigatória"),
    number: yup.string().required("precisa de um numero").matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),
  })

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(RegisterUserSchema)
  })

  return (
    <BaseRegister>
      <h1>Note-Ctts</h1>
      <RegisterForm>
        <section>
          <h2>Cadastro</h2>
          <button onClick={() => {setLoginScreen(!loginScreen)}}>Login</button>
        </section>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <div>
            <label htmlFor="full_name">Nome:</label>
            <input type="text" 
              placeholder="Nome completo"
              autoComplete="off"
              {...register("full_name")}
            />
            {/* <span>{errors?.full_name?.message}</span> */}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" 
              placeholder="example@email.com"
              autoComplete="off"
              {...register("email")}
            />
            {/* <span>{errors?.email?.message}</span> */}
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" 
              placeholder="*************"
              {...register("password")}
            />
            {/* <span>{errors?.password?.message}</span> */}
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input type="text" 
              placeholder="11981828384"
              {...register("number")}
            />
            {/* <span>{errors?.number?.message}</span> */}
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </RegisterForm>
    </BaseRegister>
  )
}

export default Register;