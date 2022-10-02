import Button from 'components/micro-components/Button/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import { surrenderStats, resetStats, restartGame } from 'store/persistSlice'

const Confirmation = () => {
  const dispatch = useAppDispatch()
  const { window, title, description } = useAppSelector((state) => state.modal)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  const handleConfirmation = () => {
    if (['Новая игра?', 'Проиграл', 'Сдаёшься?'].includes(title!)) {
      dispatch(restartGame())
      dispatch(
        openModal({
          open: false,
          window: window,
          title: title,
          description: description,
        }),
      )
      if (title === 'Сдаёшься?') {
        setTimeout(() => dispatch(openModal({ open: true, window: 'LeaveGame' })), 700)
        dispatch(surrenderStats())
        return
      }
      return
    }
    if (title === 'Сбросить статистику?') {
      // localStorage.removeItem('stats')
      dispatch(resetStats())
      dispatch(
        openModal({
          open: false,
          window: window,
          title: title,
          description: description,
        }),
      )
      return
    }
  }

  return (
    <section className='relative w-[340px]'>
      <h2
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } py-4 text-base font-extrabold text-center uppercase`}
      >
        {title}
      </h2>
      {description && (
        <ul className={`mb-4 ${darkMode ? 'text-wordleYellowDark' : 'text-wordleYellow'}`}>
          {description?.map((text, index) => {
            return (
              <div className='px-3 flex flex-col justify-center' key={index}>
                <li className='py-3 flex justify-center items-center text-sm font-bold text-center'>
                  {text}
                </li>
              </div>
            )
          })}
        </ul>
      )}
      <div className='pt-4 pb-4 flex justify-center items-center'>
        <Button
          text={'нет'}
          color={'red'}
          onClick={() =>
            dispatch(
              openModal({ open: false, window: window, title: title, description: description }),
            )
          }
          style={{ margin: '0 0.5rem 0 0' }}
        />
        <Button
          text={'да'}
          color={'blue'}
          onClick={() => handleConfirmation()}
          style={{ margin: '0 0 0 0.5rem' }}
        />
      </div>
    </section>
  )
}

export default Confirmation
