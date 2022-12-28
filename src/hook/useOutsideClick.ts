import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  exception: boolean,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      if (exception || !el || el.contains((event?.target as Node) || null)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
