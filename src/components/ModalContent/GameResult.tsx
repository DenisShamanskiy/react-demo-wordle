import Button from 'components/micro-components/Button/Button'
import { closeModal } from 'store/modalSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import davidAlaba from '../../assets/gif/david-alaba.gif'
import giveUp from '../../assets/gif/give-up.gif'
import grave from '../../assets/gif/grave.gif'

const GameResult = () => {
  const dispatch = useAppDispatch()
  const rightGuess = useAppSelector((state) => state.game.word.currentWord)
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  const title = useAppSelector((state) => state.modal.title)

  const getDataResult = (result: string) => {
    switch (result) {
      case 'Победа':
        return {
          img: davidAlaba,
          imgAlt: 'giphy David Alaba',
          colorBtn: 'green',
          color: `${darkMode ? 'text-wordleGreenDark' : 'text-wordleGreen'}`,
        }
      case 'Поражение':
        return {
          img: grave,
          imgAlt: 'giphy Grave',
          colorBtn: 'red',
          color: `${darkMode ? 'text-wordleRedDark' : 'text-wordleRed'}`,
        }
      default:
        return {
          img: giveUp,
          imgAlt: 'giphy give up',
          colorBtn: 'blue',
          color: `${darkMode ? 'text-wordleBlueDark' : 'text-wordleBlue'}`,
        }
    }
  }

  return (
    <section className='w-72 sm:w-80 select-none'>
      <div className='flex justify-center items-center'>
        {title !== 'Сдался' && (
          <h2
            className={`${
              getDataResult(title).color
            } mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-extrabold  uppercase`}
          >
            {title}
          </h2>
        )}
      </div>
      <img
        src={getDataResult(title).img}
        alt={getDataResult(title).imgAlt}
        className='w-40 sm:w-44 min-h-[160px] sm:min-h-[176px] h-auto mx-auto'
      ></img>
      {title !== 'Победа' && (
        <>
          <p
            className={`${
              darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
            } pt-4 sm:pt-8 pb-2 sm:pb-4 text-base sm:text-lg font-extrabold text-center uppercase`}
          >
            Загаданное слово
          </p>
          <ul className='py-2 sm:py-4 mx-auto grid grid-cols-5 gap-x-1 w-fit'>
            {[...rightGuess].map((letter, index) => {
              return (
                <li
                  className={`w-9 sm:w-11 h-9 sm:h-11 last-of-type:mr-0 flex justify-center items-center font-['Bitter'] text-2xl sm:text-3xl font-extrabold text-wordleWhite uppercase ${
                    darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
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
      <div className='w-28 sm:w-32 mt-6 sm:mt-8 mx-auto'>
        <Button
          text={'ok'}
          color={getDataResult(title).colorBtn}
          onClick={() => dispatch(closeModal())}
        />
      </div>
    </section>
  )
}

export default GameResult
