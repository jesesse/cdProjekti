import React from "react";
import styled from "styled-components";
import Button from "./Button";

const EditCdForm = (props) => {
    
    return (
        <Form action="#" method="POST">
            <InputWrapper className="artist--container">
                <label htmlFor="artist">Artist:</label>
                <input onChange={(e) => props.handleEditChange(e)} type="text" className="artist" name="artist" value={props.editableCd.artist} required/>
            </InputWrapper>
            <InputWrapper className="album-title--container">
                <label htmlFor="title">Title:</label>
                <input onChange={(e) => props.handleEditChange(e)} type="text" className="title" name="title" value={props.editableCd.title} required/>
            </InputWrapper>
            <fieldset>
                <legend>Album listened?</legend>
                <label htmlFor="Yes"> Yes </label>
                <input onChange={(e) => props.handleEditChange(e)} id="Yes" type="radio" className="listened" name="listened" value="Yes" />
                <label htmlFor="No">No</label>
                <input onChange={(e) => props.handleEditChange(e)} id="No" type="radio" className="listened" name="listened" value="No" />
            </fieldset>

            <Button color="#a8ffa8" type="submit" onClick={(e) => props.editCd(e, props.id)}>Edit</Button>
        </Form>
    )

}

const Form = styled.form`
background-color: aliceblue;
padding: 50px;
position: absolute;
bottom: 50%;
z-index: 1;
display: flex;
flex-flow: column;
gap: 20px;
border-radius: 10px;
`

const InputWrapper = styled.div`
display: flex;
gap: 20px;
`

export default EditCdForm;