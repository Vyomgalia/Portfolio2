import React from "react";
import Movies from "./Img/Movies.png";
import Tesla1 from "./Img/Tesla1.png";
import Kabab from "./Img/Kabab restro1.png";
import Hackthon from "./Img/Hackthon.png";
import "../App.css";
import Metabnbb from "./Img/Metabnbb 1.png";
import Repute from "./Img/Repute.png";
import mobile1 from "./Img/mobile1.png";
import mobile2 from "./Img/mobile2.png";
import { TiAttachmentOutline } from "react-icons/ti";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import HashLink from 'react-router-hash-link'

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const style = { color: "white", width: "40px", height: "30px" };

  return (
    <section>
      <div className=" Projects max-w-[95rem] mx-auto">
        <div
          className="flex flex-col items-center pt-24 gap-14 lg:mb-5  mb-8"
          id="hash-link-projects"
        >
          <div className="card">
            <p className="text-white z-20 lg:mb-0 uppercase font-medium hover:text-[#ff4b1f]">
              Projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-16 p-10 grid-cols-1 space-y-14 -mt-12 lg:space-y-0 md:ml-12 md:mr-12 lg:m-0">
            <div>
              <div className=" projects">
                <a
                  href="https://ellorn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={mobile2}
                    alt=""
                    className="md:w-full lg:w-[700px] rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-white text-xl">An E-commerce App</h1>
                <a
                  href="https://ellorn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                This is an E-commerce App that enables you to add Clothes and
                Accessories for both male and female you want to cart and make
                an order and you can also remove any items added to cart too{" "}
                <br />
                <span className="text-[#0093e9] mt-[6px]">
                  React - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div className=" projects">
                <a
                  href="https://food-app-ivory-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={mobile1}
                    alt=""
                    className="md:w-full lg:w-[700px] rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-white text-xl">A food Order App</h1>
                <a
                  href="https://food-app-ivory-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                This is a Food Order App that enables you to add whatever food
                you want to cart and make an order and you can also remove foods
                added to cart too <br />
                <span className="text-[#0093e9] mt-[6px]">
                  React - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div className=" projects">
                <a
                  href="https://medical-system.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Hackthon}
                    alt=""
                    className="md:w-full lg:w-[700px] rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-white text-xl">Cornea Clinic</h1>
                <a
                  href="https://medical-system.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                This is a Medical Clinic that contains all types of doctors and
                hospitals and easily detect nearest Clinics around you, where
                you can book various appointments with differents doctors <br />
                <span className="text-[#0093e9] mt-[6px]">
                  Nextjs - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div className="projects ">
                <a
                  href="https://www.repute.legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Repute}
                    alt=""
                    className="md:w-full lg:w-[700px] rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-white text-xl">Repute</h1>
                <a
                  href="https://www.repute.legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                Repute is a reputation management company. Founded by Mark
                Essien, CEO Hotels.ng. This is a project i worked during my
                Intership in Hngi9 <br />
                <span className="text-[#0093e9] mt-[6px]">
                  React - Styled Component - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div className="projects">
                <a
                  href="https://metabnb1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Metabnbb}
                    alt=""
                    className="md:w-full lg:w-[700px] rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-white text-xl">Metabnb</h1>
                <a
                  href="metabnb.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                I built a Luxury and accessible houses in the metaverse, you can
                get a chance to turn your fantasy into illusion. <br />
                <span className="text-[#0093e9] mt-[6px]">
                  React - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div className=" projects">
                <a
                  href="http://kababrestro.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Kabab}
                    alt=""
                    className="md:w-full lg:w-[700px] rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-white text-xl">Kabab Restro</h1>
                <a
                  href="http://kababrestro.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>

              <p className="text-white mt-[10px]">
                A Restaurant Website that contains all kinds of Cuisines, both
                Italian Cuisine, Chinese Cuisine and American Cuisine. <br />
                <span className="text-[#0093e9] mt-[6px]">
                  HTML & CSS - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div className="projects">
                <a
                  href="https://themovieshome.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Movies}
                    alt=""
                    className="md:w-full lg:w-[700px]  rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3 mt-[5px]">
                <h1 className="text-white text-xl">Movies Home</h1>
                <a
                  href="https://themovieshome.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                A platform that contains collections of movies, you can get any
                movies of your choice. <br />
                <span className="text-[#0093e9] mt-[6px]">HTML & CSS</span>
              </p>
            </div>

            <div>
              <div className="projects">
                <a
                  href="https://teslalandingpage.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Tesla1}
                    alt=""
                    className="md:w-full lg:w-[700px] rounded-lg"
                  />
                </a>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-white text-xl">Tesla</h1>
                <a
                  href="https://teslalandingpage.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>

              <p className="text-white mt-[10px]">
                A Tesla landing page, containing all peeks of cars produced by
                Tesla. <br />
                <span className="text-[#0093e9] mt-[6px]">
                  HTML & CSS - TailwindCSS
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="pb-10 flex justify-center">
          <hr style={{ width: "90%", color: "white", height: "8px" }} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
