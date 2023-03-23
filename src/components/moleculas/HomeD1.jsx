import "../../assets/css/HomeD1.css";
import { useNavigate } from "react-router-dom";

function HomeD1() {
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
         
        <div className="home-div-uno">
            <div>
                <h1>Todos los productos que necesitas para tu campo</h1>
                <button onClick={handlerClick}>INICIA SESION</button>
            </div>
        </div>
     );
}

export default HomeD1;