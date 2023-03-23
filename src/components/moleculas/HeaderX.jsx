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

function HeaderX() {
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
                            <span className="dropdown__span">Home</span>
                        </Link>
                    </li>

                    {/* <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img src={imgProjects} className="dropdown__icon"/>
                            <span className="dropdown__span">Projects</span>
                            <img src={imgDown} className="dropdown__arrow" />

                            <input type="checkbox" className="dropdown__check"/>
                        </a>

                        <div className="dropdown__content">

                            <ul className="dropdown__sub">
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Project1</a>
                                </li>
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Project2</a>
                                </li>
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Project3</a>
                                </li>
                            </ul>

                        </div>
                    </li> */}

                    {/* <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img src={imgEmail} className="dropdown__icon"/>
                            <span className="dropdown__span">Contacto</span>
                            <img src={imgDown} className="dropdown__arrow" />

                            <input type="checkbox" className="dropdown__check"/>
                        </a>

                        <div className="dropdown__content">

                            <ul className="dropdown__sub">
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Contacto1</a>
                                </li>
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Contacto2</a>
                                </li>
                            </ul>

                        </div>
                    </li> */}

                    <li className="dropdown__list">
                        <Link to="/login" className="dropdown__link">
                            <img src={imgHelp} className="dropdown__icon"/>
                            <span className="dropdown__span">Login</span>
                        </Link>
                    </li>

                    <li className="dropdown__list">
                        <Link to="/registro" className="dropdown__link">
                            <img src={imgHelp} className="dropdown__icon"/>
                            <span className="dropdown__span">Registro</span>
                        </Link>
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
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/login">Iniciar Sesion</Link>
                    </div>
                    <div>
                        <Link to="/registro">Registrarse</Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
     );
}

export default HeaderX;