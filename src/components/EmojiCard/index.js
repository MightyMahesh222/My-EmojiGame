// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, emojiClick} = props
  const {emojiUrl, id, emojiName} = emojis

  const changeEmoji = () => {
    emojiClick(id)
  }

  return (
    <li className="emojiDiv emojiDiv1" onClick={changeEmoji}>
      <button type="button" className="imgButton">
        <img className="img img1" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
