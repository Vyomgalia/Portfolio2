import React, { useState, useContext } from "react";
import "../App.css";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import { Squash as Hamburger } from "hamburger-react";

function Nav() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  const animateFrom = { opacity: 0, x: -40 };
  const animateTo = { opacity: 1, x: 0 };
  return (
    <div>
      <div className="relative Nav">
        <div className="bg-[#020b11] lg:flex justify-between hidden lg:fixed w-full z-10">
          <div className="flex justify-between p-3  pl-5">
            <h2 className="text1 text-4xl font-bold ml-6">VG.</h2>
          </div>

          <div className=" text-white text-base z-10 lg:block hidden pt-5">
            <ul className="flex space-x-16 lg:pr-10 font-bold">
              {/* <div className="-m-1">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider" onClick={toggleTheme}></span>
                </label>
              </div> */}
              <li className="hover:text-base hover:text-[#ff4b1f]">
                <a smooth="true" href="#hash-link-about">
                  About me
                </a>
              </li>
              <li className="hover:text-base hover:text-[#ff4b1f]">
                <a smooth="true" href="#hash-link-technologies">
                  Technologies
                </a>
              </li>

              <li className="hover:text-base hover:text-[#ff4b1f]">
                <a smooth="true" href="#hash-link-projects">
                  Projects
                </a>
              </li>

              <li className="hover:text-base hover:text-[#ff4b1f]">
                <a smooth="true" href="#hash-link-calls">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:hidden block fixed z-50">
        <div className="flex justify-between bg-[#020b11] pt-2 pb-2 fixed w-full z-10 rounded-full border-2 border-slate-600 mt-2">
          <div className=" pl-7 pt-2">
            <h2 className="text1 text-4xl font-bold ">VG.</h2>
          </div>
          {/* <div className="mt-[7px]">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div> */}
          <div className="mr-7">
            <Hamburger
              direction="squash"
              size={30}
              color="white"
              className="burger-menu"
              toggled={open}
              toggle={() => setOpen(!open)}
            />
          </div>
        </div>
        {open && (
          <div>
            <div className="text-white bg-black w-full h-screen fixed slide-in-left">
              <ul className="space-y-8 md:space-y-14 p-5 -mt-28 absolute top-72 left-16 md:left-64 z-10">
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.2 }}
                  className="border-b-2 pb-1 md:pb-2 border-gray-500 w-56 hover:text-[#ff4b1f]"
                  onClick={handleClick}
                >
                  <a smooth="true" href="#hash-link-template">
                    Resumes
                  </a>
                </motion.li>
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.3 }}
                  className="border-b-2 pb-1 md:pb-2 border-gray-500 w-56 hover:text-[#ff4b1f]"
                  onClick={handleClick}
                >
                  <a smooth href="#hash-link-technologies">
                    Technologies
                  </a>
                </motion.li>
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.4 }}
                  className="border-b-2 pb-1 md:pb-2 border-gray-500 w-56 hover:text-[#ff4b1f]"
                  onClick={handleClick}
                >
                  <a smooth="true" h href="#hash-link-projects">
                    Projects
                  </a>
                </motion.li>

                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.45 }}
                  className="border-b-2 pb-1 border-gray-500 w-56 hover:text-[#ff4b1f]"
                  onClick={handleClick}
                >
                  <a smooth="true" href="#hash-link-calls">
                    Collaborate
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
