import React from "react";
import "./Panel.css";
import sample1 from "../assets/sample1.jpg";
function Panel() {
  return (
    <div>
      <div className="hide-on-med-and-up">
        <div className="container">
          <div class="card">
            <div class="card-image">
              <img src={sample1} />
            </div>
            <div class="card-content">
              <div className="panel-header bold">
                From Paintball to Pizza Making, We Have an Experience for You!
              </div>
              <div className="panel-description thin">
                You shouldn't have to miss out on opportunities because you
                don't know where to go. Guided Experiences has you covered!
              </div>
            </div>
            <div class="card-action">
              <a href="#">Sign Up Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container hide-on-small-only">
        <div className="row flex">
          <div className="col s12 white-text z-depth-1 panel-img panel-text valign-wrapper panel-row">
            <div className="panel-container">
              <div className="panel-header bold">
                From Paintball to Pizza Making, We Have an Experience for You!
              </div>
              <br/>
              <div className="panel-description thin">
                You shouldn't have to miss out on opportunities because you
                don't know where to go. Guided Experiences has you covered!
              </div>
              <br />
              <div className="panel-footer bold">Sign Up Now</div>
            </div>
          </div>
          <div className="col s12">
            <img src={sample1} className=" z-depth-1 panel-img panel-row" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
