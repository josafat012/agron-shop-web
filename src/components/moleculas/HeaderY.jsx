import imgMenu from "../../assets/imgs/menu.svg";
import imgClose from "../../assets/imgs/close.svg";
import imgDown from "../../assets/imgs/down.svg";
import imgEmail from "../../assets/imgs/email.svg";
import imgHelp from "../../assets/imgs/help.svg";
import imgHouse from "../../assets/imgs/house.svg";
import imgProjects from "../../assets/imgs/projects.svg";
import Logo from "../../assets/imgs/Logo.png";
import { Link } from "react-router-dom";
import "../../assets/css/HeaderX.css";

function HeaderY() {
    return ( 
        <> 
        <nav className="nav">

            <div className="nav__container">

                <h1 className="nav__title">AgronShop</h1>

                <a href="#menu" className="nav__menu">
                    <img src={imgMenu} className="nav__icon" />
                </a>

                <a href="#" className="nav__menu nav__menu--second">
                    <img src={imgClose} className="nav__icon"/>
                </a>

                <ul className="dropdown" id="menu">

                    <li className="dropdown__list">
                        <Link to="/" className="dropdown__link">
                            <img src={imgHouse} className="dropdown__icon"/>
                            <span className="dropdown__span">Cuenta</span>
                        </Link>
                    </li>

                   

                    <li className="dropdown__list">
                        <Link to="/menu" className="dropdown__link">
                            <img src={imgHelp} className="dropdown__icon"/>
                            <span className="dropdown__span">Menu</span>
                        </Link>
                    </li>

                    <li className="dropdown__list">
                        

                        <a href="#" className="dropdown__link">
                            <img src={imgProjects} className="dropdown__icon"/>
                            <span className="dropdown__span">Servicios</span>
                            <img src={imgDown} className="dropdown_arrow" />
                            <input type="checkbox" className="dropdown_check"/>
                        </a>
                        

                        <div className="dropdown_content">

                            <ul className="dropdown_sub">

                                <li className="dropdown_li">
                                    <Link to="/tienda" className="dropdown_anchor">Tienda</Link>
                                </li>

                                <li className="dropdown_li">
                                    <Link to="#" className="dropdown_anchor">Cuidados</Link>
                                </li>

                                <li className="dropdown_li">
                                    <Link to="/galeria" className="dropdown_anchor">Galeria</Link>
                                </li>

                            </ul>

                        </div>

                    </li>
                    

                </ul>

            </div>

        </nav>

        <nav className="nav-desktop">
            <div className="nav-div-img">
                <img src={Logo} />
            </div>
            <div className="nav-div-items">
                <div className="nav-div-items__input">
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="nav-div-items__links">
                    <div>
                        <Link to="/">Cuenta</Link>
                    </div>
                    <div>
                        <Link to="/menu">Menu</Link>
                    </div>
                    <div>
                        <ul >
                            <li>
                                <Link to="/registro">Servicios</Link>
                                <ul>
                                    <li><Link to="/tienda">Tienda</Link></li>
                                    <li><Link to="/registro">Cuidados</Link></li>
                                    <li><Link to="/galeria">Galeria</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
     );
}

export default HeaderY;