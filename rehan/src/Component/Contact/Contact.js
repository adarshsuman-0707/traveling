import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
<div div className="contact-container">
      <div className="bg-white lg:h-[75vh] h-[75vh] px-10 rounded-lg md:w-[50%]">
        <h1>Contact Us</h1>
        <p>Your key to hassle-free adventures.</p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="lg:h-[75vh] h-96 bg-white rounded-lg px-10 lg:w-[50%] w-[100%]">
        <h1>Why Us</h1>
        <p>
          Rehan Travels is the key to adventure, elegance, and luxury.
          Experience affordable, hassle-free journeys tailored specifically for you.
          Discover new places with our professionally planned tours.
          Your next unforgettable journey begins here. Join us for your next adventure. 
          Let's travel together.
        </p>
      </div>
      </div>
    </>
  );
};

export default Contact
