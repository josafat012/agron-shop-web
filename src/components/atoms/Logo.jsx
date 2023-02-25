import styled from "styled-components";
import imgLogo from '../../assets/imgs/Logo.png';


const StyledIMG = styled.img`
    width: 100px;
    height: 100px;
`;

function Logo({src}) {
    return ( 
        <StyledIMG src={imgLogo}/>
     );
}

export default Logo;