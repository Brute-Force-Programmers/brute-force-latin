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
  const [isAnswered, setIsAnswered] = useState("Submit")
  const [count, setCount] = useState(0)
  const onChange = (event) => {
    setInputValue(event.target.value)
  }
  useEffect(() => {
    console.log(inputValues)
  }, [inputValues]); 
  
  const handleSubmit = (event, inputValues,isAnswered,count) => {
    if (isAnswered == 'Submit') {
      setIsAnswered('Next Word')
    }
    else {
      setIsAnswered('Submit')
      setInputValue(null)
      // document.getElementById("TheInput").reset();
      // event.target.reset()
      // getelementby
      // setInput({ Input1: "", Input2: "" });
      setCount(count + 1)
    }
    console.log('Submission')
    console.log(inputValues, isAnswered, count)
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
        <Input 
          // value = {inputValues} 
          placeholder={props.answer} 
          // id='TheInput' 
          // name = 'TheInput'
          value = {inputValues}
          type = 'text'
        />
        <Input 
          type = 'submit' 
          onClick={(event) => handleSubmit(event, inputValues,isAnswered,count)} 
          value = {isAnswered}

        />
      </InputGroup>

      <p>The states are: {inputValues}, {isAnswered}, {count}</p>

    </div>
  );
};

export default UserQuizInput;
