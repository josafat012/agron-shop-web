import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx";
import Registro from "../pages/Registro.jsx";
import Login from "../pages/Login.jsx";
import Menu from "../pages/Menu.jsx";
import PagGaleria from "../pages/PagGaleria.jsx";
import Tienda from "../pages/Tienda.jsx";
import Product from "../pages/Product.jsx";
import ProductSubir from "../pages/ProductSubir.jsx";
import ImagenSubir from "../pages/ImagenSubir.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={ <><Home/></>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/galeria" element={<PagGaleria/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/producto" element={<Product/>}/>
        <Route path="/vender" element={<ProductSubir/>}/>
        <Route path="/publicar" element={<ImagenSubir/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
