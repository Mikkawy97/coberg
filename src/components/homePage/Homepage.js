import React from "react";
import home from "../../images/home.png";
import "./Homepage.css";
function HomePage() {
  return (
    <div className="home_wrapper">
      <div className="overlay"> </div>
      <div className="d-flex flex-row align-items-center">
        <div className="img_container">
          <img className="img-fluid" src={home} alt="home" />
          <div className="content_container">
            <div className="title">Get personalized home interiors</div>
            <div className="sub_title">in just 50 days</div>
            <button className="btn">SPEAK WITH A ONLINE CONSULTANT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
