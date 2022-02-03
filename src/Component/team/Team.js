import React from "react";
import "./Team.css";
import { Card, Button } from "react-bootstrap";
import GroupOne from "../../asset/Group 2572.png";
import Groupe from "../../asset/Rectangle 4452.png";
import five from "../../Asset1/Team_A.png";
import two from "../../Asset1/Team_B.png";
import three from "../../Asset1/Team_C.png";
function Team() {
  return (
    <div className="container conatiner1">
      <div className="row">
        <div className="col">
          <h2 className="teamh2">THE TEAM</h2>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <Card
          style={{
            width: "18rem",
            background: "#32274a",
            border: "1px solid #32274a",
            zIndex: "1",
          }}
          lg="dark"
          className="m-md-2"
        >
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img src={five} id="image1" />
          </span>
          <Card.Body>
            <h4 className="membershiph4">TheMasterMind</h4>
            <p
              className="membershipp"
              style={{ textAlign: "start", hyphens: "auto" }}
            >
              Hollywood based Marketing Director who loves creating trends.15
              years of experience in various Academy-Awarded projects.The
              mastermind of the Savage Universe.
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
          className="m-md-2"
        >
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img src={two} id="image1" />
          </span>
          <Card.Body>
            <h4 className="membershiph4">LadyB</h4>
            <p
              className="membershipp"
              style={{ textAlign: "start", hyphens: "auto" }}
            >
              Experienced Business Development Specialist of many successful IRL
              projects, she leads the charge in executing our ambitious roadmap
              and build Savage Universe into the next bluechip NFT project.
            </p>
            <p
              className="membershipp"
              style={{ textAlign: "justify", hyphens: "auto" }}
            ></p>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            background: "#32274a",
            border: "1px solid #32274a",
            zIndex: "1",
          }}
          lg="dark"
          className="m-md-2"
        >
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img src={three} id="image1" />
          </span>
          <Card.Body>
            <h4 className="membershiph4">Dev Team</h4>
            <p
              className="membershipp"
              style={{ textAlign: "start" }}
            >
              + An extraordinary team of 10 others including Concept Artists,
              Moderators, Developers, Co-Designers and more.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Team;
