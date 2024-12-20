// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// function CarouselDefault (){

//         return (
//             <Carousel>
//                 <div className="border-2 border-black w-full flex  h-[90vh]">
//                     <img src="dubai1.jpg" alt="" className=""/> 

//                  </div>
//                 <div className="border-2 border-black w-full flex  h-[90vh]">
//                     <img src="image.webp" alt="" />

//                  </div>
//                 <div className="border-2 border-black w-full flex  h-[90vh]">
//                     <img src="image.webp" alt=""/>
//                  </div>
//             </Carousel>
//         );
//     }

// export default CarouselDefault
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import { motion } from 'framer-motion';

// import { Carousel } from 'react-responsive-carousel';
// import "./Carousel.css"; // Assuming you'll add custom styles here

// function CarouselDefault() {
//     return (
//         // <motion.div
//         //     initial={{ x: '-100vw' }}  // Start off-screen to the left
//         //     animate={{ x: 2 }}          // Animate to the center of the screen
//         //     transition={{ type: 'spring', stiffness: 500 }}  // Spring-based animation
//         // >

//             <Carousel
//                 showThumbs={false}
//                 showArrows
//                 autoPlay={2000}
//                 infiniteLoop
//                 interval={2000} // Set autoplay interval to 2 seconds
//                 className="custom-carousel"
//             >
//                 <div className="carousel-item border-2   w-full flex md:h-[90vh] h-[50vh] relative">
//                     <img src="imagec1.jpg" alt="Dubai" className="carousel-image" />
//                     <div className="carousel-text">Travel Like a Pro</div>
//                 </div>
//                 <div className="carousel-item border-2   w-full flex md:h-[90vh] h-[50vh] relative">
//                     <img src="imagec2.jpg" alt="Sample" className="carousel-image" />
//                     <div className="carousel-text">Travel Like a Pro</div>
//                 </div>
//                 <div className="carousel-item border-2   w-full flex md:h-[90vh] h-[50vh] relative">
//                     <img src="imagec3.jpg" alt="Sample" className="carousel-image" />
//                     <div className="carousel-text">Travel Like a Pro</div>
//                 </div>
//             </Carousel>
//         // </motion.div>
//     );
// }

// export default CarouselDefault;



// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import "./Carousel.css"; // Assuming you'll add custom styles here

// function CarouselDefault() {
//     return (
//         <div className="rounded-xl overflow-hidden border-5 border-gray-300 shadow-lg"> 
//             {/* Use rounded-xl for rounded corners, overflow-hidden to clip the content */}
//             <Carousel
//                 showThumbs={false}
//                 showArrows
//                 autoPlay={2000}
//                 infiniteLoop
//                 interval={2000} // Set autoplay interval to 2 seconds
//                 className="custom-carousel"
//             >
//                 <div className="carousel-item w-full flex md:h-[90vh] h-[50vh] relative">
//                     <img src="imagec1.jpg" alt="Dubai" className="carousel-image" />
//                     <div className="carousel-text">Travel Like a Pro</div>
//                 </div>
//                 <div className="carousel-item w-full flex md:h-[90vh] h-[50vh] relative">
//                     <img src="imagec2.jpg" alt="Sample" className="carousel-image" />
//                     <div className="carousel-text">Travel Like a Pro</div>
//                 </div>
//                 <div className="carousel-item w-full flex md:h-[90vh] h-[50vh] relative">
//                     <img src="imagec3.jpg" alt="Sample" className="carousel-image" />
//                     <div className="carousel-text">Travel Like a Pro</div>
//                 </div>
//             </Carousel>
//         </div>
//     );
// }

// export default CarouselDefault;




// {the carousal we are using ------------------------------------------}
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function CarouselDefault() {
    return (
        <div className="rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg w-[93%] h-[60%] mx-auto bg-blue-200"> 
            {/* Adjust w-[300px] and h-[400px] as needed */}
            <Carousel
                showThumbs={false}
                showArrows
                autoPlay
                infiniteLoop
                interval={3000} // Set autoplay interval to 3 seconds
                className="custom-carousel"
            >
                <div className="carousel-item w-full h-full flex relative border-5px ">
                    <img src="imagec1.jpg" alt="Dubai" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec2.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec3.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative border-5px ">
                    <img src="imagec1.jpg" alt="Dubai" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec2.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec3.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative border-5px ">
                    <img src="imagec1.jpg" alt="Dubai" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec2.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec3.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative border-5px ">
                    <img src="imagec1.jpg" alt="Dubai" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec2.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec3.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative border-5px ">
                    <img src="imagec1.jpg" alt="Dubai" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec2.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec3.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative border-5px ">
                    <img src="imagec1.jpg" alt="Dubai" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec2.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec3.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative border-5px ">
                    <img src="imagec1.jpg" alt="Dubai" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec2.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
                <div className="carousel-item w-full h-full flex relative">
                    <img src="imagec3.jpg" alt="Sample" className="carousel-image object-cover w-full h-full" />
                    <div className="carousel-text absolute bottom-4 left-4 text-white">Travel Like a Pro</div>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselDefault;
