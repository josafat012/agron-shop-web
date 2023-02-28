import styled from "styled-components";
import producto2 from "../../assets/imgs/producto2.jpg"

const StyledIMG = styled.img`
    width: 100px;
    height: 100px;
`;

function Produc2() {
    return ( 
       
        <StyledIMG src={producto2}/>
         
     );
}

export default Produc2;