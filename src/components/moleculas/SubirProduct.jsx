import { Link, useNavigate } from "react-router-dom";
import InputNom from "../atomos/InputNom";
import InputDescrip from "../atomos/InputDescrip";
import InputPrecio from "../atomos/InputPrecio";
import ButtonSubir from "../atomos/ButtonSubir";
import InputSubir from "../atomos/InputSubir";
import SpamProduct from "../atomos/SpamProduct";

import "../../assets/css/SubirProduct.css";


function SubirProduct() {
   const navigate = useNavigate();
  const alerta = (e) => {
    alert('subida exitosa');
    e.preventDefault();
    navigate("/tienda");

  }
    return ( 
    <div className="sub-father">

     
      <SpamProduct/>

      <InputNom Input1="Nom.Del Producto :"/>

      <InputDescrip Input2="Descripcion :"/>

      <InputPrecio Input3="Precio :" />

      <div className="input-content">
        <button onClick={alerta}  type="button" className="botoncito">Subir</button>
      </div>

      

      

    </div>
     
     );
}

export default SubirProduct;