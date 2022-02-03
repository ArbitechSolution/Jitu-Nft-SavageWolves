import React from "react";
import { Card, Button } from "react-bootstrap";
import design from "../../asset/design1.png";
import GroupOne from "../../Asset1/icon_01.png";
import Grouptwo from "../../Asset1/icon_02.png";
import Groupthree from "../../Asset1/icon_03.png";
import Groupfour from "../../Asset1/icon_04.png";
import Groupfive from "../../Asset1/icon_05.png";
import Groupsix from "../../Asset1/icon_06.png";
import "./TokenBenefit.css";
function TokenBenefit() {
  return (
    <div className="container conatiner3">
      <div
        style={{
          backgroundColor: "#32274a",
          paddingTop: "10px",
          paddingBottom: "40px",
        }}
      >
        <div className="row">
          <div className="col">
            <h2 className="menudownh18">TOKEN UTILITIES</h2>
          </div>
        </div>
        <div
          className="row"
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <Card
            style={{
              width: "18rem",
              background: "#32274a",
              border: "1px solid #32274a",
            }}
            lg="dark"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={GroupOne} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">BREEDING</h4>
              <p className="membershipp">
                If you hold 2 Genesis Wolves and enough tokens you will get one
                Legendary Wolf for FREE
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              background: "#32274a",
              border: "1px solid #32274a",
            }}
            lg="dark"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Grouptwo} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">TOKEN</h4>
              <p className="membershipp">
                You will be able to use your tokens and purchase a diverse range
                of digital items which will play an important role in the Savage
                Game.
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              background: "#32274a",
              border: "1px solid #32274a",
            }}
            lg="dark"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupthree} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">UTILITY</h4>
              <p className="membershipp">
                We plan to launch several additional series of Savage Utility
                Box NFT’s in the future. Both Female and Male genesis holders
                will be given priority access to these drops as well.
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              background: "#32274a",
              border: "1px solid #32274a",
            }}
            lg="dark"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupfour} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">DAO</h4>
              <p className="membershipp">
                The more $SVG token you hold, the more control you have in the
                Savage Community.
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              background: "#32274a",
              border: "1px solid #32274a",
            }}
            lg="dark"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupfive} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">P2E</h4>
              <p className="membershipp">
                We are building a game where players will be rewarded for their
                skills and luck. Players will have an option of making bets with
                $SVG tokens or NFT’s
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              background: "#32274a",
              border: "1px solid #32274a",
            }}
            lg="dark"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupsix} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">BEYOND</h4>
              <p className="membershipp">
                Our genesis and $SVG token holders will be given exclusive
                access to many projects that we will be collabing with in the
                future.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TokenBenefit;
