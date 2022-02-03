import React from "react";
import { useHistory } from "react-router-dom";
import circle from "../../Asset1/SW_1.gif";
import { Link } from "react-router-dom";
import "./Token.css";
function Token() {
  return (
    <div
      id="token"
      style={{
        backgroundColor: "#fe4759",
        paddingTop: "50px",
        paddingBottom: "30px",
        marginTop: "70px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <img
              src={circle}
              className="circleimage "
            />
          </div>
          <div className="col-lg-6 statuscol">
            <h2 className="statush2">What is Savage Token?</h2>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; SVG is the token that
              provides a fun layer to the Savage Universe. Utility of the $SVG
              token will include the following but will not be limited to
              Legendary Wolves Breeding, Launchpad Access, Digital Collectibles,
              Votes, and grant access to the Game
            </p>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; We want to make our
              future projects as accessible as possible for our earliest
              supporters. Utilities of $SVG tokens is to be used on getting
              whitelist for many projects that we will be collabing with in the
              future
            </p>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; If you hold 1 Genesis
              Wolf you will automatically get whitelisted for the Legendary Wolf
              collection.
            </p>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; You will get a
              Legendary Wolf for FREE if you hold two genesis Savage Wolves in
              your wallet.Claims will cost $SVG + GAS
            </p>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; If you hold 1 Female
              and 1 Male Genesis Wolves, you will get one Legendary Wolves for
              FREE (excluding gas fees) and you will be given priority access to
              the Savage Utility Box in the Phase 3.
            </p>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; Savage Community also
              utilizes the $SVG tokens in the voting mechanics.
            </p>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; $SVG is made as an
              extension to the Savage Universe and it is a utility token but
              predominantly built for fun. It is not an investment and has no
              economic value. (1 $SVG = 1 $SVG)
            </p>
            <p className="statusp">
              <b style={{ color: "#f6e42e" }}>●</b>&nbsp; Tokens will have a
              limited supply and they will be burned for any action mentioned to
              happen in the roadmap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
