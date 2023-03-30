import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/SignIn.css";
import { useRef } from "react";
import Swal from "sweetalert2";

function SignIn() {
    const form =useRef();
    const navigate = useNavigate();

    const inicio = (e)=>{
        e.preventDefault();

        const formData = new FormData(form.current);
        const nombreUsuario = formData.get('nombreUsuario')
        const contrasena = formData.get('contrasena')

        if(!nombreUsuario || !contrasena) {
            // alert('Llena todos los  campos!');
            Swal.fire(
                'Espera',
                'Aún no has llenado todos los campos',
                'warning'
              )
        } else{
            fetch(`https://agronshop.iothings.com.mx/usuarios/${nombreUsuario}/${contrasena}`)
            .then(response => response.json())
            .then(data => {
                if(data.message=='Contraseña incorrecta'){
                Swal.fire(
                    data.message,
                    'La contraseña que ingresaste no coincide con el usuario',
                    'error'
                  )
                }
                if(data.message=='Usuario no encontrado'){
                    Swal.fire(
                        data.message,
                        'No hemos encontrado el usuario',
                        'error'
                      )
                }
                if(data.message=='Has iniciado sesion 😀'){
                // alert('YYYYYYEEEEEEEEES!')
                Swal.fire(
                    data.message,
                    'Has click para continuar',
                    'success'
                  )
                navigate('/menu');
                }
            })
        }
    }

    return ( 
        <div className="body-login">
            <div className="body-login-container">
                <div className="body-login-container__div">
                    <form ref={form}>
                        <div className="body-login-form__title">
                            <h3>INICIA SESIÓN</h3>
                        </div>
                        <div>
                            <h3>Usuario</h3>
                            <input type="text" name="nombreUsuario" />
                        </div>
                        <div>
                            <h3>Contraseña</h3>
                            <input type="password" name="contrasena"/>
                        </div>
                        <div className="body-login-form__button">
                            <button onClick={inicio}>INICIA SESION</button>
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