import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName;

  if (!isEditing) {
    editablePlayerName = <span className="player-name">{playerName}</span>;
  } else {
    editablePlayerName = (
      <input
        type="text"
        placeholder="Enter your name"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <>
      <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
