import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <li>
        <span className="player">
          //Editing logic
          {!isEditing ? (
            <span className="player-name">{name}</span>
          ) : (
            <input type="text" placeholder="Enter your name" />
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>Edit</button>
      </li>
    </>
  );
}
