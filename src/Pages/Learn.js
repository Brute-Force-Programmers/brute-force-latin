import React from "react";
import NavBar from "../components/NavBar";
import UserQuizInput from "../components/UserQuizInput";
import SubmitButton from "../components/SubmitButton";
import {Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody, Table, CardHeader,
  InputGroup, InputGroupAddon, InputGroupText,} from 'reactstrap';

// read JSON info into object form
const readJSON = require('../vocab/AdjectivesTest.json')
// get all the 1st level key values from the object
const mainKeys = Object.keys(readJSON);
// iterator i determines what word is being read
let i = 1;
// integer indices will not work, so keys are used to access data
let currType = readJSON[mainKeys[i]].category;
let currSection = readJSON[mainKeys[i]].sectionTitle;
let currWord = readJSON[mainKeys[i]].word;
let currGender = readJSON[mainKeys[i]].gender;
let currSingPlur = readJSON[mainKeys[i]].pluralOrSingular;
let currAnswer = readJSON[mainKeys[i]].answer.join(' ');

const Learn = (props) => {
  return (
    
    <div>
      <NavBar />
      <UserQuizInput
        type={currType}
        sectionTitle={currSection}
        word={currWord}
        gender={currGender}
        singular={currSingPlur}
        answer={currAnswer}
      />
     
    </div>

  );
};

export default Learn;