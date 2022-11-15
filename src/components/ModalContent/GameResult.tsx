import { closeModal } from 'store/modalSlice'
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
    <section className='relative w-72 md:w-80 select-none'>
      <button
        type='button'
        className={
          'absolute min-w-[24px] md:min-w-[28px] -top-3 md:-top-4 -right-3 md:-right-4 block rounded hover:scale-110 hover:rotate-180 transition duration-300 ease-in-out'
        }
        onClick={() => dispatch(closeModal())}
      >
        {globalSvgSelector('close', darkTheme)}
      </button>
      <img
        src={getDataResult(title).img}
        alt={getDataResult(title).imgAlt}
        className='w-40 md:w-44 min-h-[160px] md:min-h-[176px] h-auto mx-auto'
      ></img>

      {title !== 'Победа' && (
        <>
          <p className='pt-4 md:pt-8 pb-2 md:pb-4 text-base md:text-lg font-extrabold text-center uppercase text-w-quartz dark:text-w-white-dark'>
            Загаданное слово
          </p>
          <ul className='py-2 md:py-4 mx-auto grid grid-cols-5 gap-x-1 w-fit'>
            {[...rightGuess].map((letter, index) => {
              return (
                <li
                  className='w-9 md:w-11 h-9 md:h-11 flex justify-center items-center bg-w-green dark:bg-w-green-dark font-["Bitter"] text-2xl md:text-3xl font-extrabold text-w-white uppercase'
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
