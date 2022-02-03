import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import logo from "../../Asset1/title.png";
import opensea from "../../Asset1/opensea.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container container11">
        <div className="row footerrow ">
          <div
            className="col-lg-2 footerimage222"
           
          >
            <img src={logo} className="footerimage" />
          </div>
          <div className="col-lg-6 footercol">
            <span>ALL RIGHT RESERVED ©2022 </span> |&emsp;
           <a className="tokenLink" href="https://testnet.bscscan.com/address/0x94F72d218907b33D1dD2131A96fA9A137D7f1c99" target="_blank"><span className="text1">NFT CONTRACT </span></a>  |&emsp;
           <a className="tokenLink" href="https://testnet.bscscan.com/address/0x948b2e1F5E2Ed40AbABfB77029AF73717356fb47" target="_blank" ><span className="text1">TOKEN CONTRACT</span></a> 
          </div>

          <div className="col-md-2 footerlink">
            <a href="https://discord.gg/savagewolves" target="_blank" width="40px" style={{ color: "white" }}>
              <FaDiscord size={30} />
            </a>
            <a href="https://twitter.com/SavageWolvesNFT" target="_blank" width="40px" style={{ color: "white" }}>
              <FaTwitter size={30} />
            </a>
            <a href="https://opensea.io/collection/savagewolves" target="_blank" width="40px" style={{ color: "white" }}>
              <img src={opensea} width="30px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
