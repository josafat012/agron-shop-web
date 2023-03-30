import galeria1 from "../../assets/imgs/galeria1.jpeg"
import galeria2 from "../../assets/imgs/galeria2.png"
import galeria3 from "../../assets/imgs/galeria3.jpeg"
import plus from "../../assets/imgs/plus.svg";
import { Link } from "react-router-dom";
import "../../assets/css/Galeria.css";
import { useState, useEffect, useRef, useContext } from "react";


function Galeria() {

    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        fetch("https://agronshop.iothings.com.mx/galerias")
        .then(res => res.json())
        .then(data => {
           setProductos(data);
        })
     }, [])

    return ( 
        <div >

            <div className="title-galery">
              <h1>GALERIA</h1>
            </div>

            <div className="title-img">

              <div className="agregar">
                 <Link to="/publicar" className="sell-img"><img src={plus} className="img-mas" />AGREGAR</Link>
              </div>

            </div>


         <div className="grid-container">
            
            <div className="grid-item">
                <img src={galeria1} alt="" />
            </div>

            <div className="grid-item">
                <img src={galeria2} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria3} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria2} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria3} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria1} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria3} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria2} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria1} alt="" />
            </div>
            <div className="grid-item">
                <img src={galeria3} alt="" />
            </div>

            <div className="grid-item">
                <img src={galeria1} alt="" />
            </div>

            <div className="grid-item">
                <img src={galeria1} alt="" />
            </div>

            <div className="grid-item">
                <img src={galeria1} alt="" />
            </div>

            {productos.map(producto => 
            <div className="grid-item">
                <img src={producto.image} alt="" />
            </div>
                
                )}
            

         </div>
        </div>
     );
}

export default Galeria;