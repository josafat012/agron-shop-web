import imgIcons from "../../assets/imgs/Group.png";
import imgLine from "../../assets/imgs/Line32.png";
import "../../assets/css/Footer.css";

function Footer() {
    return ( 
        <footer>
            <div className="footer-container">
            <h3>Siguenos</h3>
            <div className="footer-div-container">
                <div className="footer-div-container__imgs">
                    <img src={imgLine}/>
                </div>
                <div className="footer-div-container__imgs">
                    <img src={imgIcons}/>
                </div>
                <div className="footer-div-container__imgs">
                    <img src={imgLine}/>
                </div>
            </div>
            <div className="footer-div-footer">
                <div className="footer-div-footer__containers">
                    <a href="">Informacion legal</a>
                </div>
                <div className="footer-div-footer__containers">
                    <a href="">Politica de privacidad</a>
                </div>
            </div>
            </div>
        </footer>
     );
}

export default Footer;