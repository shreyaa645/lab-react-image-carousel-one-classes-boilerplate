import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      index: (prevState.index - 1 + images.length) % images.length
    }));
  }

  handleNext = () => {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % images.length
    }));
  }

  render() {
    const { index } = this.state;
    const currentImage = images[index];

    return (
      <div className="mainContainer">
        <div>
          <ArrowBackIosIcon onClick={this.handlePrev} />
        </div>
        <div className="imagebox">
          <img src={currentImage.img} alt="" />
        </div>
        <div className="imagecontainer">
          <div className="titleBox">
            <p>{currentImage.title}</p>
          </div>
          <div className="subtitleBox">
          <p>{currentImage.subtitle}</p>
          </div>
        </div>
        
        <div>
          <ArrowForwardIosIcon onClick={this.handleNext} />
        </div>
      </div>
    );
  }
}

export default Carousel;