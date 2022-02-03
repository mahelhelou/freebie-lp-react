import React from "react";
import "./hero.css";
import IllustrationOne from "../../assets/img/IllustrationOne.png";

const Hero = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 ">
          <div className="d-flex align-align-items-center">
            <div>
              <h1 className="rubik-font fw-500 font-size-3">
                Want anything to be easy with
                <span className="font-weight-bold">LaslesVPN.</span>
              </h1>
              <p className="rubik-font mt-4">
                Provide a network for all your needs with ease and fun using
                <span className="rubik-font fw-500"> LaslesVPN</span> discover
                interesting features from us.
              </p>
              <div className="Get font-weight-bold rubik-font mt-5">
                Get Started
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-center mt-5 mt-md-0">
            <img
              className="img-fluid"
              src={IllustrationOne}
              alt="IllustrationOne"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
