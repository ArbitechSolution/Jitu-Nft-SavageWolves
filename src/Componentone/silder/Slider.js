import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../asset/Slider1.jpg";
import Slider2 from "../../asset/Slider2.jpg";

import Slider from "react-slick";
function ShowSlider() {
  return (
    <div className="container container8">
      <div className="row">
        <h2 className="sliderh2">TROOPERS</h2>
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-10">
          <Carousel variant="dark">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 sliderimage"
                src={Slider1}
                // height="400px"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 sliderimage"
                // height="400px"
                src={Slider2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ShowSlider;

// import React, { useState } from "react";
// import { SliderData } from "./sliderimage";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// const Slider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className="slider">
//       <FaArrowAltCircleLeft
//         className="left-arrow"
//         onClick={prevSlide}
//         style={{ color: "#1DA1F2" }}
//       />
//       <FaArrowAltCircleRight
//         className="right-arrow"
//         onClick={nextSlide}
//         style={{ color: "#1DA1F2" }}
//       />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <img src={slide.image} alt="travel image" className="image" />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default Slider;
