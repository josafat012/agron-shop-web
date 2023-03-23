import SpamProduct from "../atomos/SpamProduct";
import InputSubir from "../atomos/InputSubir";
import InputDescrip from "../atomos/InputDescrip";
import ButtonSubir from "../atomos/ButtonSubir";
import "../../assets/css/SubirProduct.css";

function SubirImagen() {
    return ( 
        

        <div className="sub-father">
            
         <SpamProduct/>

         <InputSubir/>

         <InputDescrip/>

         <ButtonSubir Subir="Subir imagen"/>

        </div>
     );
}

export default SubirImagen;