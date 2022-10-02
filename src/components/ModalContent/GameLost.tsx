import Button from 'components/micro-components/Button/Button'
import grave from '../../assets/gif/grave.gif'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'

const GameLost = () => {
  const dispatch = useAppDispatch()
  const { window } = useAppSelector((state) => state.modal)
  const rightGuess = useAppSelector((state) => state.persist.game.word.currentWord)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    <section className='w-80'>
      <div className='flex justify-center'>
        <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
          {globalSvgSelector('skull')}
        </span>
        <h2 className='py-4 ml-3 mr-3 text-center text-xl font-extrabold text-wordleRed uppercase'>
          Поражение
        </h2>
        <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
          {globalSvgSelector('skull')}
        </span>
      </div>
      <img src={grave} alt='David Alaba' className='w-40 h-40 mx-auto'></img>
      <p
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } py-4 text-base font-extrabold text-center uppercase`}
      >
        Загаданное слово
      </p>
      <ul className='py-4 flex justify-center items-center'>
        {[...rightGuess].map((letter, index) => {
          return (
            <li
              className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center font-['Bitter'] text-2xl font-extrabold text-wordleWhite uppercase ${
                darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
              }`}
              key={index}
            >
              {letter}
            </li>
          )
        })}
      </ul>
      <Button
        text={'ok'}
        color={'blue'}
        onClick={() => dispatch(openModal({ open: false, window: window }))}
        style={{ margin: '16px auto' }}
      />
    </section>
  )
}

export default GameLost
