import Alimento1 from "./Alimento1";
import Alimento2 from "./Alimento2";
import Alimento3 from "./Alimento3";
import "../../assets/css/SectionTienda12.css";

function SectionTienda13() {
    return ( 
        <div className="divpadre12">

            <div className='card'>
                
                <div className='primer-div'>
                    <Alimento1/>
                   
                </div>

                <div className='segundo-div'>
                    <h3>Alimento Mineral</h3>
                    <p>MXN 1500.00</p>
                    
                </div>

                <div className="botont">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>



            <div className='card'>
                
                <div className='primer-div'>
                    <Alimento2/>
                    
                </div>

                <div className='segundo-div'>
                    <h3>Alimento Gus Goose</h3>
                    <p>MXN 820.00</p>
                    
                </div>

                <div className="botont">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>



            <div className='card'>
                
                <div className='primer-div'>
                    <Alimento3/>
                </div>

                <div className='segundo-div'>
                    <h3>L-Lysine</h3>
                    <p>MXN 2200.00</p>
                    
                </div>

                <div className="botont">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>

            
            
        </div>
     );
}

export default SectionTienda13;