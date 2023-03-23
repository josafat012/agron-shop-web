import img1 from "../../assets/imgs/imgcategori1.png";
import img2 from "../../assets/imgs/imgcategori2.jpeg"
import img3 from "../../assets/imgs/imgcategori3.png"
import plus from "../../assets/imgs/plus.svg";
import "../../assets/css/Tienda.css";

function CategoriaTienda() {
    return (  
        <div className="categorifather">

            <h2 className="title">CATEGORIAS</h2>

            <div className="categori">

                <button type="button"><img src={img1} className="img-categori"/><h3>FERTILIZANTES</h3></button>
                

            </div>
            <div className="categori">
                <button type="button"><img src={img2} className="img-categori"/><h3>HERRAMIENTAS</h3></button>

            </div>
            <div className="categori">
                <button type="button"><img src={img3} className="img-categori"/><h3>ALIMENTOS</h3></button>

            </div>
            <div className="categori">
                <a href="/vender" className="sell-product"><img src={plus} className="img-plus" />VENDER</a>
            </div>
        </div>
    );
}

export default CategoriaTienda;