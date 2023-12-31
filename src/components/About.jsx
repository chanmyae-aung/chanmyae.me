import React from "react";
import { Fade } from "react-awesome-reveal";
import { AiOutlineDownload } from "react-icons/ai";
import portrait from "../assets/portrait.png";
export default function About() {
  const cv = document.querySelector(".cv");
  return (
    <div id="about" className="lg:pr-28">
      <Fade triggerOnce={true} direction="up" cascade damping={0.2}>
        <h3 className="title px-5 lg:block hidden lg:px-0 w-full h-fit pt-28 ">
          About
        </h3>
        <div className="px-5 mb-5 lg:hidden">
          <h1 className="heading pt-28">CHAN MYAE AUNG</h1>
          <h3 className="title">Frontend Developer</h3>
        </div>
        <div>
          <img
            className="w-[22rem] h-[23rem] pb-5 mx-auto"
            src={portrait}
            alt=""
          />
        </div>

        <div className="px-5 lg:px-0 flex flex-col gap-2">
          <p>
            <span className="text-3xl h">H</span>ello! I am Chan Myae Aung. I am
            a Frontend Web Developer, I have a solid understanding of HTML , CSS
            and JavaScript. I am experienced in using frontend frameworks and libraries such
            as React, Typescript, NextJs, Bootstrap and Tailwind. Also I have a great knowledge and
            experience in api fetching and state management libraries such as React Query, Zustand, Redux and Redux
            Toolkit Query.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <button
          onClick={() => cv.click()}
          className="bg-transparent mx-5 lg:mx-0 lg:mb-0 border border-[#E50914] font-semibold text-[#E50914] hover:text-white hover:bg-[#E50914] transition-all duration-400 ease-linear flex items-center gap-3 my-5 py-3 px-5 text-sm rounded"
        >
          {" "}
          <AiOutlineDownload className="text-lg" /> 
          <a
            className=" cv"
            href="../../public/chanmyaeaung_frontend_dev.pdf"
            download={true}
            target="_blank"
          >Resume</a>
        </button>
      </Fade>
    </div>
  );
}
