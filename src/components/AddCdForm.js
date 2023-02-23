import React from "react";
import styled from "styled-components";
import Button from "./Button";

const AddCdForm = (props) => {

    return (
        <Form>
            <InputWrapper className="artist--container">
                <label htmlFor="artist">Artist:</label>
                <input onChange={(e) => props.handleChange(e)} type="text" className="artist" name="artist"/>
            </InputWrapper>
            <InputWrapper className="album-title--container">
                <label htmlFor="title">Title:</label>
                <input onChange={(e) => props.handleChange(e)} type="text" className="title" name="title" />
            </InputWrapper>
            <Button color="#a8ffa8" type="submit" onClick={(e) => props.addCd(e)}>ADD A CD TO LIBRARY</Button>
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

export default AddCdForm