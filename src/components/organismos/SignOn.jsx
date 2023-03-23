import "../../assets/css/SignOn.css";

function SignOn() {
    return ( 
        <div className="body-register">
            <div className="body-register-conteiner">
                <div className="boby-register-conteiner__div">
                    <form>
                        <div className="body-register-form__title">
                            <h3>REGISTRATE EN AGRON-SHOP</h3>
                        </div>
                        <div>
                            <h3>Correo</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Telefono</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Usuario</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Contraseña</h3>
                            <input type="password" />
                        </div>
                        <div className="form-register-button">
                            <button>REGISTRARSE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default SignOn;