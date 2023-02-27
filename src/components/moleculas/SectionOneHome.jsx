import '../../assets/css/SectionOneHome.css';
import { Link } from 'react-router-dom';

function SectionOneHome() {
    return ( 
        <div className="sectionOneHome">
            <div className='container'>
                <h1>Todos los productos que necesitas para tu campo</h1>
                <Link className='button' to="/login">INICIAR SESION</Link>
            </div>
        </div>
     );
}

export default SectionOneHome;