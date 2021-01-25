import PropTypes from 'prop-types'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'
export const LikeButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
