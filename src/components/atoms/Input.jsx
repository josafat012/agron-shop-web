import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    outline: none;
    text-decoration: none;
    border-bottom: 1px solid gray;
    display: block;
    margin-top: 1px;
    width: 100%;

    :focus{
        border-bottom: 3px solid black;
    }
`;

function Input({type, placeholder, name}) {
    return ( 
        <StyledInput type={type} 
        placeholder={placeholder} 
        name={name}/>
     );
}

export default Input;