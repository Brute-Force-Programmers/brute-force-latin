import React, { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const UserQuizInput = (props) => {
  // Including states for the quiz
  const [inputValues, setInputValue] = useState(0);
  const [isAnswered, setIsAnswered] = useState("Submit");
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to capture values from user input and print to console
  const handleSubmit = (event, inputValues, isAnswered, count) => {
    if (isAnswered == "Submit") {
      setIsAnswered("Next Word");
    } else {
      setIsAnswered("Submit");
      setInputValue(null);
      setCount(count + 1);
    }
    console.log(inputValues, isAnswered, count);
    event.preventDefault();
  };
  return (
    <div>
      <h1> {props.type} </h1>
      <h3> {props.sectionTitle} </h3>
      {/* Included onChange event to update the answerValue state when user types into the input */}
      <InputGroup onChange={(event) => onChange(event)}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {props.word} {" (" + props.gender + " "} {"" + props.singular + ")"}
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={props.answer} value={inputValues} type="text" />
        {/* Included onclick event to console log answer submission */}
        <Input
          type="submit"
          onClick={(event) => handleSubmit(event, inputValues, isAnswered, count)
          }
          value={isAnswered}
        />
      </InputGroup>

      {/* Showing quiz states for simplicity */}
      <p>InputValue: {inputValues}</p>
      <p>IsAnsered:{isAnswered}</p>
      <p>Count:{count}</p>
    </div>
  );
};

export default UserQuizInput;
