import styled from "styled-components";
import Produc1 from "../../assets/imgs/produc1.jpg"


const StyledIMG = styled.img`
    width: 100px;
    height: 100px;
`;

function Protienda1() {
    return ( 
       
        <StyledIMG src={Produc1}/>
         
     );
}

export default Protienda1;