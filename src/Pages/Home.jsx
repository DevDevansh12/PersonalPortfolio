import React from "react";
import "./../Css/Home.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Button from "../Components/Button";
const Home = () => {
  return (
    <>
      <div className="Home_container">
        <div className="container">
          <div className="content_box">
            <div className="content_main">
              <p>HELLO, MY NAME IS</p>
              <h1>DEVANSH VARIYA</h1>
              <p>WEB DEVELOPER</p>
            </div>
            <div className="icons">
              <div className="first">
                <span>
                  <a href="https://www.linkedin.com/in/devansh-variya/">
                    <IoLogoLinkedin size={34} color="#0077b5" />
                  </a>
                </span>
              </div>
              <div className="first">
                <span>
                  <a href="https://www.linkedin.com/in/devansh-variya/">
                    <FaGithub size={34} color="#24292e" />
                  </a>
                </span>
              </div>
              <div className="first">
                <span>
                  <a href="https://www.linkedin.com/in/devansh-variya/">
                    <FaSquareXTwitter size={34} color="#000000" />
                  </a>
                </span>
              </div>
            </div>
            <div className="download_button">
              <Button value="Download CV" />
            </div>
          </div>
          <div className="img">
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="400"
                cy="400"
                fill="#29a587"
                r="300"
                stroke-width="200"
                stroke="#29a587"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
