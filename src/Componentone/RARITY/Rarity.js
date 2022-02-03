import React from "react";
import "./Rarity.css";
import rirty from "../../asset/rirty.PNG";
import grop1 from "../../asset/Ellipse 66.png";
function Rarity() {
  return (
    <div className="backroundColor">
      <div className="container conatiner3">
        <div className="row">
          <div className="col">
            <h2 className="rarityh2">RARITY</h2>
          </div>
        </div>
        <img src={rirty} className="rarityimage" />
        {/* <img src={grop} className="rarityimg" /> */}
      </div>
    </div>
  );
}

export default Rarity;
