import React from "react";
import "./Medial.css";
import { Link } from "react-router-dom";
import { Data } from "../../dummyData";
import { Interview, testimonial_2 } from "../Asset/Images";

function Medial() {
  const ImgData = Data;
  return (
    <div className="medialCon">
      <div className="gallery-area">
        {/* <!-- Single Gallery Area --> */}
        {ImgData &&
          ImgData.map((data) => (
            <div key={data.id} className="single-gallery-area">
              <Link
                to={`medialImg/${data.id}`}
                className="gallery-img"
                
                title={data.title}
              >
                <img src={data.cover} alt="galaryImg" />
              </Link>
            </div>
          ))}
      </div>

      <div className="videoCon">
        <div className="videoWrapper_main">
          <h2>Testimonial / Interview Videos </h2>
        <div className="videoWrapper">
          <video src={Interview} controls loop  title="BBC/CHANNELS TV INTERVIEW" />
          <video src={testimonial_2} controls loop title="CGTN-AFRICA TV INTERVIEW"  />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Medial;
