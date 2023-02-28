import styled from "styled-components";

import fertilizante1 from"../../assets/imgs/fertilizante1.webp"

const StyledIMG = styled.img`
    width: 200px;
    height: 200px;
`;

function Fertilizante1() {
    return ( 
        
        <StyledIMG src={fertilizante1}/>
         

     );
}

export default Fertilizante1;