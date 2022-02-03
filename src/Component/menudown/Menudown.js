import React from "react";
import photo from "../../Asset1/SW_GIF.gif";
import "./Menudown.css";
function Menudown() {
  return (
    <div className="container conatiner1" id="about">
      <div className="row menudownrow2">
        <div
          className="col-lg-4 d-flex justify-content-center"
          style={{
            display: "flex",
            alignSelf: "center",
          }}
        >
          <img src={photo} className="menudownimage" />
        </div>
        <div className="col-lg-7 mx-lg-4 ">
          <h2 className="menudownh1">SAVAGE WOLVES</h2>
          <p className="menudownp">
            Savage Wolves are a limited collection of 2000 Genesis,
            high-quality, pixelated and randomly generated NFTs. Each NFT has
            specific attributes and variables which make them unique and
            exclusive. Savage Wolves will yield Savage Tokens ($SVG) per day.
            You will be able to collect your $SVG Tokens right after your mint.
            Utility of the $SVG token will include the following but will not be
            limited to Legendary Wolves Breeding, Launchpad Access, Digital
            Collectibles, and grant access to the metaverse.
          </p>
        </div>
      </div>
      <div className="row roadmapdown" id="roadmap">
        <div className="col">
          <h2 className="roadmaph1">ROADMAP</h2>
        </div>
      </div>
    </div>
  );
}

export default Menudown;
