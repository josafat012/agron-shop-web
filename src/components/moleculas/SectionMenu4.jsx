import Cuidado1 from "../atoms/Cuidado1";
import Cuidado2 from "../atoms/Cuidado2";
import "../../assets/css/SectionMenu4.css"

function SectionMenu4() {
    return ( 

        <div>

         <div className="title1"><h2>Te damos los mejores cuidados para tu ganado y tus cultivos </h2></div>

          <div className="divfather">
            

             <div className="divtext">

                 <div>
                    <Cuidado1/>
                  </div>

                  <div>

                     <div className="divtitle">
                      <h2>Distribuya adecuadamente las plantas del cultivo</h2>
                     </div>

                     <div className="divtext2">

                       <p>una buena distribución dentro del área de cultivo 
                        podría reducir considerablemente algunos factores 
                        de riesgo como lo son la sobreexposición o 
                        la presencia de encharcamientos a causa del sistema de riego.
                       </p>

                     </div>

                     <div className="booton">
                       <button>Ver mas</button>
                     </div>

                 </div>

                

             </div>

             {/*segundo div*/}

             <div className="divtext">

                 <div><Cuidado2/></div>

                 <div>

                     <div className="divtitle">
                      <h2>Vigile constantemente las condiciones de la siembra: los cuidados de la siembra</h2>
                     </div>

                     <div className="divtext2">

                         <p>son fundamentales para determinar un crecimiento 
                           adecuado dentro del cultivo. Desde propiciar las 
                           condiciones óptimas de germinación.
                         </p>

                     </div>

                     <div className="booton">
                      <button>Ver mas</button>
                     </div>

                 </div>

             </div>

           </div>
        </div>
     );
}

export default SectionMenu4;