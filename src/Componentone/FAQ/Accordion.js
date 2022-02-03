import React, { useState } from "react";
import "./Faq.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BiChevronsDown } from "react-icons/bi";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [textColor, setTextColor] = useState("white");
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <hr />
          <div
            onClick={() => {
              setIsActive(!isActive);
              setTextColor(textColor === "white" ? "#f6e42e" : "white");
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "13px",
              // alignSelf: "center",
            }}
          >
            <div
              className="label label1"
              style={{
                display: "flex",
                // justifyContent: "center",
                color: textColor,
              }}
            >
              <b>{title}</b>
            </div>
            <div
              style={{
                // display: "fl ex",
                // flexDirection: "row",
                alignSelf: "center",
                // justifyContent: "right",
              }}
            >
              {isActive ? (
                <BiChevronsDown size={35} />
              ) : (
                <FaAngleDoubleRight size={25} />
              )}
            </div>
          </div>
          {isActive && (
            <div
              style={{
                fontFamily: "PixelOperatorMonoHBRegular",
                color: "white",
                fontSize: "20px",
              }}
            >
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
