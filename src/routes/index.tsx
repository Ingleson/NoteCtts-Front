import { Route, Routes } from "react-router-dom"
import Dashboard from "../components/Dashboard";
import Home from "../pages/Home";


const NoteCttsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
};

export default NoteCttsRoutes;