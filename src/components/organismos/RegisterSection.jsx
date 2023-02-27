import { useRef } from "react";
import Title from "../atoms/TitleRegister";
import WrapperInput from "../moleculas/WrapperInput";



function RegisterSection() {
    const form = useRef();

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        let URI = 'http://35.170.116.164:3000/usuarios';
        let options = {
            method: 'POST',
            headers:{"Content-Type":"application/json",},
            body:JSON.stringify({
                nombre:formData.get('nombre'),
                apellido:formData.get('apellido'),
                edad:formData.get('edad'),
                nombreUsuario:formData.get('nombreUsuario'),
                correo: formData.get('correo'),
                contrasena:formData.get('contrasena'),
            })
        }
        fetch(URI,options)
        .then(response => response.json())
        .then(data => {alert(JSON.stringify(data))})
    }


    return ( 
        <form ref={form} className="registerForm">
            <div className="registerForm-div">
                <Title>REGISTRATE EN AGRON-SHOP</Title>

                <WrapperInput
                msn="Nombre"
                type="text"
                placeholder="Escriba su nombre"
                name="nombre"/>

                <WrapperInput
                msn="Apellido"
                type="text"
                placeholder="Escriba su apellido"
                name="apellido"/>

                <WrapperInput
                msn="Edad"
                type="text"
                placeholder="Escriba su edad"
                name="edad"/>

                <WrapperInput
                msn="Usuario"
                type="text"
                placeholder="Escriba su nombre"
                name="nombreUsuario"/>

                <WrapperInput
                msn="Correo"
                type="text"
                placeholder="Escriba su nombre"
                name="correo"/>

                <WrapperInput
                msn="Contraseña"
                type="text"
                placeholder="Escriba su nombre"
                name="contrasena"/>

                <button onClick={handlerClick}>Registrarse</button>
                <button type="reset">Borrar Campos</button>

            </div>
        </form>
     );
}

export default RegisterSection;