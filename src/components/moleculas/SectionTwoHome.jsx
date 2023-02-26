import '../../assets/css/SectionTwoHome.css';
import img from '../../assets/imgs/imagen1.png';

function SectionTwoHome() {
    return ( 
        <div className="sectionTwoHome">
            <div className='sectionTwoHome-container'>
                <div>
                    <h3>AGRON-SHOP</h3>
                    <p>Es un aplicacion web que brinda a los campesinos y agronomos un sitio en donde puden surtirse con productos de ganaderia.</p>
                    <p>Mas vale sembrar una cosecha nueva que llorar la que se perdio</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
     );
}

export default SectionTwoHome;