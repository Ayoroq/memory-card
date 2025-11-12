export default function ScoreDisplay({score, highScore}){
    return(
        <div className="score-display">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )
}