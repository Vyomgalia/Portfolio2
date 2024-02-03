import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import Nav from "./Nav";
// import Bg from './Img/Bg.png'
import Woman from "./Img/Woman.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import Resume from "./Img/Resume.pdf";
import Modal from "./Modal";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" Header ">
      <Nav />
      <div className="flex justify-between max-w-[95rem] mx-auto">
        <div className=" lg:pt-36 pt-32 pl-5 lg:pl-12 space-y-10">
          <div>
            <h3 className="font-bold text-lg leading-8 font-serif pl-4 md:pl-16 lg:pl-0">
              Hey, I'm
            </h3>

            <h1 className="slide-in-left text1 lg:text-5xl pl-4 text-4xl font-bold leading-8 font-serif mt-10 pb-8 z-10 md:pl-16 lg:pl-0">
              Princess Ayomide Ogunnaike
            </h1>
          </div>
          <Typed
            strings={["Software Engineer | Front-end Developer"]}
            className="text-gray-300 pl-4 lg:pl-0 lg:text-lg text-sm leading-7 lg:pt-10 pt-5 font-semibold md:pl-16 "
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          <div
            className="text-justify hidden sm:hidden lg:block md:hidden"
            id="hash-link-about"
          >
            <p className="text-justify  lg:text-base text-sm md:text-base lg:mt-2 mt-1 lg:leading-8 leading-7 flex-wrap space-y-5 pr-5">
              I'm Princess, a Frontend Developer based in Lagos, Nigeria. I have
              substantial <br />
              knowledge of HTML, CSS, JavaScript React and Next. I am highly
              motivated to expand
              <br /> my skills and i'm available to create solutions and one of
              a kind platforms for clients.
              {/* <br /> new technologies, opportunies and interesting projects. I
            love to be challenged */}
            </p>
          </div>

          <div
            className="lg:hidden md:block block md:pl-16 md:pr-20 pl-5 pr-5"
            id="hash-link-about"
          >
            <p className="text-justify lg:text-base text-sm md:text-base lg:mt-2 mt-1 leading-7  md:leading-9 flex-wrap md:space-y-14 pr-5">
              A Frontend Developer based in Lagos, Nigeria. I have substantial
              knowledge of HTML, CSS, JavaScript, React and Next. I am highly
              motivated to expand my skills and i'm available to create
              solutions and one of a kind platforms for clients
            </p>
          </div>

          <div
            className="lg:flex space-y-5 lg:space-y-0 lg:space-x-20 md:pl-16 pl-5 lg:pl-0  "
            id="hash-link-template"
          >
            <button
              className="px-10 text-base flex gap-3 py-3 border-2 z-20 border-gradient "
              // id="hash-link-contactme"
              onClick={() => setOpenModal(true)}
            >
              Say Hi <AiOutlineArrowRight className="pt-[5px] w-5 h-5" />
            </button>

            <button className="px-10 text-base flex gap-3 lg:py-2 py-3 border-2 border-gradient z-20 hover:bg-[button]">
              <a href={Resume} download="Resume" className="flex gap-3">
                Download Resume{" "}
                <AiOutlineDownload className="pt-[5px] w-5 h-5" />
              </a>
            </button>
          </div>

          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
        <div className="md:hidden hidden lg:block">
          <img src={Woman} alt="" className="pt-40 w-[90%]" />
        </div>
      </div>
    </div>
  );
}

export default Header;
