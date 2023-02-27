import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import '../../assets/css/Header.css';

function Header() {
    return ( 
        <div className="header-offline">
            <div>
                <Logo/>
            </div>
            <nav>
                <input type="text" />
                <Link className='link' to="/">HOME</Link>
                <Link className='link' to="/register">REGISTRO</Link>
                <Link className='link' to="/servicios">SERVICIOS</Link>
            </nav>
        </div>
     );
}

export default Header;