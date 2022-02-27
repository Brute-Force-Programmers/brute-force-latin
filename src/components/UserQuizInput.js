import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input , FormFeedback, FormGroup, Form} from "reactstrap";
import Toast from './Toast';

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
  // states for Toast notification
  const [list, setList] = useState([]);
  let toastProperties = null;
  // console.log(section, type, word, gender, singularPlural, answer);

  // update the inputValue when user types in Input box
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  // Function to capture values from user input and print to console
  const handleSubmit = (event, inputValues, isAnswered, count) => {
    if (answerComparison(answer, inputValues)) {
      showToast('success')
      updateStates()
    } else {
      showToast('failure')
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
    setCount(count + 1);
    setSection(theJSON[mainKeys[count]].category);
    setType(theJSON[mainKeys[count]].sectionTitle);
    setWord(theJSON[mainKeys[count]].word);
    setGender(theJSON[mainKeys[count]].gender);
    setSingularPlural(theJSON[mainKeys[count]].pluralOrSingular);
    setAnswer(theJSON[mainKeys[count]].answer.join(" "));
    setInputValid(false)
    console.log(inputValid)
  };

  // Function to show toast notification
  const showToast = (type) => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success!',
          description: 'You are worthy of the next word',
          backgroundColor: '#5cb85c',
          // icon: checkIcon
        }
        break;
      case 'failure':
        toastProperties = {
          id,
          title: 'Wrong!',
          description: 'Input the correct answer to advance',
          backgroundColor: '#d9534f',
          // icon: errorIcon
        }
        break;
        default:
          setList([]);
    }

    setList([...list, toastProperties]);
  }
  

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
      
      {/* Toast notification component */}
      <Toast 
        toastList={list}
        position="bottom-right"
      />

    </div>
  );
};

export default UserQuizInput;
