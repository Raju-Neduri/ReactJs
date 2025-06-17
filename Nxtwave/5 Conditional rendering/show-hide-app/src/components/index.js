import { useState } from "react";
import "./index.css";

const ShowHide = () => {
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);

  const toggleFirstName = () => {
    setShowFirstName((prevState) => !prevState);
  };

  const toggleLastName = () => {
    setShowLastName((prevState) => !prevState);
  };

  return (
    <div className="bg-container">
      <h1 className="heading">Show/Hide</h1>
      <div className="buttons-container">
        <div className="name-section">
          <button className="button" onClick={toggleFirstName}>
            Show/Hide Firstname
          </button>
          {showFirstName && <p className="name-card">Neduri</p>}
        </div>

        <div className="name-section">
          <button className="button" onClick={toggleLastName}>
            Show/Hide Lastname
          </button>
          {showLastName && <p className="name-card">Raju</p>}
        </div>
      </div>
    </div>
  );
};

export default ShowHide;
