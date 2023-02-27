import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../atoms/TitleRegister";
import WrapperInput from "../moleculas/WrapperInput";


function LoginSection() {
    const form =useRef();
    const navigate =useNavigate();

    const handlerClick = (e) => {
       
        e.preventDefault();

        const formData = new FormData(form.current);
        const nombreUsuario = formData.get('nombreUsuario')
        const contrasena = formData.get('contrasena')

        if(!nombreUsuario || !contrasena) {
            alert('Llena todos los  campos!');
        } else{
            fetch(`http://35.170.116.164:3000/usuarios/${nombreUsuario}/${contrasena}`)
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if(data.message=='Has iniciado sesion 😀')
                // alert('YYYYYYEEEEEEEEES!')
                navigate('/');
            })
        }
    }


    return ( 
        <form ref={form} className="registerForm">
            <div className="registerForm-div">
                <Title>INICIA SESIÓN</Title>


                <WrapperInput
                msn="Usuario"
                type="text"
                placeholder="Escriba su usuario"
                name="nombreUsuario"/>


                <WrapperInput
                msn="Contraseña"
                type="password"
                placeholder="Escriba su contraseña"
                name="contrasena"/>

                <button onClick={handlerClick} >INICIAR</button>

            </div>
        </form>
     );
}

export default LoginSection;