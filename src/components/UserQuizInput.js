import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input , FormFeedback, FormGroup, Form} from "reactstrap";

// function to compare user input vs expected answer
const UserQuizInput = (props) => {
  //bringing in the JSON
  const theJSON = props.json;
  const mainKeys = Object.keys(theJSON);

  // Including states for the quiz
  const [inputValues, setInputValue] = useState(null);
  // const [isAnswered, setIsAnswered] = useState("Submit");
  const [count, setCount] = useState(0);
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
  const [inputValid, setInputValid] = useState(null)
  // console.log(section, type, word, gender, singularPlural, answer);

  // update the inputValue when user types in Input box
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  // Function to capture values from user input and print to console
  const handleSubmit = (event, inputValues, isAnswered, count) => {
    if (answerComparison(answer, inputValues)) {
      
      // setIsAnswered("Next Word");
      updateStates()
    } else {
      // setIsAnswered("Submit");
      // updateStates();
      alert("Wrong!")
    }
    console.log(section, type, word, gender, singularPlural, answer);
    event.preventDefault();
  };

  // function to compare user input vs expected answer and track number of correct/incorrect submissions
  const answerComparison = (expectedAnswer, userSubmission) => {
    if (expectedAnswer === userSubmission) {
      setRight(rightCount + 1);
      return true
    } else {
      // setWrong(wrongCount + 1);
      return false

    }
  };
  // consolidated JSON-related state updates into a single function
  const updateStates = () => {
    setInputValue(null);
    // setCount(count + 1);
    setSection(theJSON[mainKeys[count]].category);
    setType(theJSON[mainKeys[count]].sectionTitle);
    setWord(theJSON[mainKeys[count]].word);
    setGender(theJSON[mainKeys[count]].gender);
    setSingularPlural(theJSON[mainKeys[count]].pluralOrSingular);
    setAnswer(theJSON[mainKeys[count]].answer.join(" "));
    setInputValid(false)
    console.log(inputValid)
  };

  return (
    <div>
      <h1> {type} </h1>
      <h3> {section} </h3>
      {/* Included onChange event to update the answerValue state when user types into the input */}
      <Form>

      <FormGroup>


      <InputGroup onChange={(event) => onChange(event)}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {word} {" (" + gender + " "} {"" + singularPlural + ")"}
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={answer} value={inputValues} type="text" 
        invalid = {inputValid}
        />
        {/* Included onclick event to capture answer submission */}
        <Input
          type="submit"
          onClick={(event) =>
            handleSubmit(event, inputValues, count)
          }
        />
        <FormFeedback invalid>This bollocks is not showing!!!!</FormFeedback>
      </InputGroup>
      </FormGroup>
      </Form>

      {/* Showing quiz states for simplicity */}
      <p>InputValue: {inputValues}</p>
      <p>Count:{count}</p>
      <p>Right:{rightCount}</p>
      <p>Wrong:{wrongCount}</p>


    </div>
  );
};

export default UserQuizInput;
