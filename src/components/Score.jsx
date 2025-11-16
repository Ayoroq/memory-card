export default function ScoreDisplay({score, highScore}){
    return(
        <div className="score-display">
            <p className="score">Score <span>{score}</span></p>
            <p className="score">High Score <span>{highScore}</span></p>
        </div>
    )
}