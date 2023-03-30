import "../../assets/css/SubirProduct.css";

function InputPrecio({Input3}) {
    return ( 
        <div className="input-father">
          
          <label >{Input3}</label>
            <input type="text" className="input-content" />

        </div>
     );
}

export default InputPrecio;