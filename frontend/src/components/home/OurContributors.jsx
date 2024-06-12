// App.js
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Contributors.css"; // General app styles
import Card from "./Card"; // Import the Card component
import Image from "/contrimage.png";
class OurContributors extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef(); // Create a ref for the Slider component
  }

  // Function to pause the slider on card hover
  handleCardHover = () => {
    if (this.slider.current) {
      this.slider.current.slickPause(); // Pause the slider
    }
  };

  // Function to play the slider on card mouse leave
  handleCardLeave = () => {
    if (this.slider.current) {
      this.slider.current.slickPlay(); // Play the slider
    }
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 6, // Default to 3 slides
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1250, // Adjust the breakpoint for large screens
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1150, // Adjust the breakpoint for large screens
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 950, // Adjust the breakpoint for medium screens
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 750, // Adjust the breakpoint for medium screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 550, // Adjust the breakpoint for small screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="mainContainer">
        <div className="testContainer">
        <h2 style={{ color: '#113C49', textAlign: 'center', fontFamily: 'Poppins, sans-serif', marginBottom: '20px' ,fontWeight:600,fontSize:'40px'}}>Our Contributors</h2>
        <p style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', marginBottom: '40px' }}>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
</p></div>
        <div className="cardContainer">
          <Slider {...settings}>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 1"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 2"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 3"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 4"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 5"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 6"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 7"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 8"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 9"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="Contributor 10"
                cont="Contributions : 12"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default OurContributors;
