import { FieldErrors, FieldValues, SubmitHandler } from "react-hook-form"
import { createContext, ReactNode, ReactPortal, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

interface IGeneralProviders {
  children: ReactPortal
}
interface IGeneralContext {
  setLoginScreen: React.Dispatch<React.SetStateAction<boolean>>
  loginScreen: boolean
  setModalCreateContact: React.Dispatch<React.SetStateAction<boolean>>
  modalCreateContact: boolean
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>
  modalUpdateUser: boolean
  setModalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>
  modalDeleteUser: boolean
  setModalUpdateContact: React.Dispatch<React.SetStateAction<boolean>>
  modalUpdateContact: boolean
  setModalDeleteContact: React.Dispatch<React.SetStateAction<boolean>>
  modalDeleteContact: boolean
  setContactSelected: React.Dispatch<React.SetStateAction<string>>
  contactSelected:  string

  onSubmitLogin: SubmitHandler<FieldValues>
  onSubmitRegister: SubmitHandler<FieldValues>
  onSubmitCreateContact: SubmitHandler<FieldValues>
  onSubmitUpdateUser: SubmitHandler<FieldValues>
  onUpdateContact: SubmitHandler<FieldValues>
  onDeleteUser: () => void
  onDeleteContact: () => void

  userData: null | IUser
  logout: () => void
}
interface IUser {
  id: string
  full_name: string
  email: string
  number: string
  createdAt: string
  contacts: IUserContacts[]
}
interface IUserContacts {
  id: string
  full_name: string
  email: string
  number: string
  createdAt: string
}

export const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext);

function GeneralProvider({ children }: IGeneralProviders) {

  const navigate = useNavigate();
  
  const [loginScreen, setLoginScreen] = useState(true);
  const [userData, setUserData] = useState(null);
  const [modalCreateContact, setModalCreateContact] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const [modalDeleteUser, setModalDeleteUser] = useState(false);
  const [modalUpdateContact, setModalUpdateContact] = useState(false);
  const [modalDeleteContact, setModalDeleteContact] = useState(false);
  const [contactSelected, setContactSelected] = useState("");

  const onSubmitLogin:SubmitHandler<FieldValues> = (data) => {
    api.post("/login/", data)
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        navigate("/dashboard", { replace: true })
      })
      .catch((err) => {
        console.log(err)
        toast.error('Senha e/ou email inválidos.', {theme: "dark"})
      })
  }
  const onSubmitRegister: SubmitHandler<FieldValues> = (data) => {
    api.post("/user/", data)
      .then((res) => {
        setLoginScreen(!loginScreen)
        toast.success('Conta criada com sucesso!', {theme: "dark"})
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitCreateContact: SubmitHandler<FieldValues> = (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.post("/contact/", data)
      .then(() => {
        setModalCreateContact(!modalCreateContact) 
        toast.success('Novo contato adicionado.', {theme: "dark"})
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitUpdateUser: SubmitHandler<FieldValues> = (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.patch("/user/", data)
      .then(() => {
        setModalUpdateUser(!modalUpdateUser)
        toast.success('Dados atualizados.', {theme: "dark"})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onDeleteUser = async () => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    await api.delete("/user/")
      .then((res) => {
        localStorage.clear()
        navigate("", {replace: true})
        setModalDeleteUser(!modalDeleteUser)
        toast.success('Sua conta foi apagada.', {theme: "dark"})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onDeleteContact = () => {
    
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.delete(`/contact/${contactSelected}/`)
      .then((res) => {
        setModalDeleteContact(!modalDeleteContact)
        toast.success('Contado Apagado.', {theme: "dark"})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onUpdateContact: SubmitHandler<FieldValues> = (data) => {

    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.patch(`/contact/${contactSelected}/`, data)
      .then((res) => {
        setModalUpdateContact(!modalUpdateContact)
        toast.success('Contado atualizado.', {theme: "dark"})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    dataRender()
  })

  const dataRender = async () => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem('@token')}`
    await api.get("/user/")
      .then((res) => {
        setUserData(res.data)
      })
  }

  const logout = () => {
    localStorage.clear()
    navigate("", {replace: true})
  }

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@token");
      
      if(token) {
        navigate("dashboard", {replace: true})
      }
      else {
        navigate("", {replace: true})
      }
    }
    loadUser();
  }, [])

  return (
    <GeneralContext.Provider value={
      {
        loginScreen, 
        setLoginScreen, 
        onSubmitLogin,
        onSubmitRegister,
        userData,
        setModalCreateContact,
        modalCreateContact,
        onSubmitCreateContact,
        logout,
        setModalUpdateUser,
        modalUpdateUser,
        onSubmitUpdateUser,
        modalDeleteUser,
        setModalDeleteUser,
        onDeleteUser,
        contactSelected,
        setContactSelected,
        onDeleteContact,
        setModalDeleteContact,
        modalDeleteContact,
        setModalUpdateContact,
        modalUpdateContact,
        onUpdateContact
      }
    }> 
      {children}
    </GeneralContext.Provider>
  )
} 

export default GeneralProvider;