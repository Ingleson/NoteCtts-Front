import { DeepRequired, FieldErrorsImpl, SubmitHandler } from "react-hook-form"
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface IGeneralProviders {
  children: ReactNode;
}
interface IGeneralContext {
  loginScreen: boolean
  setLoginScreen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmitLogin: SubmitHandler<ILoginUser>
  onSubmitRegister: SubmitHandler<IRegisterUser>
  onSubmitCreateContact: SubmitHandler<ICreateContact>
  userData: null | IUser
  setModalCreateContact: React.Dispatch<React.SetStateAction<boolean>>
  modalCreateContact: boolean
  logout: () => void
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>
  modalUpdateUser: boolean
  onSubmitUpdateUser: SubmitHandler<IUpdateUser>
  setModalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>
  modalDeleteUser: boolean
  onDeleteContact: () => void
}
interface IRegisterUser {
  full_name: string
  email: string
  password: string
  number: string
}
interface ILoginUser {
  email: string
  password: string
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
interface ICreateContact {
  full_name: string
  email: string,
  number: string
}
interface IUpdateUser {
  full_name?: string
  email?: string
  number?: string
}


export const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext);

function GeneralProvider({ children }: IGeneralProviders) {

  const navigate = useNavigate();
  
  const [loginScreen, setLoginScreen] = useState(true);
  const [userData, setUserData] = useState(null);
  const [modalCreateContact, setModalCreateContact] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const [modalDeleteUser, setModalDeleteUser] = useState(false);

  const onSubmitLogin:SubmitHandler<ILoginUser> = (data) => {
    console.log(data)
    api.post("/login/", data)
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        navigate("/dashboard", { replace: true })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitRegister: SubmitHandler<IRegisterUser> = (data) => {
    api.post("/user/", data)
      .then((res) => {
        setLoginScreen(!loginScreen)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitCreateContact: SubmitHandler<ICreateContact> = (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.post("/contact/", data)
      .then(() => setModalCreateContact(!modalCreateContact))
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitUpdateUser: SubmitHandler<IUpdateUser> = (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.patch("/user/", data)
      .then(() => setModalUpdateUser(!modalUpdateUser))
      .catch((err) => {
        console.log(err)
      })
  }

  const onDeleteContact = () => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.delete("/user/")
      .then(() => {
        console.log("09")
        setModalDeleteUser(!modalDeleteUser)
        logout()
      })
      .catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    if(localStorage.getItem("@token")) {
      api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
      api.get("/user/")
        .then((res) => {
          setUserData(res.data)
        })
    }
  }, [])

  const logout = () => {
    localStorage.clear()
    navigate("", {replace: true})
  }

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
        onDeleteContact
      }
    }> 
      {children}
    </GeneralContext.Provider>
  )
} 

export default GeneralProvider;