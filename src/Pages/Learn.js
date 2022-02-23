import React from "react";
import NavBar from "../components/NavBar";
import UserQuizInput from "../components/UserQuizInput";

// read JSON info into object form
const readJSON = require('../vocab/AdjectivesTest.json')

const Learn = (props) => {
  return (
    
    <div>
      <NavBar />
      <UserQuizInput json = {readJSON}/>
    </div>

  );
};

export default Learn;