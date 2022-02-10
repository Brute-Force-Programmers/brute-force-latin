import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

const handleSubmitButton = () => {
//  compare user input to answer key

// if TRUE 
  // i++ (move to next vocab word)
// if FALSE
  // turn background of <Input> RED (second phase - until user inputs or backspaces)
};


const UserQuizInput = (props) => {
  return (
    <div>
      <h1> {props.type} </h1>
      <h3> {props.sectionTitle} </h3>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {props.word} {" (" + props.gender + " "} {"" + props.singular + ")"}
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={props.answer} />

        {/* dont use https://react-bootstrap.github.io/ */}
        {/* use  https://6-4-0--reactstrap.netlify.app
        The naming convention between the two is very*/}

        <Button color="primary" onClick={handleSubmitButton}>Submit</Button>
      </InputGroup>
    </div>
  );
};

export default UserQuizInput;
