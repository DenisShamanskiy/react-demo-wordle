import { useEffect, useState } from 'react'

export const useCurrentWidth = (delay = 100) => {
  const getWidth = () => window.screen.width

  const [width, setWidth] = useState(getWidth())
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), delay)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
      clearTimeout(timeoutId)
    }
  }, [delay])
  return width
}

export default useCurrentWidth
