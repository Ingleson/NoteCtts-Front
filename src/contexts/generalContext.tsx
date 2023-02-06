import { DeepRequired, FieldErrorsImpl, FieldValues, SubmitHandler } from "react-hook-form"
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface IGeneralProviders {
  children: ReactNode;
}
interface IGeneralContext {
  loginScreen: boolean
  setLoginScreen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmitLogin: SubmitHandler<FieldValues>
  onSubmitRegister: SubmitHandler<FieldValues>
  onSubmitCreateContact: SubmitHandler<FieldValues>
  userData: null | IUser
  setModalCreateContact: React.Dispatch<React.SetStateAction<boolean>>
  modalCreateContact: boolean
  logout: () => void
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>
  modalUpdateUser: boolean
  onSubmitUpdateUser: SubmitHandler<FieldValues>
  setModalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>
  modalDeleteUser: boolean
  onDeleteUser: () => void
  setContactToDelete: React.Dispatch<React.SetStateAction<string>>
  contactToDelete:  string
  onDeleteContact: () => void
  setModalDeleteContact: React.Dispatch<React.SetStateAction<boolean>>
  modalDeleteContact: boolean

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
  const [modalDeleteContact, setModalDeleteContact] = useState(false);
  const [contactToDelete, setContactToDelete] = useState("");

  const onSubmitLogin:SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    api.post("/login/", data)
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        navigate("/dashboard", { replace: true })
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitRegister: SubmitHandler<FieldValues> = (data) => {
    api.post("/user/", data)
      .then((res) => {
        setLoginScreen(!loginScreen)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitCreateContact: SubmitHandler<FieldValues> = (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.post("/contact/", data)
      .then(() => setModalCreateContact(!modalCreateContact))
      .catch((err) => {
        console.log(err)
      })
  }
  const onSubmitUpdateUser: SubmitHandler<FieldValues> = (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.patch("/user/", data)
      .then(() => setModalUpdateUser(!modalUpdateUser))
      .catch((err) => {
        console.log(err)
      })
  }

  const onDeleteUser = () => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.delete("/user/")
      .then((res) => {
        localStorage.clear()
        navigate("", {replace: true})
        setModalDeleteUser(!modalDeleteUser)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onDeleteContact = () => {
    
    api.defaults.headers.Authoriation = `bearer ${localStorage.getItem("@token")}`
    api.delete(`/contact/${contactToDelete}/`)
      .then((res) => {
        setModalDeleteContact(!modalDeleteContact)
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
  }, [userData])

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
        onDeleteUser,
        contactToDelete,
        setContactToDelete,
        onDeleteContact,
        modalDeleteContact,
        setModalDeleteContact
      }
    }> 
      {children}
    </GeneralContext.Provider>
  )
} 

export default GeneralProvider;