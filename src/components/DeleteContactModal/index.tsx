import { DeleteModal } from "./style";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";

const DeleteContactModal = () => {

  const { modalDeleteContact, setModalDeleteContact, onDeleteContact } = useContext(GeneralContext);

  return (
    <DeleteModal>
      <section>
        <div className="base-div-modal">
          <h2>Você realmente deseja excluir este contato?</h2>
          <div>
            <button onClick={() => onDeleteContact()}  className="excluir">Excluir</button>
            <button onClick={() => setModalDeleteContact(!modalDeleteContact)} className="voltar">voltar</button>
          </div>
        </div>
      </section>
    </DeleteModal>    
  )
}

export default DeleteContactModal;