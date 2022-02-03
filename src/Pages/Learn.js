import React from "react";
import NavBar from "../components/NavBar";
import UserQuizInput from "../components/UserQuizInput";


const readJSON = require('../vocab/AdjectivesTest.json')




const Learn = (props) => {
  

  return (
    
    <div>
      <NavBar />
      <UserQuizInput
        type={readJSON.largeMS.category}
        sectionTitle={readJSON.largeMS.sectionTitle}
        word={readJSON.largeMS.word}
        gender={readJSON.largeMS.gender}
        singular={readJSON.largeMS.pluralOrSingular}
        answer={(readJSON.largeMS.answer).join(' ')}
      />
    </div>
  );
};

export default Learn;
