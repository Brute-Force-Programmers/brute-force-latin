import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const UserQuizInput = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Gate (feminine)</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="type here" />
      </InputGroup>
    </div>
  );
};

export default UserQuizInput;
