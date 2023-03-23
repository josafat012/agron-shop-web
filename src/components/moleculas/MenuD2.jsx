import img from "../../assets/imgs/producto3.png";
import "../../assets/css/MenuD2.css";

function MenuD2() {
    return ( 
        <div className="menu-div-dos">
            <div className="card-div">
                <div className="card-contenedor">
                    <div className="card-contenedor__img">
                        <img src={img}/>
                    </div>
                    <div className="card-contenedor__titulo">
                        <h3>FERTIMAX</h3>
                    </div>
                    <div className="card-contenedor__descripcion">
                        <h4>Contiene en el mismo gránulo el porcentaje indicado en la fórmula tanto de Nitrógeno</h4>
                    </div>
                    <div className="card-contenedor__boton">
                        <button>VER MAS</button>
                    </div>
                </div>
            </div>

            <div className="card-div">
                <div className="card-contenedor">
                    <div className="card-contenedor__img">
                        <img src={img}/>
                    </div>
                    <div className="card-contenedor__titulo">
                        <h3>FERTIMAX</h3>
                    </div>
                    <div className="card-contenedor__descripcion">
                        <h4>Contiene en el mismo gránulo el porcentaje indicado en la fórmula tanto de Nitrógeno</h4>
                    </div>
                    <div className="card-contenedor__boton">
                        <button>VER MAS</button>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default MenuD2;