import { useEffect, useState } from 'react'

const getWidth = () => window.screen.width

export default function useCurrentWidth() {
  const [width, setWidth] = useState(getWidth())
  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  return width
}
