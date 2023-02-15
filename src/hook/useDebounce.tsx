import { useRef, useEffect } from 'react'

type Timer = ReturnType<typeof setTimeout>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SomeFunction = (...args: any[]) => void

export function useDebounce<Func extends SomeFunction>(
  func: Func,
  delay = 500,
) {
  const timer = useRef<Timer>()

  useEffect(() => {
    return () => {
      if (!timer.current) return
      clearTimeout(timer.current)
    }
  }, [])

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args)
    }, delay)
    clearTimeout(timer.current)
    timer.current = newTimer
  }) as Func

  return debouncedFunction
}
