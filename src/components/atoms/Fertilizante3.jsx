import styled from "styled-components";

import fertilizante3 from"../../assets/imgs/fertilizante3.webp"

const StyledIMG = styled.img`
    width: 200px;
    height: 200px;
`;

function Fertilizante3() {
    return ( 
        
        <StyledIMG src={fertilizante3}/>
         

     );
}

export default Fertilizante3;