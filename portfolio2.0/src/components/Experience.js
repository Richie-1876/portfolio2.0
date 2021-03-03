import React from "react";

const Experience = () => {
  const experience = String.raw`
    =====================================================================
     _____                                __                             
    |   __|                              |__|                            
    |  |__  __  __  _____   _____  ______ __  _____  __  __  ____  _____ 
    |   __| \ \/ / |   _ \ |  0  ||   __/|  ||  0  ||  \|  |/  _ \|  0  |
    |  |     \  /  |  | \ ||   _/ |  |   |  ||   _/ |      || | \/|   _/ 
    |  |__   /  \  |  |_/ ||  |__ |  |   |  ||  |__ |  |\  || |_/\|  |__ 
    |_____| /_/\_\ |   __/  \___/ |__|   |__| \___/ |__||__|\____/ \___/ 
                   |  |                                                  
                   |__|                                                  
     =====================================================================
    `;
  return (
    <section id="experience">
      <div className="section-header">
        <pre>{experience}</pre>
      </div>
      <p>
        I completed the Software Engineering Immersive course through General
        Assembly. This course was intense and covered a vast array of
        technologies, tools and languages used today in both front-end and
        back-end development. Through this course, I also gained experience with
        Git, working on group projects and managing my time while working
        remotely. On top of my time with GA, I have used other resources to
        learn new skills including SoloLearn, CS50 and codeWars. There is so
        much out there to learn and explore and I'm excited to keep driving my
        development forward.
      </p>
    </section>
  );
};

export default Experience;
