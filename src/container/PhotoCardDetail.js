import { gql, useQuery } from '@apollo/client'
import { PhotoCard } from '../components/PhotoCard'
import { SkeletonPhotoCard } from '../components/PhotoCard/styles'

const GET_DETAIL = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardDetail = ({ detailId }) => {
  const { loading, error, data = {} } = useQuery(GET_DETAIL, {
    variables: { id: detailId }
  })
  const { photo } = data

  if (loading) return <SkeletonPhotoCard height={200} />
  if (error) return 'Error!'

  return <PhotoCard {...photo} />
}
