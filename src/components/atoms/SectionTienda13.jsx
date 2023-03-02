import Alimento1 from "./Alimento1";
import Alimento2 from "./Alimento2";
import Alimento3 from "./Alimento3";
import "../../assets/css/SectionTienda12.css";

let productsAlimentos = []

fetch('https://agronshop.iothings.com.mx/productos/alimentos')
.then(response => response.json())
.then (data =>{
    // console.log(data)
    productsAlimentos = data
    // console.log(characters)
})

function SectionTienda13() {

        const alimentosArray = [<Alimento1/>, <Alimento2/>, <Alimento3/>]
        let b= 0
        return (  
            <div className="divpadre12">
    
                {productsAlimentos.map (character => 
                    <div className='card'>
            
                        <div className='primer-div'>
                            {alimentosArray[b++]}
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

export default SectionTienda13;