import React, {useEffect, useState} from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

// this is a test

const UserQuizInput = (props) => {
  const [inputValues, setInputValue] = useState(null)
  const onChange = (event) => {
    setInputValue(event.target.value)
  }
  useEffect(() => {
    console.log(inputValues)
  }, [inputValues]); 
  
  const handleSubmit = (event, inputValues) => {
    console.log('Submission')
    console.log(inputValues)
    event.preventDefault();
  }
  return (
    <div>
      <h1> {props.type} </h1>
      <h3> {props.sectionTitle} </h3>
      <InputGroup onChange={(event) => onChange(event)}
       >
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {props.word} {" (" + props.gender + " "} {"" + props.singular + ")"}
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={props.answer} />
        <Input type = 'submit' onClick={(event) => handleSubmit(event, inputValues)}/> 
      </InputGroup>
    </div>
  );
};

export default UserQuizInput;
