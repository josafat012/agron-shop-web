import { Link } from "react-router-dom";
import Protienda1 from "../atoms/Protienda1";
import Categoria2 from "../atoms/Categoria2";
import Categoria3 from "../atoms/Categoria3";
import SectionTienda12 from "../atoms/SectionTienda12";
import SectionTienda13 from "../atoms/SectionTienda13";
import SectionTienda14 from "../atoms/SectionTienda14";
import "../../assets/css/SectionTienda1.css";

function SectionTienda1() {
    return ( 
        <div className="divpadre1">
            <div className="divpadre2">

                <div className="divcategoria">
                    <h3>Categorias</h3>
                </div>

                <div className="divcontainer1">
                    <div>
                      <Protienda1/>
                    </div>

                     <Link className="categoria" to="#">Fertilizantes</Link>

                </div>

              <div className="divcontainer1">
                    <div>
                      <Categoria2/>
                    </div>

                    <div>

                     <Link className="categoria" to="#">Alimentos</Link>

                    </div>
              </div>

              <div className="divcontainer1">
                    <div>
                      <Categoria3/>
                    </div>

                    <div>

                     <Link className="categoria" to="#">Herramientas</Link>

                    </div>
              </div>

            </div>

            <div className="divpadre3">
                <>
                <SectionTienda12/>
                <SectionTienda13/>
                <SectionTienda14/>
                </>
            </div>

       

        </div>
     );
}

export default SectionTienda1;