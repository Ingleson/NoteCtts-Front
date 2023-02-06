import { useContext } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { GeneralContext } from "../../contexts/generalContext";

const Home = () => {

  const {loginScreen} = useContext(GeneralContext);

  return (
    <>
      {
        loginScreen ? <Login /> : <Register/>
      }
    </>
  )
}

export default Home;