import styled from "styled-components";

const StyledLabel = styled.label`
    font-weight: bold;
    color: black;
`;

function Label({msn}) {
    return( 
        <StyledLabel>{msn}</StyledLabel>
     )
}

export default Label;
