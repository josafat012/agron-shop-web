import img from "../../assets/imgs/HomeD2.png";
import "../../assets/css/HomeD2.css"
function HomeD2() {
    return ( 
        <div className="home-div-dos">
            <h2>AGRON - SHOP</h2>
            <div className="home-div-dos__container">
                <div className="home-div-dos__div home-div-dos__div1">
                    <h3>Es una aplicación web que brinda a los campesinos y agrónomos un sitio en donde puedan surtirse con productos de ganadería</h3>
                </div>
                <div className="home-div-dos__div home-div-dos__div2">
                    <img src={img}/>
                </div>
            </div>
        </div>
     );
}

export default HomeD2;