import { gql, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { NoFound } from '../NoFound'
import { PhotoCard } from '../PhotoCard'
import { SkeletonPhotoCard } from '../PhotoCard/styles'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

  if (loading) {
    return Array(5)
      .fill(0)
      .map(() => <SkeletonPhotoCard key={uuidv4()} height={200} />)
  }

  if (error) return <NoFound />

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={uuidv4()} {...photo} />
      ))}
    </ul>
  )
}
