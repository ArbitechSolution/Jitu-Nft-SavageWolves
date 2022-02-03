import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import logo from "../../Asset1/title.png";
import opensea from "../../Asset1/opensea.png";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./navbar.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { loadAccountAddress } from "../../Apis/Api";
function ShowNavbar({ changeRouteMain, changeRouteMint, changeRouteClaim }) {
  let [Address, setAddress] = useState("CONNECT METAMASK");

  const getaddress = async () => {
    let connectaddress = await loadAccountAddress();
    if (connectaddress == "No Wallet") {
      setAddress("No Wallet");
    } else if (connectaddress == "Connect to Ethereum") {
      setAddress("Connect Ethereum");
    } else {
      let acc =
        connectaddress?.substring(0, 4) +
        "..." +
        connectaddress?.substring(connectaddress?.length - 4);

      setAddress(acc);
    }
  };
  setInterval(() => {
    getaddress();
  }, 1000);
useEffect(() => {

  getaddress();
  return () => {setAddress()}
}, [])
  return (
    <div className="fluid-container">
      <Navbar
        expand="lg"
        variant="dark"
        style={{ background: "#261a40", }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="">
            <Link to="/">
              <img
                alt=""
                src={logo}
                id="navbarlogo"
                onClick={() => {
                  changeRouteMain();
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" variant="white" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="navbaer"
          >
            <Nav>
              <Nav.Link
                href="#about"
                className=" m-1"
              >
                <span
                  className="navbarcol"
                  onClick={() => {
                    changeRouteMain();
                  }}
                >
                  {" "}
                  ABOUT
                </span>
              </Nav.Link>
              <Nav.Link
                href="#roadmap"
                className="m-1"
              >
                <span
                  className="navbarcol"
                  onClick={() => {
                    changeRouteMain();
                  }}
                >
                  {" "}
                  ROADMAP
                </span>
              </Nav.Link>
              <Nav.Link
                href="#token"
                className=" m-1"
              >
                <span
                  className="navbarcol"
                  onClick={() => {
                    changeRouteMain();
                  }}
                >
                  TOKEN
                </span>
              </Nav.Link>
             
              <Nav.Link
                href="#mint"
                className=" m-1"
              >
                <span
                  className="navbarcol"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    changeRouteMint();
                  }}
                >
                  MINT
                </span>
              </Nav.Link>
              <Nav.Link
                href="#MyMint"
                className=" m-1"
              >
                <span
                  className="navbarcol"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    changeRouteClaim();
                  }}
                >
                  My Mint
                </span>
              </Nav.Link>

              <Nav.Link href="#link" className="" style={{ color: "white" }}>
                <button
                  className="btn navbarbtn"
                  size="sm"
                  onClick={() => getaddress()}
                >
                  {Address}
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="navbardown">
            <Navbar.Text variant="white" style={{ color: "white" }}>
              <a
                href="https://discord.gg/savagewolves"
                target="_blank"
                width="40px"
              >
                <FaDiscord size={30} className="m-3" />
              </a>
            </Navbar.Text>
            <Navbar.Text
              variant="white"
              style={{ color: "white" }}
              className="m-3"
            >
              <a href="https://twitter.com/SavageWolvesNFT" target="_blank">
                <FaTwitter size={30} />
              </a>
            </Navbar.Text>
            <Navbar.Text
              variant="white"
              style={{ color: "white" }}
              className="m-3"
            >
              <a
                href="https://opensea.io/collection/savagewolves"
                target="_blank"
                width="40px"
              >
                <img src={opensea} width="30px" />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ShowNavbar;
