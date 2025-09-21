import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  let playerName;

  if (!isEditing) {
    playerName = <span className="player-name">{name}</span>;
  } else {
    playerName = <input type="text" placeholder="Enter your name" />;
  }

  return (
    <>
      <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>
          {!isEditing ? "Edit" : "Save"}
        </button>
      </li>
    </>
  );
}
