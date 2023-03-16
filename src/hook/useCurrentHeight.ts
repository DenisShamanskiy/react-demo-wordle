import { useEffect, useState } from 'react'

export const useCurrentHeight = (delay = 100) => {
  const getHeight = () =>
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  const [height, setHeight] = useState(getHeight())
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setHeight(getHeight()), delay)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
      clearTimeout(timeoutId)
    }
  }, [delay])

  return height
}

export default useCurrentHeight
