import { useCallback, useState } from 'react'

export const usePasswordToggle = (): [boolean, () => void] => {
  const [visible, setVisible] = useState(false)

  const togglePasswordVisibility = useCallback(() => {
    setVisible((v) => !v)
  }, [])

  return [visible, togglePasswordVisibility]
}
