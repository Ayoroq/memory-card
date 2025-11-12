export default function GameStatus({ alreadyClicked, score }) {
  if (!alreadyClicked && score !== 30) return null;

  return (
    <dialog className="dialog">
      <p>{alreadyClicked ? "Game Over" : "You Won"}</p>
      <div className="button-container">
        <button className="dialog-button">Play Again</button>
        <button className="dialog-button">Exit</button>
      </div>
    </dialog>
  );
}