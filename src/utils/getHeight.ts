import { useEffect, useState } from 'react'

const getHeight = () =>
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

export default function useCurrentHeight() {
  const [height, setHeight] = useState(getHeight())
  useEffect(() => {
    const resizeListener = () => {
      setHeight(getHeight())
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  return height
}
