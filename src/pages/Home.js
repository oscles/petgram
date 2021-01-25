import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategory'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
export function Home({ categoryId }) {
  return (
    <>
      <Helmet>
        <title></title>
        <meta
          name='description'
          content='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
