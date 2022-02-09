import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  SubmitButton,
} from "reactstrap";


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
      </InputGroup>
      <SubmitButton style={{ marginTop: "10px", }}></SubmitButton>
    </div>
  );
};

export default UserQuizInput;
