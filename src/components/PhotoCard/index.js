import { gql, useMutation } from '@apollo/client'
import { Link } from '@reach/router'
import { useNearScreen } from '../../hooks/useNearScreen'
import { LikeButton } from '../LikeButton'
import { Article, Img, ImgWrapper } from './styles'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [elementRef, show] = useNearScreen()

  const [toggleLike] = useMutation(LIKE_PHOTO, {
    variables: { input: { id } },
  })

  const handleFavClick = () => {
    toggleLike()
  }

  return (
    <Article ref={elementRef}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <LikeButton likes={likes} liked={liked} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}
