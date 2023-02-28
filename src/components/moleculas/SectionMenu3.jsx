
import Logo from '../atoms/Logo';
import Icono from '../atoms/Icono';
import Produc1 from '../atoms/Produc1';
import Produc2 from '../atoms/Produc2';
import Produc3 from '../atoms/Produc3';
import '../../assets/css/SectionMenu3.css';

function SectionTwo() {
    return ( 
        <div className="padre">
           
            <div className='card'>
                <div className='primer-div'>
                    <div>
                        <Icono/>
                    </div>
                    <div>
                        <p>$200</p>
                        <p>Alimentos</p>
                    </div>
                </div>
                <div className='segundo-div'>
                    <Produc1/>
                </div>
                <div className='tercer-div'>
                    <h3>Agrotel(Ganado Bobino)</h3>
                    <p>Carlos Andres</p>
                    <p>Alimento para ganado al final de la engorda durante los últimos 30 días. Mejora el rendimiento de la canal, la ganancia diaria de peso y la conversión alimenticia.</p>
                </div>
                <div className="boton">
                    <button>Comprar</button>
                </div>
            </div>

            <div className='card'>
                <div className='primer-div'>
                    <div>
                        <Icono/>
                    </div>
                    <div>
                        <p>$420.15</p>
                        <p>Herramientas</p>
                    </div>
                </div>
                <div className='segundo-div'>
                    <Produc2/>
                </div>
                <div className='tercer-div'>
                    <h3>Carretilla Truper</h3>
                    <p>Pedro Josaft</p>
                    <p>Truper CAT-45ND, Carretilla 4.5 ft3, llanta neumática reforzada</p>
                </div>
                <div className="boton">
                    <button>Comprar</button>
                </div>
            </div>

            <div className='card'>
                <div className='primer-div'>
                    <div>
                        <Icono/>
                    </div>
                    <div>
                        <p>$250.30</p>
                        <p>Fertilizante</p>
                    </div>
                </div>
                <div className='segundo-div'>
                    <Produc3/>
                </div>
                <div className='tercer-div'>
                    <h3>Fertimax</h3>
                    <p>Luis Antonio</p>
                    <p>contiene en el mismo gránulo el porcentaje indicado en la fórmula tanto de Nitrógeno, Fósforo, Potasio.</p>
                </div>
                <div className="boton">
                    <button>Comprar</button>
                </div>
            </div>

        </div>

     );
}

export default SectionTwo;