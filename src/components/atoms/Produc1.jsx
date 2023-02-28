import styled from "styled-components";
import Producto1 from "../../assets/imgs/producto1.jpg"

const StyledIMG = styled.img`
    width: 100px;
    height: 100px;
`;

function Produc1() {
    return ( 
       
        <StyledIMG src={Producto1}/>
         
     );
}

export default Produc1;