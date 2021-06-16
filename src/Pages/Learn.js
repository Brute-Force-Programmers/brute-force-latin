import React from "react";
import NavBar from "../components/NavBar";
import UserQuizInput from "../components/UserQuizInput";
import nouns from "../vocab/nouns"

const Learn = (props) => {
    console.log(nouns);
  return (
    <div>
      <NavBar />
      <UserQuizInput
        type="nouns"
        declension="First Declension"
        word="Gate (feminine)"
        answer="porta portae portae portam porta"
      />
    </div>
  );
};

export default Learn;
