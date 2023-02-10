import { useContext, useEffect } from "react"
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
    setModalDeleteUser,
    setContactSelected,
    modalDeleteContact,
    setModalDeleteContact,
    setModalUpdateContact,
    modalUpdateContact
  } = useContext(GeneralContext);

  
  let className = '';
  if(userData?.contacts != undefined) {
    if(userData.contacts.length <= 3) {
      className = 'no-itens'
    }
  }

  return (
    <BaseDash>
        <header>
          <h2 onClick={() => setModalUpdateUser(!modalUpdateUser)}>Atualizar Usuário</h2>
          <h2 onClick={() => setModalCreateContact(!modalCreateContact)}>Criar Contato</h2>
          <h2 onClick={() => setModalDeleteUser(!modalDeleteUser)} className='delete'>Deletar Usuário</h2>
          <h2 onClick={logout} className='exit'>Sair</h2>
        </header>
        <main>
          <aside>
            <h2 className="avatar">
              {userData?.full_name.split(' ')[0].split('')[0]}
              { userData?.full_name.split(' ')[1] != undefined &&
                (
                  userData.full_name.split(' ')[1].length > 3 ?
                  userData.full_name.split(' ')[1].split('')[0] :
                  userData?.full_name.split(' ')[2].split('')[0]
                ) 
              }
            </h2>
            <h2>{userData?.full_name}</h2>
            <h2>{userData?.email}</h2>
            <h2>({userData?.number.substr(0,2)}) {userData?.number.substr(2,1) + ' ' + userData?.number.substr(3,4) + "-" + userData?.number.substr(7,4)}</h2>
            <h3>{userData?.createdAt.substr(0,10)} - {userData?.createdAt.substr(11,8)}</h3>
            <h3>{userData?.id}</h3>
          </aside>
          <ul className={className}>
            {
              userData?.contacts.length === 0 ? 
              <h1>Sem contatos adicionados</h1>
              :
              userData?.contacts.map((contact) => (
                <li key={contact.id} id={contact.id} >
                  <div className="box-name-email">
                    <h3>{contact.full_name}</h3>
                    <h3>{contact.email}</h3>
                  </div>
                  <div className="box-div-btn">
                    <div className="box-number-date">
                      <span>({contact.number.substr(0,2)}) {contact.number.substr(2,11)}</span>
                      <span>{contact.createdAt.substr(0,10)} - {contact?.createdAt.substr(11,8)}</span>
                    </div>
                    <div className="box-btns">
                      <button className="edit" onClick={() => {
                        setContactSelected(contact.id)
                        setModalUpdateContact(!modalUpdateContact)
                      }}>Editar</button>
                      <button onClick={() => {
                        setContactSelected(contact.id) 
                        setModalDeleteContact(!modalDeleteContact)
                      }} className="exit">Excluir</button>
                    </div>
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