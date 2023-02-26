import '../../assets/css/SectionTwo.css';
import Logo from '../atoms/Logo';
import img from '../../assets/imgs/react.svg'

function SectionTwo() {
    return ( 
        <div className="padre">
            <div className='card'>
                <div className='primer-div'>
                    <div>
                        <img src={img} alt="" width='100' height='100'/>
                    </div>
                    <div>
                        <p>$200</p>
                        <p>Alimentos</p>
                    </div>
                </div>
                <div className='segundo-div'>
                    <Logo/>
                </div>
                <div className='tercer-div'>
                    <h6>Agrotel(Ganado Bobino)</h6>
                    <p>Carlos Andres</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in atque assumenda obcaecati animi omnis eveniet deserunt quod. Nostrum, aut consequatur modi quos ad alias autem laborum unde tempore possimus?</p>
                </div>
                <div className="boton">
                    <button>Comprar</button>
                </div>
            </div>
            <div className='card'>
            <div>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                        <h1>Hola</h1>
                        <p>Descripcion</p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className='card'>
            <div>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                        <h1>Hola</h1>
                        <p>Descripcion</p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>

     );
}

export default SectionTwo;