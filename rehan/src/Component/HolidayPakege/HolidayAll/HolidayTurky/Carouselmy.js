
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselDefault (){

        return (
            <Carousel 
            showThumbs={false} 
            showArrows 
            autoPlay 
            infiniteLoop 
            interval={2000} // Set autoplay interval to 2 seconds
            className="custom-carousel"
        >
            <div className="carousel-item   w-full flex md:h-[90vh] h-[50vh] relative">
                <img src="turkey.jpg" alt="Dubai" className="carousel-image" />
                <div className="carousel-text">Travel Like a Pro</div>
            </div>
            
        </Carousel>
        );
    }

export default CarouselDefault
