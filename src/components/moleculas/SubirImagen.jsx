import { Link, useNavigate } from "react-router-dom";
import SpamProduct from "../atomos/SpamProduct";
import InputSubir from "../atomos/InputSubir";
import InputDescrip from "../atomos/InputDescrip";
import ButtonSubir from "../atomos/ButtonSubir";
import "../../assets/css/SubirProduct.css";


function SubirImagen() {
    
        const navigate = useNavigate();
        const alerta = (e) => {
          alert('subida exitosa');
          e.preventDefault();
          navigate("/galeria");
      
        }
    
    
    return ( 
        

        <div className="sub-father">
            
         <SpamProduct/>

         <InputDescrip Input2="Descripcion : "/>

         <div className="input-content">
          <button onClick={alerta}  type="button" className="botoncito">Subir</button>
         </div>

        </div>
     );
}

export default SubirImagen;