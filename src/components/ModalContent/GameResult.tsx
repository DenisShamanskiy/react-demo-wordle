import Button from 'components/micro-components/Button/Button'
import { closeModal } from 'store/modalSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import davidAlaba from '../../assets/gif/david-alaba.gif'
import giveUp from '../../assets/gif/give-up.gif'
import grave from '../../assets/gif/grave.gif'

type Props = {
  result: string
}

const GameResult = ({ result }: Props) => {
  const dispatch = useAppDispatch()
  const rightGuess = useAppSelector((state) => state.persist.game.word.currentWord)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  const getDataResult = (result: string) => {
    switch (result) {
      case 'WIN':
        return {
          text: 'Победа',
          icon: () => globalSvgSelector('trophy'),
          img: davidAlaba,
          imgAlt: 'David Alaba',
          color: 'green',
        }
      case 'FAIL':
        return {
          text: 'Поражение',
          icon: () => globalSvgSelector('skull'),
          img: grave,
          imgAlt: 'Grave',
          color: 'red',
        }
      default:
        return {
          text: 'Сдался',
          icon: () => globalSvgSelector('flag'),
          img: giveUp,
          imgAlt: 'give up',
          color: 'blue',
        }
    }
  }
  const getColorHeading = (color: string) => {
    switch (color) {
      case 'green':
        return `${darkMode ? 'text-wordleGreenDark' : 'text-wordleGreen'}`
      case 'red':
        return `${darkMode ? 'text-wordleRedDark' : 'text-wordleRed'}`
      default:
        return `${darkMode ? 'text-wordleBlueDark' : 'text-wordleBlue'}`
    }
  }

  return (
    <section className='w-72 sm:w-80 select-none'>
      <div className='flex justify-center items-center'>
        {/* <span className='w-7 sm:w-8 h-7 sm:h-8 flex justify-center bg-no-repeat bg-center bg-contain text-center -scale-x-100'>
          {getDataResult(result).icon()}
        </span> */}
        <h2
          className={`${getColorHeading(
            getDataResult(result).color,
          )} py-4 mx-2 text-center text-xl sm:text-2xl font-extrabold  uppercase`}
        >
          {getDataResult(result).text}
        </h2>
        {/* <span className='w-7 sm:w-8 h-7 sm:h-8 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
          {getDataResult(result).icon()}
        </span> */}
      </div>
      <img
        src={getDataResult(result).img}
        alt={getDataResult(result).imgAlt}
        className='w-40 sm:w-44 min-h-[160px] sm:min-h-[176px] h-auto mx-auto'
      ></img>
      {result !== 'WIN' && (
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
          color={getDataResult(result).color}
          onClick={() => dispatch(closeModal())}
        />
      </div>
    </section>
  )
}

export default GameResult
