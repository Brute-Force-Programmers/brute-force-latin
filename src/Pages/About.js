import React from "react";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <h1>Welcome to Brute Force Latin</h1>
      <p>
        For learners of latin that are looking for the most efficient way to
        learn latin, look no further than the{" "}
        <a href="http://www.wcdrutgers.net/Latin.htm">Dowling Method </a> TLDR:
        Most latin learners of today think that the only way to read latin is by
        translating as you go versus a student of a modern language can learn to
        read in much the same capacity as their native tongue.
         Essentially it
        boils down to memorizing all of the grammar tables in the back of{" "}
        <em>Wheelock's latin</em>.
      </p>

    </div>
  );
};

export default About;
