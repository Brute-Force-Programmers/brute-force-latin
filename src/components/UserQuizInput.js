import React, { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const UserQuizInput = (props) => {
  //bringing in the JSON
  const theJSON = props.json
  const mainKeys = Object.keys(theJSON);


  // Including states for the quiz
  const [inputValues, setInputValue] = useState(null);
  const [isAnswered, setIsAnswered] = useState("Submit");
  const [count, setCount] = useState(1);
  const [section, setSection] = useState(theJSON[mainKeys[count]].category);
  const [type, setType] = useState(theJSON[mainKeys[count]].sectionTitle);
  const [word, setWord] = useState(theJSON[mainKeys[count]].word);
  const [gender, setGender] = useState(theJSON[mainKeys[count]].gender);
  const [singularPlural, setSingularPlural] = useState(theJSON[mainKeys[count]].pluralOrSingular);
  const [answer, setAnswer] = useState(theJSON[mainKeys[count]].answer.join(' '));
  console.log(section, type, word, gender, singularPlural, answer)



  
  // let i = 1;
  // integer indices will not work, so keys are used to access data
  // let currType = theJSON[mainKeys[count]].category;
  // let currSection = theJSON[mainKeys[count]].sectionTitle;
  // let currWord = theJSON[mainKeys[count]].word;
  // let currGender = theJSON[mainKeys[count]].gender;
  // let currSingPlur = theJSON[mainKeys[count]].pluralOrSingular;
  // let currAnswer = theJSON[mainKeys[count]].answer.join(' ');

  

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
      setSection(theJSON[mainKeys[count]].category);
      setType(theJSON[mainKeys[count]].sectionTitle);
      setWord(theJSON[mainKeys[count]].word);
      setGender(theJSON[mainKeys[count]].gender);
      setSingularPlural(theJSON[mainKeys[count]].pluralOrSingular);
      setAnswer(theJSON[mainKeys[count]].answer.join(' '));
    }
    console.log(inputValues, isAnswered, count);
    console.log(section, type, word, gender, singularPlural, answer)
    // console.log(currType, currSection, currWord, currGender, currSingPlur, currAnswer)
    event.preventDefault();
  };
  return (
    <div>
      <h1> {type} </h1>
      <h3> {section} </h3>
      {/* Included onChange event to update the answerValue state when user types into the input */}
      <InputGroup onChange={(event) => onChange(event)}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {/* {props.word} {" (" + props.gender + " "} {"" + props.singular + ")"} */}
            {word} {" (" + gender + " "} {"" + singularPlural + ")"}

          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={answer} value={inputValues} type="text" />
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
