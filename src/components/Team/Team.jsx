import React from "react";
import "./Team.css";
import { TeamMembers } from "../../dummyData";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="TeamContainer">
      <div className="teamWrapper">
        <div className="teamcardCon">
          {TeamMembers &&
            TeamMembers.map((data) => (
              <div className="item" key={data.id}>
                <div className="imageCon">
                  <img src={data.cover} alt="teamImage" />
                </div>
                <div className="textCon">
                  <div className="nameCon">
                    <h2>{data.Name}</h2>
                    <p>{data.title}</p>
                  </div>
                  <div className="sociaIconCon">
                    <Link to={data.facebook}>
                    <i className="bi bi-facebook" aria-hidden="true"></i>
                    </Link>

                    <Link to={data.tweeter}>
                    <i className="bi bi-instagram"></i>
                    </Link>

                    <Link to={data.tickTok}>
                    <i className="bi bi-tiktok"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div>
          <marquee>
           The above pristegous individuals are the main team of green pad  concept
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Team;
