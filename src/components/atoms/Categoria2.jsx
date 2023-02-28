import styled from "styled-components";

import categoria2 from"../../assets/imgs/alimento2.webp"

const StyledIMG = styled.img`
    width: 100px;
    height: 100px;
`;

function Categoria2() {
    return ( 
        
        <StyledIMG src={categoria2}/>
         

     );
}

export default Categoria2;