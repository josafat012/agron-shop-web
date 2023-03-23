import { Link } from "react-router-dom";
import "../../assets/css/SignIn.css";

function SignIn() {
    return ( 
        <div className="body-login">
            <div className="body-login-container">
                <div className="body-login-container__div">
                    <form>
                        <div className="body-login-form__title">
                            <h3>INICIA SESIÓN</h3>
                        </div>
                        <div>
                            <h3>Usuario</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Contraseña</h3>
                            <input type="text" />
                        </div>
                        <div className="body-login-form__button">
                            <button>INICIA SESION</button>
                        </div>
                        <div className="body-login-form__links">
                            <h5>¿No te has registrado aun?</h5>
                            <Link to="/registro">REGISTRATE</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default SignIn;