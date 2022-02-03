import React from "react";
import NavBar from "../components/NavBar";
import UserQuizInput from "../components/UserQuizInput";


const readJSON = require('../vocab/AdjectivesTest.json')

const Learn = (props) => {
  
  return (
    <div>
      <NavBar />)
      <UserQuizInput
        type={Object.keys(readJSON)}
        sectionTitle={readJSON.adjectives.largeMS.sectionTitle}
        word={readJSON.adjectives.word}
        gender={readJSON.adjectives.largeMS.gender}
        singular={readJSON.adjectives.largeMS.pluralOrSingular}
        answer={(readJSON.adjectives.largeMS.answer).join(' ')}
      />
    </div>
  );
};

export default Learn;
