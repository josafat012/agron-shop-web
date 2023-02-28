import { Link } from "react-router-dom"
import Group from "../../assets/imgs/Group.png"
import Line32 from "../../assets/imgs/Line32.png"
import Line33 from "../../assets/imgs/Line33.png"
import "../../assets/css/FooterMenu.css"

function FooterMenu() {
    return (  
        <footer className="Footer">
            <h4 className="sig">siganos</h4>
            <div className="grop">
            <img src={Line32}className="line32" />
            <img src={Group} className="iconos"/>
            <img src={Line33}className="line33" />
            </div>

            <div >

             <div>
                 <Link className="polit" to="/infolegal">Informacion Legal</Link>
             </div>

             <div>
                <Link className="polit" to="/politica">Politica de Seguridad</Link>
             </div>

            </div>

        </footer>
    );
}

export default FooterMenu;