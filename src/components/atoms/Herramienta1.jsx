import styled from "styled-components";

import herramenta1 from"../../assets/imgs/herramienta1.webp"

const StyledIMG = styled.img`
    width: 200px;
    height: 200px;
`;

function Herramienta1() {
    return ( 
        
        <StyledIMG src={herramenta1}/>
         

     );
}

export default Herramienta1;