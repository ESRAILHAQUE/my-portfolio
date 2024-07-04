import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
          },
          {
            path: '/skills',
            element:<Skills></Skills>
          },
          {
            path: '/aboutMe',
            element:<AboutMe></AboutMe>
          },
          {
            path: '/projects',
            element:<Projects></Projects>
          }
           
    ],
  },
]);
