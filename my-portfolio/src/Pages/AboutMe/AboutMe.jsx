import { useState } from 'react';
import img1 from '../../assets/images/me-pic/img1.png';
import  '../Skills/Skills.css';
function AboutMe() {
     const [selectedSection, setSelectedSection] = useState("Personal");

     const handleButtonClick = (section) => {
       setSelectedSection(section);
     };
  return (
    <div className="px-4 md:px-20 lg:px-28 max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 justify-around items-center">
      <div className="w-full">
        <img src={img1} alt="" />
      </div>
      <div className="w-full">
        <div className="mb-4 w-full">
          <button
            className={`btn skills-btn mr-4 text-primary-color border border-primary-color ${
              selectedSection === "Personal" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Personal")}
          >
            <span>Personal</span>
          </button>
          <button
            className={`btn skills-btn mr-4 text-primary-color border border-primary-color ${
              selectedSection === "Educational" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Educational")}
          >
            <span>Educational</span>
          </button>
        </div>
        <div className="w-full h-full transition-all 3s ease-in-out">
          {selectedSection === "Personal" && (
            <div>
              <p className="text-justify">
                I am Esrail Haque, a dedicated React Developer and Front-End Web
                Developer with over 2 years of experience. As an expert in
                responsive design, I am passionate about creating visually
                appealing and user-friendly web applications. I thrive on
                solving complex problems through innovative coding solutions.
              </p>
            </div>
          )}
          {selectedSection === "Educational" && (
            <div className="text-justify">
              <p>
                <span className="font-bold">SSC:</span> I completed my Secondary
                School Certificate in November 2018 with a GPA of 5.00 out of
                5.00.
              </p>
              <p>
                <span className="font-bold">HSC:</span> I completed my Higher
                School Certificate in November 2020 with a GPA of 5.00 out of
                5.00.
              </p>
              <p>
                <span className="font-bold">BSc in Engineering:</span> I am
                currently pursuing a Bachelor's degree in Electrical and
                Electronics Engineering.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AboutMe