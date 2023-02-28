import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Menu from "../pages/Menu.jsx";
import Swal from "sweetalert2";


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>

        </Routes>
    
    
    
    
    </BrowserRouter>
  )
}

export default App;
