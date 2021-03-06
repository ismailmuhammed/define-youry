import React, { Component } from "react";

import p1 from "../../utilities/assets/images/p1.png";
import p2 from "../../utilities/assets/images/p2.png";
import p3 from "../../utilities/assets/images/p3.png";
import p4 from "../../utilities/assets/images/p4.png";
import sp1 from "../../utilities/assets/images/sp1.png";
import Card from "../utils/PCard";

import "./product.scss"

class index extends Component {
  render() {
    const images = [p1,p2,p3,p4];
    return (
      <div className="container-fluid ">
        <div className="row" style={{ background: "#efefef" }}>
          <div className="col-sm-5 col-md-5 col-md-5 first">
            <img src={sp1} alt="" className="productImg" height="500vh" width="100%" />
          </div>
          <div className=" col-sm-5 col-md-5 col-md-5">
            <div className="content11">
              <h1 className="pheading">Unicity Balance/Bios Life</h1>
              <p className="ptext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                rem recusandae voluptatibus? Quod vel dolor, delectus laborum
                nesciunt similique iure porro illum natus minima in, pariatur
                cum minus, dolores soluta!
              </p>
              <h3 className="p-3">Available Options</h3>
              <div className="buttons row">
                <button className="col-sm-3 col-md-3 col-lg-3 btn btn-light d-inline m-1 pbutton">
                  Option 1
                </button>
                <button className="col-sm-3 col-md-3 col-lg-3 btn btn-light d-inline m-1 pbutton">
                  Option 2
                </button>
                <button className=" col-sm-3 col-md-3 col-lg-3 btn btn-light d-inline m-1 pbutton">
                  Option 3
                </button>
              </div>
              <div className="buy">
                <button className="btn  p-3 buyBtn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="p-5">Related Items</h1>
        </div>
        <div className="row p-5">
          {images.map(el=> <Card img={el}/>)}
        </div>
      </div>
    );
  }
}

export default index;
