import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { v4 as uuidv4 } from 'uuid'
import { Category } from '../Category/'
import { Item, List } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    const response = await window.fetch(
      'https://petgram-server-24iykciv5.now.sh/categories'
    )
    const categories = await response.json()
    setCategories(categories)
    setLoading(false)
  }, [])

  return { categories, loading }
}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200

      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )

  if (loading) {
    return (
      <List>
        {Array(5)
          .fill(0)
          .map(() => (
            <Item key={uuidv4()}>
              <Skeleton circle height={75} width={75} />
            </Item>
          ))}
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
