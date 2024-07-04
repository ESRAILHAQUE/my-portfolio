import img1 from '../../assets/images/me-pic/img1.png'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import '../Skills/Skills.css'
function Home() {
  const [text] = useTypewriter({
    words: ["React Developer", "Fornt-End Web Developer", "Expert Responsive Designer"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="px-4 md:px-20 lg:px-28 mt-5 ">
      <div className="flex justify-between flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1>Hey there,My name is</h1>
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Esrail Haque
          </p>
          <div className="text-2xl my-3">
            <span className="text-primary-color font-medium my-3">
              {"<" + text + " />"}
            </span>
          </div>
          <p className="text-justify">
            I am Esrail Haque, a dedicated React Developer and Front-End Web
            Developer with over 2 years of experience. As an expert in
            responsive design, I am passionate about creating visually appealing
            and user-friendly web applications. I thrive on solving complex
            problems through innovative coding solutions.
          </p>

          <div className="mt-6">
            <a href="mailto:esrailbblhs@gmail.com">
              <button
                className={`btn skills-btn text-primary-color border border-primary-color `}
             
              >
                <span>Hire Me</span>
              </button>
            </a>
          </div>
        </div>
        <div>
          {" "}
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Home;
