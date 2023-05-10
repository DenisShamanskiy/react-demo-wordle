import '../styles/header-animation.css'
import { useAppSelector } from '../hook'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const HeaderTitle = () => {
  const nodeRef = useRef(null)
  const hmRef = useRef(null)
  const {
    hardMode: { active },
  } = useAppSelector((state) => state.settings)
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={active}
      timeout={500}
      classNames='wordle'
    >
      <div className='ml-14 sm:ml-0'>
        <NavLink to='/'>
          <div
            className='wordle relative flex min-h-[40px] flex-col justify-center transition-all duration-300 sm:flex-row sm:justify-center'
            ref={nodeRef}
          >
            <h1
              className={`absolute left-0 top-0 inline-block font-['Bitter'] text-4xl font-black transition-all duration-500 ease-in${
                active ? ' origin-top-left scale-75 sm:scale-100' : ''
              }`}
            >
              Wordle
            </h1>
            <CSSTransition
              in={active}
              nodeRef={hmRef}
              timeout={500}
              classNames='hard-mode-animation'
              unmountOnExit
            >
              <span
                className='hard-mode-animation absolute -bottom-1 -right-6 w-full text-right font-sans text-xs font-bold text-red-500 sm:right-auto sm:bottom-auto sm:text-base sm:leading-10'
                ref={hmRef}
              >
                hard mode
              </span>
            </CSSTransition>
          </div>
        </NavLink>
      </div>
    </CSSTransition>
  )
}

export default HeaderTitle
