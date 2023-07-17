import React from "react";
import { BiLogoTelegram, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook, BsGithub } from "react-icons/bs";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Hero() {
  return (
    <div className="lg:p-28 py-20">
      <div>
        <h1 className="heading">CHAN MYAE AUNG</h1>
        <h3 className="title">Frontend Developer</h3>
        <p className="my-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo cumque
          quas eligendi incidunt, labore quod deserunt ab nemo saepe. Ad,
          suscipit repudiandae? Natus, numquam repellendus iste suscipit in
          pariatur ab.
        </p>
      </div>
      <div>
        <ul className="w-fit hidden lg:flex mb-10 flex-col gap-3">
          <li>
            <Link
              to="about"
              className="cursor-pointer "
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              className="cursor-pointer "
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              SKILL
            </Link>
          </li>
          <li>
            <Link
              to="project"
              className="cursor-pointer "
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="cursor-pointer "
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-5 text-2xl items-center">
          <li>
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoGmail />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoTelegram />
            </a>
          </li>

          <li>
            <a href="#">
              <BiLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
