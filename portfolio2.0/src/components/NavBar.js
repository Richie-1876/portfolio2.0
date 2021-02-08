import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <ul className="nav nav-pills sticky-top">
      <li className="nav-item nav-link">
        <Link
          className=""
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={-40}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="skills" spy={true} smooth={true} offset={-40}>
          <a className="nav-link" href="#skills">
            Skills
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="experience" spy={true} smooth={true} offset={-40}>
          <a className="nav-link" href="#experience">
            Experience
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="projects" spy={true} smooth={true} offset={-40}>
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
