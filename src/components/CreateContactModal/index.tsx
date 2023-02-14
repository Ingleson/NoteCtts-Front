import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldErrors } from "react-hook-form";

import { CreateModal } from "./style";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";

const CreateContactModal = () => {

  const {setModalCreateContact, modalCreateContact, onSubmitCreateContact} = useContext(GeneralContext);

  const formCreateContactSchema = yup.object().shape({
    full_name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório"),
    number: yup.string().required("Número é obrigatório")
  })

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver:yupResolver(formCreateContactSchema)
  })
  
  return (
    <CreateModal>
      <section>
        <div className="base-div-modal">
          <header>
            <h2>Criar Contato</h2>
            <button onClick={() => setModalCreateContact(!modalCreateContact)}>x</button>
          </header>
          <form onClick={handleSubmit(onSubmitCreateContact)}>
            <div>
              <label htmlFor="full_name">Nome:</label>
              <input type="text" 
                placeholder="Nome completo"
                autoComplete="off"
                {...register("full_name")}
              />
              {errors.full_name && typeof errors.full_name.message === 'string' && (
                <span>{errors.full_name.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" 
                placeholder="example@email.com"
                autoComplete="off"
                {...register("email")}
              />
              {errors.email && typeof errors.email.message === 'string' && (
                <span>{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input type="text" 
                placeholder="11981828384"
                {...register("number")}
              />
              {errors.number && typeof errors.number.message === 'string' && (
                <span>{errors.number.message}</span>
              )}
            </div>
            <button type="submit">Criar</button>
          </form>
        </div>
      </section>
    </CreateModal>    
  )
}

export default CreateContactModal;