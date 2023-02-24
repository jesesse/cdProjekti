import React from "react";
import styled from "styled-components";
import Cd from "./Cd";
import Button from "./Button";


const Library = (props) => {

    const cdList = props.cdList.map(cd => {

        return (
            <Cd
                id={cd.id}
                key={cd.id}
                artist={cd.artist}
                title={cd.title}
                listened={cd.listened}
                deleteCd={props.deleteCd}
                openEditForm={props.openEditForm}
                handleChange={props.handleChange}
                >    
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

border: 1px solid black;
height: 300px;
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


export default Library