import React from "react";
import "./About.css";
import { HomeImg } from "../Asset/Images";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="AboutCon">
      <div className="Aboutoverlay">
        <div className="AboutWrapper">
          <div className="TetCon">
            <h3>About Us</h3>
            <p>
              GreenPad Concepts project started by providing free sanitary pads
              for school girls after the funder observed the pattern of school
              absenteeism among Nigeria rural girls. He later had the
              opportunity to interview a community teacher on why girls are most
              time out of school; the teacher narrowed it down to lack of access
              to feminine hygiene product and its ripple effects on girl’s
              health and education. The founder started by raising funds from
              personal savings, family and friends to provide free sanitary
              pads; but it wasn’t sustainable. That is how the idea of producing
              local sanitary pads set-in.
            </p>

            <Link to="/about/more">
              <button className="homeButton bbtn">Read More 
              <i className="bi bi-chevron-double-right"></i>
              </button>
            </Link>
          </div>
          <div className="imgCon">
            <img src={HomeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
