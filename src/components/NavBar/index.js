// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, topScore, isGameOver} = props

  const scoreBoard = isGameOver ? (
    <div className="nav">
      <p className='score'>Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </div>
  ) : (
    ''
  )

  return (
    <div className="navDiv">
      <div className="nav">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>

      <div className="nav">{scoreBoard}</div>
    </div>
  )
}

export default Navbar
