import img1 from "../../assets/imgs/imgcategori1.png";
import Buttonsito from "../atomos/Buttonsito";
import "../../assets/css/Tienda.css";
import { Link, useNavigate } from "react-router-dom";

import productContext from "../../context/ProductContext";

import { useState, useEffect, useRef, useContext } from "react";

function ProductTienda() {
   const navigate = useNavigate();
   const valor = useRef(null);
   // const [idProduct, setIdProduct] = useState({productContext})

   // const handlerClick = (e) => {
   //    const variable = valor.current
   //    setIdProduct({"id" : variable})
   //    e.preventDefault();
   //    console.log(variable)
   //    navigate('/')
   // }

   const [productos, setProductos] = useState([]);

   useEffect(() => {
      fetch("https://agronshop.iothings.com.mx/productos")
      .then(res => res.json())
      .then(data => {
         setProductos(data);
      })
   }, [])

    return ( 
        <div className="productfather">
           {productos.map(producto => 
                        <div className="grid-product">
                           {/* {setIdProduct({"id" : producto._id})} */}
                        <div className="card-body">
                          <img src={producto.image} class="img-product" alt="..."/>
                          <h2 className="title-product">{producto.nombre}</h2>
                          <h3 className="price-product">${producto.precio} MXN</h3>
                          <span value={producto._id} ref={valor}></span>
                          {/* <button onClick={handlerClick}>Comprar</button> */}

                          <Link to="/producto" className="buy-product">Comprar</Link>
                        </div>
                         
                     </div>
            
            )}
        </div>

     );
}

export default ProductTienda;