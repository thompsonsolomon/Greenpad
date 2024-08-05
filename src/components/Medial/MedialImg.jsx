import React from "react";
import "./Medial.css";
import { useHistory, useParams } from "react-router-dom";
import { Data } from "../../dummyData";
function MedialImg() {
  const params = useParams();
  const FilteredData = Data;
  const history = useHistory();
  const HandleReverse = () => {
    history.go("-1");
  };
  return (
    <div className="cardContainer">
      <div className="cardWrapper">
        {FilteredData &&
          FilteredData.filter((val) => val.id === params.id).map((val) => (
            <div key={val.id} className="card">
              <div className="cancle">
                <button onClick={HandleReverse}>x</button>
              </div>
              <img src={val.cover} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.desc}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated {val.time}</small>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MedialImg;
