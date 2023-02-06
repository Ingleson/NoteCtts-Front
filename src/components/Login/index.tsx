import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";

import { BaseLogin, LoginForm } from "./style";

const Login = () => {

  const {loginScreen, setLoginScreen, onSubmitLogin} = useContext(GeneralContext);

  const formLoginSchema = yup.object().shape({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver:yupResolver(formLoginSchema)
  })


  return (
    <BaseLogin>
      <h1>Note-Ctts</h1>
      <LoginForm>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" 
              placeholder="example@email.com"
              {...register("email")}   
            />
            {/* <span>{errors?.email?.message}</span> */}
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password"
              placeholder="***********"
              {...register("password")}
            />
            {/* <span>{errors?.password?.message}</span> */}
          </div>
          <button type="submit">Entrar</button>
        </form>
        <span>Caso não possua conta. Crie Uma.</span>
        <button onClick={() => {setLoginScreen(!loginScreen)}}>Cadastre-se</button>
      </LoginForm>
    </BaseLogin>
  )
}

export default Login;