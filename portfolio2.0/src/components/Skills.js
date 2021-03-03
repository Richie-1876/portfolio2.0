import React from "react";

import nodeLogo from "../imgs/nodejs-seeklogo.com.svg";
import pythonLogo from "../imgs/python-seeklogo.com.svg";
import reactLogo from "../imgs/react-seeklogo.com.svg";

const Skills = () => {
  const skills = String.raw`
  ============================================
     _____  __       __  __      __           
    /  ___\|  | __  |__||  |    |  |          
    \  \   |  |/  /  __ |  |    |  |     ____ 
      \  \ |     /  |  ||  |    |  |    /  __|
       |  ||     \  |  ||  |    |  |    \__ \ 
  ____/  / |  |\  \ |  ||  |___ |  |___  __| |
  \_____/  |__| \__\|__||______||______||____/
  
  =============================================
    `;
  return (
    <section id="skills">
      <div className="section-header">
        <pre>{skills}</pre>
      </div>
      <div className="skills-container">
        <img className="skill" src={reactLogo} alt="logo"></img>
        <img className="skill" src={nodeLogo} alt="logo"></img>
        <img className="skill" src={pythonLogo} alt="logo"></img>
      </div>
      <p>
        HTML | CSS | Command Line | Javascript | jQuery | Express.js | SQL |
        MongoDB | Ruby on Rails | NodeJS | React | Git | Github | AJAX | Python
        | Django
      </p>
    </section>
  );
};

export default Skills;
