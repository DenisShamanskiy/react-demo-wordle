import { closeModal } from 'redux/features/modalSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import win from '../../assets/gif/win.gif'
import leave from '../../assets/gif/leave.gif'
import fail from '../../assets/gif/fail.gif'

const GameResult = () => {
  const dispatch = useAppDispatch()
  const rightGuess = useAppSelector((state) => state.game.word.currentWord)
  const darkTheme = useAppSelector((state) => state.settings.darkMode)
  const title = useAppSelector((state) => state.modal.title)

  const getDataResult = (result: string) => {
    switch (result) {
      case 'Победа':
        return {
          img: win,
          imgAlt: 'giphy winner',
        }
      case 'Поражение':
        return {
          img: fail,
          imgAlt: 'giphy fail',
        }
      default:
        return {
          img: leave,
          imgAlt: 'giphy leave',
        }
    }
  }

  return (
    <section className='relative w-72 select-none md:w-80'>
      <button
        type='button'
        className={
          'absolute -top-3 -right-3 block min-w-[24px] rounded transition duration-300 ease-in-out hover:rotate-180 hover:scale-110 md:-top-4 md:-right-4 md:min-w-[28px]'
        }
        onClick={() => dispatch(closeModal())}
      >
        {globalSvgSelector('close', darkTheme)}
      </button>
      <img
        src={getDataResult(title).img}
        alt={getDataResult(title).imgAlt}
        className='mx-auto h-auto min-h-[160px] w-40 md:min-h-[176px] md:w-44'
      ></img>

      {title !== 'Победа' && (
        <>
          <p className='pt-4 pb-2 text-center text-base font-extrabold uppercase text-w-quartz dark:text-w-white-dark md:pt-8 md:pb-4 md:text-lg'>
            Загаданное слово
          </p>
          <ul className='mx-auto grid w-fit grid-cols-5 gap-x-1 py-2 md:py-4'>
            {[...rightGuess].map((letter, index) => {
              return (
                <li
                  className='flex h-9 w-9 items-center justify-center bg-w-green font-["Bitter"] text-2xl font-extrabold uppercase text-w-white dark:bg-w-green-dark md:h-11 md:w-11 md:text-3xl'
                  key={index}
                >
                  {letter}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </section>
  )
}

export default GameResult
