import React from "react";
import Accordion from "./Accordion";
import "./Faq.css";
const App = () => {
  const accordionData = [
    {
      title: "WHAT ARE SAVAGE WOLVES?",
      content: `Savage Wolves are a limited collection of 2000 genesis,
      high-quality, pixelated and randomly generated NFT’s.
      Each NFT has specific attributes and variables which make
      them unique and exclusive. Savage Wolves will yield
      Savage Tokens ($SVG) per day. You will be able to collect
      your $SVG Tokens right after your mint.
      `,
    },
    {
      title: "WHAT IS THE MINT PRICE?",
      content: `0.08ETH + gas fees.`,
    },
    {
      title: "WHAT’S THE TOTAL NUMBER AVAILABLE TO MINT?",
      content: `2,000 Genesis Wolves (Female, Male and 1/1s)
      There will be a further Legendary Wolves NFT’s that
      will soon be available.`,
    },
    {
      title: "WEN LAUNCH?",
      content: `TBA. Please check our discord for the announcements.`,
    },
    {
      title: "WHEN ARE YOU PLANNING TO LAUNCH THE GAME?",
      content: `Phase 3, exclusive details on 'Savage Game' will be 
      revealed to our Genesis Collection holders in advance.
      Our ultimate goal is to create a game that is interesting 
      and fun to play for everyone in the Savage Universe.`,
    },
    {
      title: "HOW DO I GET WHITE LISTED?",
      content: `We will be distributing whitelist spots through various
      methods. Being an early supporter will guarantee
      a spot in the whitelist.We will also be hosting numerous community events on 
      our Discord and Twitter to give away whitelist spots.
      `,
    },
    {
      title: "WHAT IS THE MAX NUMBER OF MINT PER WALLET?",
      content: `Pre-Sale: 3 NFT’s per wallet
      Public Sale: TBA `,
    },
  ];

  return (
    <div className="faqcolor">
      <div className="container">
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <h2 className="faq1">FAQ</h2>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
