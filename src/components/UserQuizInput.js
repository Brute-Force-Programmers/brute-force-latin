import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {Button, Form, FormGroup, Label,  FormText, Col, Row, Card, CardBody, Table, CardHeader,SubmitButton,
} from 'reactstrap';
// import SubmitButton from "./SubmitButton";

const UserQuizInput = (props) => {
  return (
    <div>
      <FormGroup row>
      <Col sm={1}></Col>
         <Col sm={10}>
          <h1>{props.type}</h1>
          <h3>{props.sectionTitle}</h3>
          <InputGroup >
          {/* <InputGroup className="w-75" style = {{marginLeft: "10px"}} > */}
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{props.word} {" (" + props.gender + " "}
              {"" +props.singular + ")"}</InputGroupText>
            </InputGroupAddon>
            <Input placeholder={props.answer} />
          </InputGroup>
          <SubmitButton style = {{marginTop: "10px"}}></SubmitButton>

        </Col>
        </FormGroup>
    </div>
  );
};

export default UserQuizInput;