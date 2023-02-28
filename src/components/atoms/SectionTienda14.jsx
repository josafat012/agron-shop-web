import Herramienta1 from "./Herramienta1";
import Herramienta2 from "./Herramienta2";
import Herramienta3 from "./Herramienta3";

function SectionTienda14() {
    return ( 
        <div className="divpadre12">

            <div className='card'>
                
                <div className='primer-div'>
                    <Herramienta1/>
                    
                </div>

                <div className='segundo-div'>
                    <h3>Bomba Regadora</h3>
                    <p>MXN 2550.00</p>
                    
                </div>

                <div className="boton">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>



            <div className='card'>
                
                <div className='primer-div'>
                   <Herramienta2/>
                </div>

                <div className='segundo-div'>
                    <h3>Coa</h3>
                    <p>MXN 320.00</p>
                    
                </div>

                <div className="boton">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>



            <div className='card'>
                
                <div className='primer-div'>
                    <Herramienta3/>
                    
                </div>

                <div className='segundo-div'>
                    <h3>Rastrillo</h3>
                    <p>MXN 400.00</p>
                    
                </div>

                <div className="boton">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>

            
        </div>
     );
}

export default SectionTienda14;