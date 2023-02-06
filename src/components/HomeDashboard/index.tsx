import { useContext } from "react"
import { GeneralContext } from "../../contexts/generalContext"
import { BaseDash } from "./style";

const HomeDashboard = () => {

  const { 
    userData, 
    setModalCreateContact, 
    modalCreateContact, 
    logout, 
    setModalUpdateUser, 
    modalUpdateUser,
    modalDeleteUser,
    setModalDeleteUser
  } = useContext(GeneralContext);

  return (
    <BaseDash>
        <header>
          <h2 onClick={() => setModalUpdateUser(!modalUpdateUser)}>Atualizar Usuário</h2>
          <h2 onClick={() => setModalCreateContact(!modalCreateContact)}>Criar Contato</h2>
          <h2 onClick={() => setModalDeleteUser(!modalDeleteUser)}>Deletar Usuário</h2>
          <h2 onClick={logout}>Sair</h2>
        </header>
        <main>
          <aside>
            <h2>{userData?.full_name}</h2>
            <h2>{userData?.email}</h2>
            <h2>({userData?.number.substr(0,2)}) {userData?.number.substring(2,11)}</h2>
            <h3>{userData?.createdAt.substr(0,10)} - {userData?.createdAt.substr(11,8)}</h3>
            <h3>{userData?.id}</h3>
          </aside>
          <ul>
            {
              userData?.contacts.length === 0 ? 
              <h1>Sem contatos adicionados</h1>
              :
              userData?.contacts.map((contact) => (
                <li key={contact.id} id={contact.id}>
                  <div className="box-name-email">
                    <h3>{contact.full_name}</h3>
                    <h3>{contact.email}</h3>
                  </div>
                  <div className="box-div-btn">
                    <div className="box-number-date">
                      <span>({contact.number.substr(0,2)}) {contact?.number.substring(2,11)}</span>
                      <span>{contact.createdAt.substr(0,10)} - {userData?.createdAt.substr(11,8)}</span>
                    </div>
                    <button>Excluir</button>
                  </div>
                </li>
              ))
            }
          </ul>
        </main>
      </BaseDash>
  )
}

export default HomeDashboard;