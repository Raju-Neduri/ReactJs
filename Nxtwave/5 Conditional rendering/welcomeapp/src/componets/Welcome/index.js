import React, { useState } from "react";
import "./index.css";

const Welcome = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSubscribe = () => {
    setIsSubscribed((prev) => !prev);
  };

  return (
    <div className="welcome-container">
      <h1 className="heading">Welcome</h1>
      <p className="description">Thank you! Happy Learning</p>
      <button className="subscribe-button" onClick={toggleSubscribe}>
        {isSubscribed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
};

export default Welcome;
