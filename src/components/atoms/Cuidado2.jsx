import styled from "styled-components";
import cuidado2 from "../../assets/imgs/cuidado2.jpg"

const StyledIMG = styled.img`
    width: 242px;
    height: 229px;
`;

function Cuidado2() {
    return (  
        <StyledIMG src={cuidado2}/>
    );
}

export default Cuidado2;