import Herramienta1 from "./Herramienta1";
import Herramienta2 from "./Herramienta2";
import Herramienta3 from "./Herramienta3";

let productsHerramientas = []

fetch('https://agronshop.iothings.com.mx/productos/herramientas')
.then(response => response.json())
.then (data =>{
    // console.log(data)
    productsHerramientas = data
    // console.log(characters)
})

function SectionTienda14() {
    const herramientasArray = [<Herramienta1/>, <Herramienta2/>, <Herramienta3/>]
    let c= 0
    return (  
        <div className="divpadre12">

            {productsHerramientas.map (character => 
                <div className='card'>
        
                    <div className='primer-div'>
                        {herramientasArray[c++]}
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

export default SectionTienda14;