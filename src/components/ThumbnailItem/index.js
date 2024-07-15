import './index.css'

const ThumbnailItem = props => {
  const {details, onClickImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = details

  const clickThumbnail = () => {
    onClickImage(id)
  }

  return (
    <li>
      <button onClick={clickThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
