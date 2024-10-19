// Write your code here.
import './index.css'

const WinLoseCard = props => {
  const {score, isWon, replyGame} = props
  const winLoseTxt = isWon ? 'You Won' : 'You Lose'
  const winLoseEmoji = isWon ? 'You did it' : 'Better luck next time'

  const scoreType = isWon ? 'Best Score' : 'Score'

  const winLoseImg = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const playAgain = () => {
    replyGame()
  }
  return (
    <div className="resultDiv">
      <div className="result">
        <h1 className="winLose">{winLoseTxt}</h1>
        <p className='better'>{winLoseEmoji}</p>

        <p className="p">{scoreType}</p>

        <p className="marks">{score}/12</p>
        <button className="playAgainButton" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="forImage">
        <img className="winLoseImg" alt="win or lose" src={winLoseImg} />
      </div>
    </div>
  )
}

export default WinLoseCard
