import img1 from "../../assets/imgs/imgcategori1.png";
import "../../assets/css/InfoProduct.css";

function InfoProduct() {
    return ( 
        <div className="info-father">
        <div className="info">

            <div className="one-div">

                <div className="part-one">
                    <img src={img1} className="img-info"/>
                    <h3>Categoria: Fertilizante</h3>
                    <h4>Proveedor: Carlos Andres</h4>
                </div>

            </div>

            <div className="two-div">

                <h2>Ajifol</h2>

                 <p>
                    El complejo 12-12-17-2MgO-22SO3 es un fertilizante complejo,
                     -esto es que contiene en el mismo gránulo el porcentaje indicado 
                     en la fórmula tanto de Nitrógeno, 
                     Fósforo, Potasio, Magnesio, Azufre y elementos menores,
                     con bajo contenido de Cloro.
                </p>

                <div className="part-four">
                    <h4>Resumen</h4>
                    <h4>Subtotal:</h4>
                    <h4>$ 300.00</h4>
                </div>

                <div className="part-five">
                    <button className="buttonsito">Agregar</button>
                    <button className="buttonsito">Comprar</button>
                </div>

            </div>

            
        </div>

        </div>
     );
}

export default InfoProduct;