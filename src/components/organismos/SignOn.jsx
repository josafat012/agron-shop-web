import "../../assets/css/SignOn.css";
import { useRef } from "react";

function SignOn() {

    const form = useRef();

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        let URI = 'https://agronshop.iothings.com.mx/usuarios';
        let options = {
            method: 'POST',
            headers:{ "Content-Type":"application/json", },
            body:JSON.stringify({
                correo:formData.get("correo"),
                telefono:formData.get("telefono"),
                usuario:formData.get("usuario"),
                constrasena: formData.get("contrasena"),
            })
        }
        fetch(URI, options)
        .then(response => response.json())
        .then(data => {alert(JSON.stringify(data))})
    }


    return ( 
        <div className="body-register">
            <div className="body-register-conteiner">
                <div className="boby-register-conteiner__div">
                    <form ref={form}> 
                        <div className="body-register-form__title">
                            <h3>REGISTRATE EN AGRON-SHOP</h3>
                        </div>
                        <div>
                            <h3>Correo</h3>
                            <input type="text" name="correo" />
                        </div>
                        <div>
                            <h3>Telefono</h3>
                            <input type="text" name="telefono"/>
                        </div>
                        <div>
                            <h3>Usuario</h3>
                            <input type="text" name="usuario" />
                        </div>
                        <div>
                            <h3>Contraseña</h3>
                            <input type="password" name="contrasena"/>
                        </div>
                        <div className="form-register-button">
                            <button onClick={handlerClick}>REGISTRARSE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default SignOn;