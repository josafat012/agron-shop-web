import "../../assets/css/SubirProduct.css";

function InputNom({Input1}) {
    return ( 
        <div className="input-father">
            <label >{Input1}</label>
            <input  type="text" className="input-content"/>
        </div>
     );
}

export default InputNom;