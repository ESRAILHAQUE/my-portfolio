import { useState } from "react";
import "../Skills/Skills.css";
import img1 from "../../assets/images/Project/parcel.png";
import img2 from "../../assets/images/Project/reataurant.png";
import img3 from "../../assets/images/Project/tech.png";

function Projects() {
  const [selectedSection, setSelectedSection] = useState("All");

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="px-4 md:px-20 lg:px-28 mt-10 max-w-[1440px] mx-auto">
      <div className="mb-4">
        <button
          className={`btn skills-btn mr-4 text-primary-color border border-primary-color ${
            selectedSection === "All" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("All")}
        >
          <span>All</span>
        </button>
        <button
          className={`btn skills-btn mr-4 text-primary-color border border-primary-color ${
            selectedSection === "Dynamic" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Dynamic")}
        >
          <span>Dynamic</span>
        </button>
        <button
          className={`btn skills-btn text-primary-color border border-primary-color ${
            selectedSection === "Static" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Static")}
        >
          <span>Static</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {(selectedSection === "All" || selectedSection === "Dynamic") && (
          <>
            <div className="shadow rounded-md overflow-hidden">
              <img
                src={img1}
                alt="Project"
                className="hover:scale-105 transform transition-transform duration-500 mx-auto w-full max-w-full"
              />
              <div className="bg-primary-color bg-opacity-20 px-4 py-6">
                <h1 className="text-xl font-extrabold">
                  Parcel Management System
                </h1>
                <p>
                  On this website, user can book a parcel in a website. There
                  are three roles in this website. Admin can manage all users
                  and Delivery man and Delivery Man can Deliver the Product.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <p className="font-bold text-xl my-2">Technology:</p>
                  <p>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      HTML5
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      CSS
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      Tailwind
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      Js
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      React
                    </span>
                  </p>
                </div>
                <div className="space-x-7 mt-6">
                  <a
                    href="https://parcel-944a6.web.app"
                    className="btn skills-btn text-primary-color border border-primary-color active"
                  >
                    <span>Live</span>
                  </a>
                  <a
                    href="https://github.com/ESRAILHAQUE/Parcel-ManageMent-Client?tab=readme-ov-file"
                    className="btn skills-btn text-primary-color border border-primary-color"
                  >
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow rounded-md overflow-hidden">
              <img
                src={img2}
                alt="Project"
                className="hover:scale-105 transform transition-transform duration-500 mx-auto w-full max-w-full"
              />
              <div className="bg-primary-color bg-opacity-20 px-4 py-6">
                <h1 className="text-xl font-extrabold">
                  Restaurant Management System
                </h1>
                <p>
                  On this website, user can book a parcel in a website. There
                  are three roles in this website. Admin can manage all users
                  and Delivery man and Delivery Man can Deliver the Product.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <p className="font-bold text-xl my-2">Technology:</p>
                  <p>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      HTML5
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      CSS
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      Tailwind
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      Js
                    </span>
                    <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                      React
                    </span>
                  </p>
                </div>
                <div className="space-x-7 mt-6">
                  <a
                    href="https://sensory-fution.web.app"
                    className="btn skills-btn text-primary-color border border-primary-color active"
                  >
                    <span>Live</span>
                  </a>
                  <a
                    href="https://github.com/ESRAILHAQUE/Food-Mahal-Client?tab=readme-ov-file"
                    className="btn skills-btn text-primary-color border border-primary-color"
                  >
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        {(selectedSection === "All" || selectedSection === "Static") && (
          <div className="shadow rounded-md overflow-hidden">
            <img
              src={img3}
              alt="Project"
              className="hover:scale-105 transform transition-transform duration-500 mx-auto w-full max-w-full"
            />
            <div className="bg-primary-color bg-opacity-20 px-4 py-6">
              <h1 className="text-xl font-extrabold">
                Course Management System
              </h1>
              <p>
                On this website, user can book a parcel in a website. There are
                three roles in this website. Admin can manage all users and
                Delivery man and Delivery Man can Deliver the Product.
              </p>
              <div className="flex gap-3 flex-wrap">
                <p className="font-bold text-xl my-2">Technology:</p>
                <p>
                  <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                    HTML5
                  </span>
                  <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                    CSS
                  </span>
                  <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                    Tailwind
                  </span>
                  <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                    Js
                  </span>
                  <span className="bg-white text-black px-2 py-1 rounded mr-1 cursor-pointer">
                    React
                  </span>
                </p>
              </div>
              <div className="space-x-7 mt-6">
                <a
                  href="https://tech-edu-hub.netlify.app"
                  className="btn skills-btn text-primary-color border border-primary-color active"
                >
                  <span>Live</span>
                </a>
                <a
                  href="https://github.com/ESRAILHAQUE/tech-hub"
                  className="btn skills-btn text-primary-color border border-primary-color"
                >
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
