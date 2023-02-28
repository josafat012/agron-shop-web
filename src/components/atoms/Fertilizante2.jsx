import styled from "styled-components";

import fertilizante2 from"../../assets/imgs/fertilizante2.webp"

const StyledIMG = styled.img`
    width: 200px;
    height: 200px;
`;

function Fertilizante2() {
    return ( 
        
        <StyledIMG src={fertilizante2}/>
         

     );
}

export default Fertilizante2;