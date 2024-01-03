import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => {
    setIsEditing((editing) => !editing);
  };

  console.log(isEditing);
  return (
    <>
      <li>
        <span className="player">
          {isEditing ? (
            <input type="test" required value={name} />
          ) : (
            <span className="player-name">{name}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing ? `Save` : `Edit`}</button>
      </li>
    </>
  );
};

export default Player;
