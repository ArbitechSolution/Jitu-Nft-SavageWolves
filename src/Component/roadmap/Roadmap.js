import React from "react";
import "./Roadmap.css";
import vector from "../../asset/Vector 7.png";
import polygen from "../../asset/Polygon 7.png";
import rectangle from "../../asset/Rectangle.png";
import Rectangle21 from "../../asset/Rectangle21.png";
function Roadmap() {
  return (
    <div className="container conatiner22">
      <div className="row roadmaprow">
        <div
          className="col-lg roadmaprow"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="boxex">
            <spam>Phase 1</spam>
          </div>
          <img src={vector} className="roadmapimage9" />
          <div class="triangle-down"></div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="boxes1">
            <p className="roadmapp">
              <b style={{ color: "#fe4759" }}>●</b> Savage Wolves genesis
              collection consist of 1000 Male and 1000 Female wolves including a
              number of 1/1s. The launch will start with a private sale and will
              proceed through the public sale later on.{" "}
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#fe4759" }}>●</b> You will be able to collect
              5 $SVG tokens per day by holding a genesis wolf starting from the
              day you mint.
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#fe4759" }}>●</b> Savage tokens can be claimed
              from your Wolf Portal on our website after logging in with your
              Metamask
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#fe4759" }}>●</b> Every day, tokens will
              enable you to access to the Savage Universe. You will be able to
              use your tokens and purchase a diverse range of goods (physical
              and virtual). Perhaps items such as Savage Items, Supplies and
              Outfits will start showing up in the future.
            </p>
            <h4 className="roadmaph4">WOLVES BREEDING</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg roadmaprow"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={vector} className="roadmapimage19" />
          <div className="boxex1">
            <spam>Phase 2</spam>
          </div>
          <img src={vector} className="roadmapimage91" />
          <div class="triangle-down"></div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="boxes1">
            <p className="roadmappup">
              <b style={{ color: "#fe4759" }}>●</b> There will be a further
              Legendary Wolves NFT’s that will soon be available. The new
              collection will play a role in the scalability of the project.
              Holders of the Legendary Wolves will have the same privileges of
              the Genesis Wolves except for the fact they won't produce $SVG
              tokens
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#fe4759" }}>●</b> All Savage Wolves holders
              will be added to the presale for the Legendary Wolves, and you
              will be allowed to mint before the public
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#fe4759" }}>●</b>2 Genesis Wolves will be able
              to claim 1 FREE Legendary Wolf. Claims will cost $SVG + GAS
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#fe4759" }}>●</b> We are building a game where
              players will be rewarded based on their skills and luck. Players
              will have an option of making bets with SVG tokens, items or
              Legendary Wolves.
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#fe4759" }}>●</b> Exclusive details on 'Savage
              Game' will be revealed to our Genesis and Legendary Collection
              holders in advance.
            </p>
            <h4 className="roadmaph4">FULL ROADMAP CAN BE FOUND ON DISCORD!</h4>
          </div>
        </div>
      </div>
      <div className="row" id="token">
        <div className="col">
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
