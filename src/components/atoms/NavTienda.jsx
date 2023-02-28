import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import "../../assets/css/NavTienda.css";


function NavTienda() {
    return ( 
        <div className="header-father1">
            <div className="space1">
                <Logo/>
            </div>
            <nav>
                <input type="text1" />
                <Link className='link1' to="/menu">HOME</Link>
                <Link className='link1' to="/">CUENTA</Link>
                <div>
                <ul className="opdesple1">
                    <li><Link className="link1">SERVICIOS</Link>
                    <ul>
                        <li><Link className="list1" to="/tienda">Tienda</Link></li>
                        <li><Link className="list1" to="/menu">Cuidados</Link></li>
                        <li><Link className="list1" to="/menu">Galeria</Link></li>
                        
                    </ul>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
     );
}

export default NavTienda;