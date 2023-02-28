import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import "../../assets/css/NavMenu.css";

function NavMenu() {
    return ( 
        <div className="header-father">
            <div className="space">
                <Logo/>
            </div>
            <nav>
                <input type="text" />
                <Link className='link' to="/menu">HOME</Link>
                <Link className='link' to="/menu">CUENTA</Link>
                <div>
                <ul className="opdesple">
                    <li><Link className="link">SERVICIOS</Link>
                    <ul>
                        <li><Link className="list" to="/tienda">Tienda</Link></li>
                        <li><Link className="list" to="/tienda">Cuidados</Link></li>
                        <li><Link className="list" to="/tienda">Galeria</Link></li>
                        
                    </ul>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
     );
}

export default NavMenu;