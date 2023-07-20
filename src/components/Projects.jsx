import React, { useEffect, useState } from "react";
import { projects } from "../constants/data";
import { BsGithub } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

export default function Projects() {

  return (
    <div id="project" className=" lg:pr-28">
      <Fade triggerOnce={true} direction="up" delay={300} cascade damping={0.5}>
        <h3 className="px-5 lg:px-0 title my-2.5 pt-28 ">
          Projects
        </h3>
        <p className=" p-5 lg:px-0">
          Here are some of my team projects and personal projects. If you want to see more examples of my work than the ones showcased in this site, please {" "}
          <Link
              to="contact"
              className="cursor-pointer font-bold transition-all text-[#6ACFC7] duration-100"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              contact me
            </Link>.
        </p>
      </Fade>
      <div className="px-5 lg:px-0 flex gap-5 lg:flex-row lg:gap-0  flex-wrap justify-between transition-all duration-700">
        {projects?.map((i) => {
          return (
              <div className="group project lg:mb-5 lg:mx-5 transition-all duration-500 h-fit overflow-hidden rounded relative">
                <Fade triggerOnce={true} direction="up" delay={300} cascade damping={0.5}>
                  <img className="" src={i.image} alt="" />
                </Fade>
                <div className="w-full flex flex-col justify-between text-center group-hover:opacity-100 opacity-0 h-full absolute left-0 top-0 bg-[#00000048] text-white transition duration-500">
                  <div className=" group-hover:translate-y-7 duration-500 transition-all -translate-y-2">
                    <h1 className="bg-[#6ACFC7] w-fit mx-auto text-white py-2 px-4 text-sm font-semibold rounded">
                      {i.title}
                    </h1>
                    {/* <p>{i.tech}</p> */}
                  </div>
                  <div className=" flex items-center gap-5 justify-center group-hover:-translate-y-7 duration-500 transition-all translate-y-2">
                    <a href={i.github}>
                      <BsGithub className="bg-[#6ACFC7] p-1 w-8 h-8 rounded-full" />
                    </a>
                    <a href={i.demo}>
                      <HiLink className="bg-[#6ACFC7] p-1 w-8 h-8 rounded-full" />
                    </a>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}
