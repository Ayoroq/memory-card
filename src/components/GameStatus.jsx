import React from "react";

const GameStatus = React.forwardRef(({ alreadyClicked, score }, ref) => {
  if (!alreadyClicked && score !== 30) return null;

  return (
    <dialog ref={ref} className="dialog">
      <p>{alreadyClicked ? "Game Over" : "You Won"}</p>
      <div className="button-container">
        <button className="dialog-button">Play Again</button>
        <button className="dialog-button">Exit</button>
      </div>
    </dialog>
  );
});

export default GameStatus;