import img from "../../assets/imgs/fondo3.png";
import "../../assets/css/HomeD3.css"

function HomeD3() {
    return ( 
        <div className="home-div-tres">
            <div className="home-div-tres__div home-div-tres__div1">
                <img src={img}/>
            </div>
            <div className="home-div-tres__div home-div-tres__div2">
                <h3>Con nosotros te daremos los mejores cuidados para tu ganado y tus cultivos porque si el campo no produce la ciudad no come</h3>
            </div>
        </div>
     );
}

export default HomeD3;