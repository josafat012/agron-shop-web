import CategoriaTienda from "../atomos/CategoriaTienda";
import ProductTienda from "../moleculas/ProductTienda";
import "../../assets/css/Tienda.css";

function CatTienda() {
    return ( 
        <>
        <div className="div-father-supreme">
         <CategoriaTienda/>
         <ProductTienda/>
        </div>
        
        </>
     );
}

export default CatTienda;