import { DeleteModal } from "./style";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";

const DeleteUserModal = () => {

  const { onDeleteContact, modalDeleteUser, setModalDeleteUser } = useContext(GeneralContext);

  return (
    <DeleteModal>
      <section>
        <div className="base-div-modal">
          <h2>Realmente deseja apagar sua conta?</h2>
          <div>
            <button onClick={() => onDeleteContact()}  className="excluir">Excluir</button>
            <button onClick={() => setModalDeleteUser(!modalDeleteUser)} className="voltar">voltar</button>
          </div>
        </div>
      </section>
    </DeleteModal>    
  )
}

export default DeleteUserModal;