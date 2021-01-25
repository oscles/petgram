import { gql, useQuery } from '@apollo/client'
import Layout from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
import { SkeletonPhotoCard } from '../components/PhotoCard/styles'

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export default function Favs() {
  const { data = {}, error, loading } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'network-only',
  })

  const { favs } = data

  if (loading) return <SkeletonPhotoCard height={200} />
  if (error) return 'Error!'

  return (
    <Layout
      title='Petgram - Tus favoritos'
      subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'
    >
      <ListOfFavs favs={favs} />
    </Layout>
  )
}
