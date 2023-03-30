import "../../assets/css/SubirProduct.css";

function ButtonSubir({Subir}) {
  
    return ( 
        <div className="input-father">
            <div className="input-content">
              <button  type="button" className="botoncito">{Subir}</button>
            </div>
        </div>
     );
}

export default ButtonSubir;