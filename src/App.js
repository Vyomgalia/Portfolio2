import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Project from "./Components/Projects";
import Technologies from "./Components/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./Components/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`app ${theme === "dark" ? "bg-[#020b11]" : "bg-[#F1F6F9]"}`}
      >
        <div
          className={`app ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          <div
            className={`app ${
              theme === "dark" ? "border-[#80d0c7]" : "border-[#ff4b1f]"
            }`}
          >
            <Header />

            <Technologies />

            <Project />

            <Contact />
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
