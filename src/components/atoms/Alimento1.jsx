import styled from "styled-components";

import alimento1 from"../../assets/imgs/alimento1.webp"

const StyledIMG = styled.img`
    width: 200px;
    height: 200px;
`;

function Alimento1() {
    return ( 
        
        <StyledIMG src={alimento1}/>
         

     );
}

export default Alimento1;