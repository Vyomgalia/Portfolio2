import React, { useRef, useEffect } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

function Modal({ open, onClose }) {
  // toast.configure();
  //  const notify = () => toast.success("Message sent", {
  //    position: "top-center",
  //    theme: "dark",
  // });

  // const initialValues = { full_name: "", email: "", phonenumber: "", message: "" };

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [valid, setValid] = useState(null);
  const [sent, setSent] = useState(false);
  // const [sentError, setSentError] = useState(false);

  useEffect(() => {
    // const body = document.querySelector("body");
    // body.style.overflow = open ? "hidden" : "auto";

    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [open, email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTriedToSubmit(true);
    if (name && email && phonenumber && message !== "") {
      if (valid === true) {
        setLoading(true);

        //emailJs
        try {
          emailjs
            .sendForm(
              "service_kcw22wo",
              "template_ww7zj4l",
              form.current,
              "D-SdUadWgzWxPHvhd"
            )
            .then(
              (result) => {
                // setTriedToSubmit(false);
                setLoading(false);
                setSent(true);
                setEmail("");
                setName("");
                setPhonenumber("");
                setMessage("");
                e.target.reset();
                setTriedToSubmit(false);
                onClose();
                toast.success("Message sent sucessfully!", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                  theme: "dark",
                });

                console.log(result.text);
                // resetForm();
              },
              (error) => {
                toast.error(
                  "There is an error sending your message. Please try again!",
                  {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    theme: "dark",
                  }
                );
                setLoading(false);
                console.log(error.text);
              }
            );
        } catch (error) {
          toast.error(
            "There is an error sending your message. Please try again!",
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              theme: "dark",
            }
          );
          setLoading(false);
        }
        // End emailJs
      } else {
        setLoading(false);
      }
    }
  };

  if (!open) return null;
  return (
    <>
      <form noValidate ref={form} onSubmit={handleSubmit}>
        <div
          class="modal"
          className="flex flex-col mt-0 justify-center z-50 items-center ml-0 fixed bg-[#2e2b2b] bg-opacity-60 inset-0 w-full h-screen"
        >
          <div className="bg-black lg:w-[70%] md:w-[80%] w-full h-screen  rounded-md z-20">
            <div className="flex justify-end lg:mt-2 mt-1 pr-5 text-3xl z-10 mb-2">
              <button className="text-white" onClick={onClose}>
                X
              </button>
            </div>
            <div className="flex justify-center Form -mt-3 lg:-mt-0 md:-mt-0">
              <div className="bg-black rounded-md w-[70%] flex flex-col justify-center items-center">
                <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    checked
                    // required
                    placeholder="Enter Your Name*"
                    className=" border-[#80d0c7] text-white pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                  />
                  {!name && triedToSubmit ? (
                    <ErrorMessage error="Name field required" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    // required
                    placeholder="Enter Your Email*"
                    className=" border-[#80d0c7] text-white pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                  />
                  {!email && triedToSubmit ? (
                    <ErrorMessage error="email field required" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                  <input
                    type="text"
                    id="phonenumber"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    // required
                    placeholder="Phone Number*"
                    className=" border-[#80d0c7] text-white pl-3 focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
                  />{" "}
                  {!phonenumber && triedToSubmit ? (
                    <ErrorMessage error="PhoneNumber field required" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="lg:w-[70%] w-[100%] mt-5 mb-2">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    // required
                    placeholder="Your Message*"
                    className=" border-[#80d0c7] pl-3 text-white focus:outline-[#80d0c7] border-2 w-full h-36 rounded-md  bg-black"
                  ></textarea>
                  {!message && triedToSubmit ? (
                    <ErrorMessage error="Message field required" />
                  ) : (
                    ""
                  )}
                </div>

                <div className="lg:mt-10 mt-5 w-[100%] text-center">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="text-xl bg-[#ff4b1f] h-16 lg:h-20 rounded-tr-md text-white w-[69%] lg:py-4 hover:bg-[#80d0c7] py-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Modal;
