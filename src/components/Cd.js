import React from "react";
import styled from "styled-components";

const Cd = (props) => {

    const [clicked, setClicked] = React.useState(false)

    return (
        <StyledCd clicked={clicked} onClick={(e) => {e.stopPropagation(); setClicked(!clicked) }}>
            {!clicked && <div className="artist">{props.artist}</div>}
            {!clicked && <div className="title">{props.title}</div>}
            {clicked && <div className="title">Artist: {props.artist} </div>}
            {clicked && <div className="title">Album: {props.title}</div>}
            {clicked && <div className="title">Listened: {props.listened}</div>}
            <button onClick={(e) => { props.deleteCd(e, props.id) }} >DELETE</button>
            <button onClick={(e) => { props.openEditForm(props.id) }} >EDIT</button>
        </StyledCd>
    )

}

const StyledCd = styled.div`
display: flex;
flex-flow: ${props => props.clicked ? 'column' : 'row'};  //STYYLITELLYT CSTYSTEEMIT
gap: 20px;
width: 100%;
padding: 20px;
background-color: #4d4d60;
border: 1px solid black;
border-bottom: 0px solid black;
&:nth-child(2n){
    background-color: #4d4d54;
}
&:last-child{
    border-bottom: 1px solid black;
}
&&:hover{
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0 0 2px black;
}
`

export default Cd