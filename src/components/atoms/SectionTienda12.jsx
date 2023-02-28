import fertilizante1 from "../../assets/imgs/fertilizante1.webp"
import Fertilizante1 from "./Fertilizante1";
import Fertilizante2 from "./Fertilizante2";
import Fertilizante3 from "./Fertilizante3";
import "../../assets/css/SectionTienda12.css";

function SectionTienda12() {
    return (  
        <div className="divpadre12">

            <div className='card'>
                
                <div className='primer-div'>
                    <Fertilizante1/>
                </div>

                <div className='segundo-div'>
                    <h3>Hormona </h3>
                    <p>MXN 151.99</p>
                    
                </div>

                <div className="botont">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>



            <div className='card'>
                
                <div className='primer-div'>
                    <Fertilizante2/>
                    
                </div>

                <div className='segundo-div'>
                    <h3>Biosyme</h3>
                    <p>MXN 230.00</p>
                    
                </div>

                <div className="botont">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>



            <div className='card'>
                
                <div className='primer-div'>
                    <Fertilizante3/>
                    
                </div>

                <div className='segundo-div'>
                    <h3>Peters</h3>
                    <p>MXN 350.00</p>
                    
                </div>

                <div className="botont">
                    <button>Agregar</button>
                    <button>Comprar</button>
                </div>

            </div>

            
            
        </div>
       
    );
}

export default SectionTienda12;