import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";
import CreateContactModal from "../CreateContactModal";
import DeleteUserModal from "../DeleteUserModal";
import HomeDashboard from "../HomeDashboard";
import UpdateUserModal from "../UpdateUserModal";


const Dashboard = () => {

  const { modalCreateContact, modalUpdateUser, modalDeleteUser } = useContext(GeneralContext);

  return (
    <>
      {modalDeleteUser && <DeleteUserModal/>}
      {modalCreateContact && <CreateContactModal/>}
      {modalUpdateUser && <UpdateUserModal/>}
      <HomeDashboard/>
    </>
  )
}

export default Dashboard;