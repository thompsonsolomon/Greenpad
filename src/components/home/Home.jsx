import React from "react";
import "./Home.css";
import { HomeImg } from "../Asset/Images";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="HomeCon">
      <div className="Homeoverlay">
        <div className="HomeWrapper">
          <div className="TextCon">
            <p className="homefirst">
              Small Changes make a <br /> <span> big impact </span> on a young
              lady life
            </p>
            <p>
              We strongly believe that making an impact for the young women and
              girls of our communities benefits far beyond them
            </p>

            <Link to="/about">
              <button className="homeButton">Learn More</button>
            </Link>
          </div>
          <div className="ImgCon">
            <img src={HomeImg} alt="homeImage " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
