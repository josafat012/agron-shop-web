import React from "react";
import "../../assets/css/SubirProduct.css";


function SpamProduct() {

     let vista_pre = (event) => {
          let leer_img = new FileReader();
          let id_img = document.getElementById('img-foto')

          leer_img.onload = () =>{

               if (leer_img.readyState == 2){

                    id_img.src = leer_img.result
               }
          }

          leer_img.readAsDataURL(event.target.files[0])
     }
    return ( 
        <div className="input-father">

          <div>

             <img className="imgcenter" id="img-foto" src=" " height="200" width="200"/>

            
             <input className="imgcenter" type="file" onChange={vista_pre} />

          </div>

             
        </div>
     );
}

export default SpamProduct;