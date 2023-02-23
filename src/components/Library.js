import React from "react";
import styled from "styled-components";
import Cd from "./Cd";
import Button from "./Button";

const StyledLibrary = styled.div`
display: flex;
flex-flow: column;
align-items: center;
margin: 50px;
padding: 50px;
width: 1024px;
background-color: #4d4d60;
box-shadow: 0 0 10px black;
`
const CdListContainer = styled.div`
height: 500px;
width: 100%;
padding: 50px;
display: flex;
flex-flow: column;
align-items: center;
background-color: #434649;
justify-content: ${(props) => props.listLength === 0 ? "center" : "start"};
box-shadow: inset 0 0 10px black;
overflow: auto;
`


const Library = (props) => {

    const cdList = props.cdList.map(cd => {

        return (
            <Cd
                key={cd.id}
                artist={cd.artist}
                title={cd.title}>
            </Cd>
        )
    })

    return (
        <StyledLibrary>
            <CdListContainer listLength={props.cdList.length}>
                {props.cdList.length === 0 ? "Is empty, add CD" : cdList}
            </CdListContainer>
            <Button onClick={() => { props.openForm() }}>ADD A CD</Button>
        </StyledLibrary>
    )
}




export default Library