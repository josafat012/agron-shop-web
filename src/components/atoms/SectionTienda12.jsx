import fertilizante1 from "../../assets/imgs/fertilizante1.webp"
import Fertilizante1 from "./Fertilizante1";
import Fertilizante2 from "./Fertilizante2";
import Fertilizante3 from "./Fertilizante3";
import "../../assets/css/SectionTienda12.css";
import { useState } from "react";

let productsFertilizantes = []

fetch('https://agronshop.iothings.com.mx/productos/fertilizantes')
.then(response => response.json())
.then (data =>{
    // console.log(data)
    productsFertilizantes = data
    // console.log(characters)
})


function SectionTienda12() {
    const fertilizantesArray = [<Fertilizante1/>, <Fertilizante2/>, <Fertilizante3/>]
    let i= 0
    return (  
        <div className="divpadre12">

            {productsFertilizantes.map (character => 
                <div className='card'>
        
                    <div className='primer-div'>
                        {fertilizantesArray[i++]}
                    </div>
    
                    <div className='segundo-div'>
                        <h3>{character.nombre}</h3>
                        <p>MXN {character.precio}.00</p>
                        
                    </div>
    
                    <div className="botont">
                        <button>Agregar</button>
                        <button>Comprar</button>
                    </div>
                
                </div>
            )}
        </div>
        
    );
}

export default SectionTienda12;