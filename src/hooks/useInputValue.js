import { useState } from 'react'

export const useInputValue = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return { values, handleChange }
}
