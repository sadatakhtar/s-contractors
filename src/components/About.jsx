import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/");
  };
  return (
    <>
      <h1>About Page</h1>
      <button onClick={handleAbout}>Home</button>
    </>
  );
};

export default About;
