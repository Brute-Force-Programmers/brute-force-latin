import React, { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

// function to compare user input vs expected answer
const UserQuizInput = (props) => {
  //bringing in the JSON
  const theJSON = props.json;
  const mainKeys = Object.keys(theJSON);

  // Including states for the quiz
  const [inputValues, setInputValue] = useState(null);
  const [isAnswered, setIsAnswered] = useState("Submit");
  const [count, setCount] = useState(1);
  const [rightCount, setRight] = useState(0);
  const [wrongCount, setWrong] = useState(0);
  const [section, setSection] = useState(theJSON[mainKeys[count]].category);
  const [type, setType] = useState(theJSON[mainKeys[count]].sectionTitle);
  const [word, setWord] = useState(theJSON[mainKeys[count]].word);
  const [gender, setGender] = useState(theJSON[mainKeys[count]].gender);
  const [singularPlural, setSingularPlural] = useState(
    theJSON[mainKeys[count]].pluralOrSingular
  );
  const [answer, setAnswer] = useState(
    theJSON[mainKeys[count]].answer.join(" ")
  );
  console.log(section, type, word, gender, singularPlural, answer);

  // update the inputValue when user types in Input box
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  // Function to capture values from user input and print to console
  const handleSubmit = (event, inputValues, isAnswered, count) => {
    if (isAnswered === "Submit") {
      answerComparison(answer, inputValues);
      setIsAnswered("Next Word");
    } else {
      setIsAnswered("Submit");
      updateStates();
    }
    console.log(section, type, word, gender, singularPlural, answer);
    event.preventDefault();
  };

  // function to compare user input vs expected answer and track number of correct/incorrect submissions
  const answerComparison = (expectedAnswer, userSubmission) => {
    if (expectedAnswer === userSubmission) {
      setRight(rightCount + 1);
    } else {
      setWrong(wrongCount + 1);
    }
  };
  // consolidated JSON-related state updates into a single function
  const updateStates = () => {
    setInputValue(null);
    setCount(count + 1);
    setSection(theJSON[mainKeys[count]].category);
    setType(theJSON[mainKeys[count]].sectionTitle);
    setWord(theJSON[mainKeys[count]].word);
    setGender(theJSON[mainKeys[count]].gender);
    setSingularPlural(theJSON[mainKeys[count]].pluralOrSingular);
    setAnswer(theJSON[mainKeys[count]].answer.join(" "));
  };

  return (
    <div>
      <h1> {type} </h1>
      <h3> {section} </h3>
      {/* Included onChange event to update the answerValue state when user types into the input */}
      <InputGroup onChange={(event) => onChange(event)}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {word} {" (" + gender + " "} {"" + singularPlural + ")"}
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={answer} value={inputValues} type="text" />
        {/* Included onclick event to capture answer submission */}
        <Input
          type="submit"
          onClick={(event) =>
            handleSubmit(event, inputValues, isAnswered, count)
          }
          value={isAnswered}
        />
      </InputGroup>

      {/* Showing quiz states for simplicity */}
      <p>InputValue: {inputValues}</p>
      <p>IsAnsered:{isAnswered}</p>
      <p>Count:{count}</p>
      <p>Right:{rightCount}</p>
      <p>Wrong:{wrongCount}</p>
    </div>
  );
};

export default UserQuizInput;
