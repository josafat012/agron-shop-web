
import InputNom from "../atomos/InputNom";
import InputDescrip from "../atomos/InputDescrip";
import InputPrecio from "../atomos/InputPrecio";
import ButtonSubir from "../atomos/ButtonSubir";
import InputSubir from "../atomos/InputSubir";
import SpamProduct from "../atomos/SpamProduct";
import "../../assets/css/SubirProduct.css";


function SubirProduct() {
    return ( 
    <div className="sub-father">
      <SpamProduct/>

      <InputSubir/>

      <InputNom/>

      <InputDescrip/>

      <InputPrecio />

      <ButtonSubir Subir="Subir"/>

      

    </div>
     
     );
}

export default SubirProduct;