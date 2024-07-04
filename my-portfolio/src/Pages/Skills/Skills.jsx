import React, { useState } from "react";
import "./Skills.css"; // Import your CSS file
import html from "../../assets/images/skills/html.png";
import js from "../../assets/images/skills/js.png";
import css from "../../assets/images/skills/css.png";
import firebase from "../../assets/images/skills/firebase.png";
import node from "../../assets/images/skills/node.png";
import mongodb from "../../assets/images/skills/mongodb.png";
import react from "../../assets/images/skills/react.png";
import tailwind from "../../assets/images/skills/tailwind.png";
import npm from "../../assets/images/skills/npm.png";
import git from "../../assets/images/skills/git.png";
import vscode from "../../assets/images/skills/vscode.png";

const Skills = () => {
  const [selectedSection, setSelectedSection] = useState("front-end");

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="px-4 md:px-20 lg:px-28">
      <div className="mb-4">
        <button
          className={`btn skills-btn mr-4 text-primary-color border border-primary-color ${
            selectedSection === "front-end" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("front-end")}
        >
          <span>Front-End</span>
        </button>
        <button
          className={`btn skills-btn mr-4 text-primary-color border border-primary-color ${
            selectedSection === "back-end" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("back-end")}
        >
          <span>Back-End</span>
        </button>
        <button
          className={`btn skills-btn text-primary-color border border-primary-color ${
            selectedSection === "tools" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("tools")}
        >
          <span>Tools</span>
        </button>
      </div>
      <div>
        {selectedSection === "front-end" && (
          <div className=" grid gap-5 grid-cols-1 lg:grid-cols-6 ">
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={html} alt="" srcset="" className="h-32 skill-image" />
              <h1 className="mt-2">HTML5</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={css} alt="" className="h-32 skill-image" />
              <h1 className="mt-2">CSS</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={js} alt="" className="h-32 skill-image" />
              <h1 className="mt-2">JavaScript</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={tailwind} alt="" className="h-32 skill-image" />
              <h1 className="mt-2">Tailwind</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={react} alt="" className="h-32 skill-image" />
              <h1 className="mt-2">Tailwind</h1>
            </div>
          </div>
        )}
        {selectedSection === "back-end" && (
          <div className=" grid gap-5 grid-cols-1 lg:grid-cols-6 ">
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={node} alt="" srcset="" className="h-32 skill-image" />
              <h1 className="mt-2">Node Js</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={firebase} alt="" className="h-32 skill-image" />
              <h1 className="mt-2">Firebase</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={mongodb} alt="" className="h-32 skill-image" />
              <h1 className="mt-2">MongoDB</h1>
            </div>
          </div>
        )}
        {selectedSection === "tools" && (
          <div className=" grid gap-5 grid-cols-1 lg:grid-cols-6 ">
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={vscode} alt="" srcset="" className="h-32 skill-image" />
              <h1 className="mt-2">Vs Code</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={git } alt="" className="h-32 skill-image" />
              <h1 className="mt-2">git</h1>
            </div>
            <div className="bg-primary-color bg-opacity-20 p-5 rounded-lg text-center font-extrabold">
              <img src={npm} alt="" className="h-32 skill-image" />
              <h1 className="mt-2">npm</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
