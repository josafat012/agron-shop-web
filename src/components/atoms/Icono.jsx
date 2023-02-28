import styled from "styled-components";
import icono from "../../assets/imgs/icono.png"

const StyledIMG = styled.img`
    width: 60px;
    height: 60px;
`;

function Icono() {
    return (  
        <StyledIMG src={icono}/>
    );
}

export default Icono;