import React from "react";
import "../App.css";
import Css from "./Img/Css.png";
import HTML5 from "./Img/HTML5.png";
import nextjs from "./Img/nextjs.png";
import tailwind from "./Img/tailwind-css-2.png";
import JS from "./Img/JS Logo.png";
import React1 from "./Img/React1.png";

function Technologies() {
  return (
    <div
      className="Aboutus xl:max-w-[95rem] mx-auto"
      id="hash-link-technologies"
    >
      <div className="lg:pt-28 pt-20 md:pt-20 flex justify-center mb-8 lg:mb-8">
        <div className="card">
          <h2 className=" text-base font-semibold hover:text-[#ff4b1f] ">
            TECHNOLOGIES
          </h2>
        </div>
      </div>

      <div className="lg:flex pl-10 md:pl-20 lg:px-7 lg:justify-around grid grid-cols-3 md:gap-36 lg:gap-24 xl:gap-36 gap-8 p-5 lg:p-0 mt-10">
        <img src={HTML5} alt="" className="w-18 h-12" />
        <img src={Css} alt="" className="w-18 h-12" />
        <img src={tailwind} alt="" className="w-[75px] h-10" />
        <img src={JS} alt="" className="w-18 h-14" />
        <img src={React1} alt="React" className="w-18 h-12" />
        <img
          src={nextjs}
          alt=""
          className="w-[50px] h-12 bg-white rounded-md"
        />
      </div>
    </div>
  );
}

export default Technologies;
