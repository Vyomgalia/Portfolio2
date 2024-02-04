import React, { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Modal from "./Modal";
// import HashLink from 'react-router-hash-link'

function Contact() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="max-w-[95rem] mx-auto">
      <div className="flex justify-center pt-5 pb-10">
        <div className="card">
          <h2 className="hover:text-[#ff4b1f] uppercase font-semibold Contact">
            Contact
          </h2>
        </div>
      </div>
      <div
        className="lg:flex space-x-0 space-y-5 lg:space-y-0 lg:pl-12 lg:justify-around pt-5 pb-20 text-center  items-center"
        id="hash-link-calls"
      >
        <button
          onClick={() => setOpenModal(true)}
          className="py-[7px] px-7 lg:px-[30.5px] border-2 border-gradient z-10"
        >
          <span className="flex mt-1 gap-3">
            <AiOutlineMail className=" " size={30} />
            <p className="  text-lg">Collaborate</p>
          </span>
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <br />

        <button className="py-[7px] px-[34px] lg:px-[50px]  border-2 border-gradient z-10">
          <a
            href="https://github.com/Vyomgalia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex mt-1 gap-3 mr-7 lg:mr-0"
          >
            <AiOutlineGithub className=" " size={30} />
            <p className="  text-lg">Github</p>
          </a>
        </button>
        <br />

        <button className="py-[7px] px-[37px] lg:px-11  border-2 border-gradient z-10">
          <a
            href="https://www.linkedin.com/in/vyom-galia-004491265/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex mt-1 gap-3  mr-2 lg:mr-0"
          >
            <AiOutlineLinkedin className=" " size={30} />
            <p className="  text-lg">LinkedIn</p>
          </a>
        </button>
        <br />

        <button className="py-[7px] text-center px-[39px] lg:px-[51.5px] border-2 border-gradient z-10">
          <a href="9920784541" className="flex mt-1 gap-3 mr-5 lg:mr-0">
            <AiOutlinePhone className=" " size={30} />
            <p className="  text-lg">Phone</p>
          </a>
        </button>
        <br />
      </div>
    </div>
  );
}
export default Contact;
