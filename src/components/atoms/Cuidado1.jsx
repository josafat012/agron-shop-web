import styled from "styled-components";
import cuidado1 from "../../assets/imgs/cuidado1.jpg"

const StyledIMG = styled.img`
    width: 242px;
    height: 229px;
`;

function Cuidado1() {
    return (  
        <StyledIMG src={cuidado1}/>
    );
}

export default Cuidado1;