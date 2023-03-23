import "../../assets/css/SubirProduct.css";

function ButtonSubir({Subir}) {
    return ( 
        <div className="input-father">

            <button type="button" className="input-content botoncito">{Subir}</button>
        </div>
     );
}

export default ButtonSubir;