import styled from "styled-components";

import alimento3 from"../../assets/imgs/alimento3.webp"

const StyledIMG = styled.img`
    width: 200px;
    height: 200px;
`;

function Alimento3() {
    return ( 
        
        <StyledIMG src={alimento3}/>
         

     );
}

export default Alimento3;