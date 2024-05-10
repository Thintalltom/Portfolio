import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'; // Import arrow icon from react-icons library

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check if user has scrolled down enough to show the button
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener to check scroll position
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button onClick={scrollToTop}>
          <FaArrowCircleUp size={32} color="#555" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
