import React from "react";
import "./Home.css";
import {
  vissionImg,
  MissionImg,
  WhatWedo,
  SDC1,
  SDC2,
  SDC3,
  SDC4,
  SDC5,
} from "../Asset/Images";
import { Link } from "react-router-dom";
function HomeSec() {
  return (
    <div className="HomeSecCon">
      <section className="HomeSecWrapper">
        <div className="vission">
          <div className="writeUp">
            <h3>Our Vission:</h3>
            <p>
              We envision an equal society where every female child and women
              from rural communities have access to basic amenities and live
              peacefully in an equitable society.
            </p>
            <p>
              A world where every women is empowered and able to form alliance
              of self-help groups to plan for change with action plans to
              implement financial independency.
            </p>
          </div>
          <div className="ImageCon">
            <img src={vissionImg} alt="vissionImg" />
          </div>
        </div>
        <div className="mission">
          <div className="ImageCon">
            <img src={MissionImg} alt="vissionImg" />
          </div>
          <div className="writeUp missionWrites">
            <h3>Our Mission:</h3>
            <p>
              To provide for the health, education, emotional wellbeing and
              hygiene of women and girls in low-income populations through the
              provision of biodegradable sanitary pad
            </p>
            <div className="ourmissionAll">
              <h2> We do this by:</h2>
              <ol>
                <li>
                  1 Providing affordable and accessible biodegradable sanitary
                  pads to women and girls from marginalized communities.
                  Spreading awareness
                </li>

                <li>
                  2 menstrual hygiene, reproductive health, and family
                  planning/child spacing through campaigns and speeches
                  delivered in schools, communities, neighbourhoods and
                  parishes. Proving free
                </li>

                <li>
                  3 sanitary pads to rural school girls and women from socio
                  economic disadvantage background to school girls in class
                  during their period to complete a quality education and reach
                  the peak of their career.
                </li>

                <p>
                  To help marginalized women achieve a new life for themselves
                  by providing them with the means to exploit their full
                  potential as entrepreneurs and access economic opportunities
                </p>
              </ol>
              <h2> We do this by:</h2>
              <ol>
                <li>
                  1 Delivering additional holistic training on entrepreneurship,
                  financial literacy; so women and girls reach their full
                  potential.
                </li>

                <li>
                  2 Partnering with rural women self help group to manage the
                  fibre extraction unit and generate revenue from waste.
                </li>

                <li>3 Engaging rural women and local sales agents</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="SDG">
          <h2>Sustainable Development Goals</h2>

          <div className="SDGWrapper">
            <p>
              At green pad concept we're commited to crate a positive impact on
              the enviroment and society . <br /> Our mission to provide Sustainable
              menstral solution aligns with the United Nations' <br /> Sustainable
              Development Goals (SDGs){" "}
            </p>

            <div className="goalsImgCon">
              <img src={SDC1} alt="sdg1" />
              <img src={SDC2} alt="sdg2" />
              <img src={SDC3} alt="sdg3" />
              <img src={SDC4} alt="sdg4" />
              <img src={SDC5} alt="sdg5" />
            </div>
          </div>
        </div>

        <div className="Whatwedo">
          <h2>What we do</h2>
          <div className="whatwedoWrapper">
            <div className="TetCon">
              <p>
                In developing countries, most women and girls living in poverty
                cannot afford to buy female sanitary products. They are forced
                to resort to unhygienic alternatives such as rags, foams or
                dried leafs, resulting in various health risks. In Nigeria,
                particularly in rural and semi-urban areas, a lot of girls have
                to miss school for about 4 – 5 days during their period each
                month. As a result of so much absenteeism, they cannot complete
                their education. Most families living on less than a Dollar a
                day cannot afford to buy western sanitary pads of about $1.2 for
                their 2 – 4 girls as they are too expensive.
              </p>
              <Link to="/about">
                <button className="homeButton">Learn More</button>
              </Link>
            </div>
            <div className="imgCon">
              <img src={WhatWedo} alt="solutionImg" />
            </div>
          </div>
        </div>

        <div className="conceptEp">
          <h3>GreenPad Concepts Experience</h3>

          <p>
            GreenPad Concepts experience was launched in 2017. The model
            includes an age and gender-specific curriculum and complimentary
            family programming and advocacy component. It provides learning
            opportunities for out of school girls and young women. Awareness
            sessions coupled with fibre extraction network of women cooperatives
            and the direct engagement in distribution channel of finished
            product and a guaranteed market ready for 100% of the supplied
            product. We enroll young women in network of cooperatives and equip
            them with the knowledge, skills, and resources to begin their own
            small businesses.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomeSec;
