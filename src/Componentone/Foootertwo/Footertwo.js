import React from "react";
import "./Footertwo.css";
import image1 from "../../Asset1/duello.png";
function Footertwo() {
  return (
    <div className="footertwo ">
      <div className="container container10">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            className="col-lg-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              paddingBottom: "40px",
            }}
          >
            <h3 className="footertwoh3">WELCOME TO</h3>
            <h3 className="footertwoh3">THE SAVAGE COMMUNITY</h3>
            <button className="btn buttonbtn"> <a href="https://discord.gg/savagewolves" target="_blank" >JOIN DISCORD</a> </button>
          </div>
          <div className="col-lg-5">
            <img src={image1} className="footertwoimage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footertwo;
