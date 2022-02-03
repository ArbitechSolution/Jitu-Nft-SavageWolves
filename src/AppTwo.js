import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "./Component/navbar/navbar";
import Menu from "./Component/menu/menu";
import Menudown from "./Component/menudown/Menudown";
import Roadmap from "./Component/roadmap/Roadmap";
import Team from "./Component/team/Team";
import Footer from "./Component/footer/Footer";
import Header from "./Componentone/Header/Header";
import Headerdown from "./Componentone/headerdown/Headerdown";
import Rarity from "./Componentone/RARITY/Rarity";
import Faq from "./Componentone/FAQ/Faq";
import Slider from "./Componentone/silder/Slider";
import Footertwo from "./Componentone/Foootertwo/Footertwo";
import { SliderData } from "./Componentone/silder/sliderimage";
import AppOne from "./AppOne";
import { Route, Switch } from "react-router-dom";
import Token from "./Component/Token/Token";
import TokenBenefit from "./Component/Token-Benefit/TokenBenefit";
import AppThree from "./AppThree";

function AppTwo() {
  const [isChangeRoute, setIsChangeRoute] = useState("main");
  const changeRouteMain = () => {
    
    setIsChangeRoute("main");
  };

  const changeRouteMint = () => {
    setIsChangeRoute("mint");
  };
  const changeRouteClaim = () => {
    setIsChangeRoute("claim");
  };
  const Main = () => {
    return (
      <>
        <Navbar
          changeRouteMain={changeRouteMain}
          changeRouteMint={changeRouteMint}
          changeRouteClaim={changeRouteClaim}
        />
        <Menu />
        <Menudown />
        <Roadmap />
        <Token />
        <TokenBenefit />
        <Team />
        <Faq />
        <Footertwo />
      </>
    );
  };
  const Mint = () => {
    return (
      <>
        <Navbar
          changeRouteMain={changeRouteMain}
          changeRouteMint={changeRouteMint}
          changeRouteClaim={changeRouteClaim}
        />
        <AppOne />
      </>
    );
  };
  const Claim = () => {
    return (
      <>
        <Navbar
          changeRouteMain={changeRouteMain}
          changeRouteMint={changeRouteMint}
          changeRouteClaim={changeRouteClaim}
        />
        <AppThree changeRouteMain={changeRouteMain} />
      </>
    );
  };
  if (isChangeRoute == "main") {
    return (
      <div className="App">
        <Main />
      </div>
    );
  } else if (isChangeRoute == "mint") {
    return (
      <div className="App">
        <Mint />
      </div>
    );
  } else if (isChangeRoute == "claim") {
    return (
      <div className="App">
        <Claim changeRouteMain={changeRouteMain} />
      </div>
    );
  } else {
    return <></>;
  }
}

export default AppTwo;
