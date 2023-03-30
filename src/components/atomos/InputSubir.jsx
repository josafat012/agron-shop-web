import { useState } from 'react';

import "../../assets/css/SubirProduct.css";


function InputSubir() {
    const [imagen, setImagen] = useState('')

    const handlerClick = (e) => {
        console.log("Text: " + e.target.value)
        setImagen(e.target.value);
        
    }


    return ( 
        <div className="input-father">

            {imagen && <img src={imagen} height="200" width="200"/> }

            <input type="file" onChange={handlerClick} />
        </div>
     );
}

export default InputSubir;