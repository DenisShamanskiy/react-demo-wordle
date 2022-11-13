import { closeModal } from 'store/modalSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import davidAlaba from '../../assets/gif/david-alaba.gif'
import giveUp from '../../assets/gif/give-up.gif'
import grave from '../../assets/gif/grave.gif'

const GameResult = () => {
  const dispatch = useAppDispatch()
  const rightGuess = useAppSelector((state) => state.game.word.currentWord)
  const darkTheme = useAppSelector((state) => state.settings.darkMode)
  const title = useAppSelector((state) => state.modal.title)

  const getDataResult = (result: string) => {
    switch (result) {
      case 'Победа':
        return {
          img: davidAlaba,
          imgAlt: 'giphy David Alaba',
        }
      case 'Поражение':
        return {
          img: grave,
          imgAlt: 'giphy Grave',
        }
      default:
        return {
          img: giveUp,
          imgAlt: 'giphy give up',
        }
    }
  }

  return (
    <section className='relative w-72 sm:w-80 select-none'>
      <button
        type='button'
        className={
          'absolute min-w-[24px] -top-3 -right-3 sm:min-w-[28px] sm:-top-4 sm:-right-4 block rounded hover:scale-110 hover:rotate-180 transition duration-300 ease-in-out'
        }
        onClick={() => dispatch(closeModal())}
      >
        {globalSvgSelector('close', darkTheme)}
      </button>
      {title === 'Победа' && (
        <p className='pb-6 ьв:pb-8 text-base sm:text-lg font-extrabold text-center text-w-green dark:text-w-yellow'>
          Winner winner, chicken dinner!
        </p>
      )}
      <img
        src={getDataResult(title).img}
        alt={getDataResult(title).imgAlt}
        className='w-40 sm:w-44 min-h-[160px] sm:min-h-[176px] h-auto mx-auto'
      ></img>

      {title !== 'Победа' && (
        <>
          <p className='pt-4 sm:pt-8 pb-2 sm:pb-4 text-base sm:text-lg font-extrabold text-center uppercase text-w-quartz dark:text-w-white-dark'>
            Загаданное слово
          </p>
          <ul className='py-2 sm:py-4 mx-auto grid grid-cols-5 gap-x-1 w-fit'>
            {[...rightGuess].map((letter, index) => {
              return (
                <li
                  className={`w-9 sm:w-11 h-9 sm:h-11 last-of-type:mr-0 flex justify-center items-center font-['Bitter'] text-2xl sm:text-3xl font-extrabold text-wordleWhite uppercase ${
                    darkTheme ? 'bg-w-green-dark' : 'bg-w-green'
                  }`}
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
