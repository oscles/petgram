import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      return false
    }
  })

  const setValue = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (err) {
      console.error(err)
    }
  }

  return [storedValue, setValue]
}
