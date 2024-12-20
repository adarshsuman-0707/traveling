import React from 'react';
import { motion } from 'framer-motion';
import './Popup.css';  // Create a separate CSS file for styling if needed



function Popup({ onClose }) {
  return (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="popup"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Welcome to Lucky Paradise Tours and Travels!</h2>
        <p>
          Your journey to spiritual fulfillment and joyful exploration begins here.
          From the sacred pilgrimage of Hajj and Umrah
          To unforgettable holiday adventures, we’ve got you covered.
          Let us guide you every step of the way,
          Making your travels smooth, meaningful, and stress-free.
          Pack your bags and leave the planning to us—
          Together, we’ll create memories you’ll treasure forever.</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}

export default Popup;
