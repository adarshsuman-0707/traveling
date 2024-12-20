// import React, { useRef } from "react";
import Packege from "./Component/Packege/Packege";
import Holiday from "./Component/HolidayPakege/Holiday";
import Service from "./Component/Overservice/Service";
import Contact from "./Component/Contact/Contact";
import CarouselDefault from "./Component/Cerausal/Cerousel";
import Domestic from "./Component/Domastice/Domestic";
// import Gallery from "./Component/Gallery/Gallery";

function Home({ refs }) {
  return (

    <div className="">
      {/* Carousel Section */}
      <CarouselDefault />

      {/* Package Section */}
      <div ref={refs.packageRef} id="package" className="py-10 bg-gray-50">
        <Packege />
      </div>

      {/* Holiday Section */}
      <div ref={refs.holidayRef} id="holiday" className="py-10 bg-white">
        <Holiday />
      </div>

      {/* Domestic Section */}
      <div ref={refs.domesticRef} id="domestic" className="py-10 bg-gray-50">
        <Domestic />
      </div>

      {/* Services Section */}
      <div ref={refs.serviceRef} id="services" className="py-10 bg-white">
        <Service />
      </div>

      {/* Contact Section */}
   
      <div ref={refs.contactRef} id="contact" className="py-10 bg-gray-50">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
