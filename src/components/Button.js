import styled from "styled-components";

const Button = styled.button`
    background-color: aliceblue;
    padding: 7px;
    margin: 50px;
    margin-bottom: 0;
    border-radius: 8px;
    &:hover{
        cursor: pointer;
    }
    background-color: ${(props) => props.color};
    `;
    

    export default Button
