import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";
import CreateContactModal from "../CreateContactModal";
import DeleteContactModal from "../DeleteContactModal";
import DeleteUserModal from "../DeleteUserModal";
import HomeDashboard from "../HomeDashboard";
import UpdateContactModal from "../UpdateContactModal";
import UpdateUserModal from "../UpdateUserModal";


const Dashboard = () => {

  const { modalCreateContact, modalUpdateUser, modalDeleteUser, modalDeleteContact, modalUpdateContact } = useContext(GeneralContext);

  return (
    <>
      {modalUpdateContact && <UpdateContactModal/>}
      {modalDeleteContact && <DeleteContactModal/>}
      {modalDeleteUser && <DeleteUserModal/>}
      {modalCreateContact && <CreateContactModal/>}
      {modalUpdateUser && <UpdateUserModal/>}
      <HomeDashboard/>
    </>
  )
}

export default Dashboard;