import Layout from '../components/Layout'
import { PhotoCardDetail } from '../container/PhotoCardDetail'

export function Detail({ detailId }) {
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardDetail detailId={detailId} />
    </Layout>
  )
}
