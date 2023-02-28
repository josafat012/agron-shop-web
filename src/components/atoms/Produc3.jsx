import styled from "styled-components";
import producto3 from "../../assets/imgs/producto3.png"

const StyledIMG = styled.img`
    width: 100px;
    height: 100px;
`;

function Produc3() {
    return ( 
       
        <StyledIMG src={producto3}/>
         
     );
}

export default Produc3;