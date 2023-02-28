import styled from "styled-components";

import alimento2 from"../../assets/imgs/alimento2.webp"

const StyledIMG = styled.img`
    width: 200px;
    height: 200px;
`;

function Alimento2() {
    return ( 
        
        <StyledIMG src={alimento2}/>
         

     );
}

export default Alimento2;