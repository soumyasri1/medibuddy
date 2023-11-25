import React, { useState, useEffect } from "react";
import backgroundImage from "./images/homebg.jpg";

const Home = () => {
  const quotes = [
    "Laughter is the best medicine!",
    "An apple a day keeps the doctor away.",
    "The greatest wealth is health.",
    "Your health is an investment, not an expense.",
    "Wrinkles should merely indicate where smiles have been",
    "The spirit never ages. It stays forever young",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate to the next quote in the array
      const currentIndex = quotes.indexOf(currentQuote);
      const nextIndex = (currentIndex + 1) % quotes.length;
      setCurrentQuote(quotes[nextIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentQuote, quotes]);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Updated to flex-start
    alignItems: "flex-end",
    color: "white",
    padding: "50px",
    textAlign: "right",
    position: "relative", // Added position relative
  };

  const quoteStyle = {
    fontSize: "1.5rem",
    fontStyle: "Bold",
    position: "absolute",
    top: "160px", // Adjust the top position as needed
    right: "20px", // Adjust the right position as needed
  };

  return (
    <div style={containerStyle}>
      <p style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
        Welcome to your MediBuddy!
      </p>
      <p>One step solution and a lifetime buddy for you</p>
      <p style={quoteStyle}>{currentQuote}</p>
    </div>
  );
};

export default Home;
