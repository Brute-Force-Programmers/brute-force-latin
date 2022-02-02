import React from "react";
import NavBar from "../components/NavBar";
import UserQuizInput from "../components/UserQuizInput";


const readJSON = require('../vocab/AdjectivesTest.json')
const wordArray = ['Gate', 'Gates', 'Friend', 'Friends']

const Learn = (props) => {
  console.log(readJSON)
  console.log("largeMS", readJSON.adjectives.largeMS)
  return (
    <div>
      <NavBar />
      <UserQuizInput
        type= {(Object.keys(readJSON)).toString().toUpperCase()}
        declension= {readJSON.adjectives.largeMS.sectionTitle}
        word= {readJSON.adjectives.largeMS.word}
        gender = {readJSON.adjectives.largeMS.gender}
        pluralOrSingular = {readJSON.adjectives.largeMS.pluralOrSingular}  //"Large (masculine, singular)"
        answer= {readJSON.adjectives.largeMS.declensions.join(', ')} //'"magnus", "magni", "magno", "magnum", "magno"'
        />
    </div>
  );
};

export default Learn;
