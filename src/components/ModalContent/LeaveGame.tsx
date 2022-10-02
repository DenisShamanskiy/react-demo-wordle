import Button from 'components/micro-components/Button/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'

const LeaveGame = () => {
  const dispatch = useAppDispatch()
  const { window } = useAppSelector((state) => state.modal)
  const previousWord = useAppSelector((state) => state.persist.game.word.previousWord)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    <section className='w-80 select-none'>
      <h2
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } py-4 text-base font-extrabold text-center uppercase`}
      >
        Загаданное слово
      </h2>
      <ul className='py-4 flex justify-center items-center'>
        {[...previousWord].map((letter, index) => {
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

export default LeaveGame
