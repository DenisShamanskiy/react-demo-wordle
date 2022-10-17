// import Button from 'components/micro-components/Button/Button'
import ButtonIcon from 'components/micro-components/Button/ButtonIcon'
import CountStats from 'components/micro-components/CountStats'
import { useAppSelector, useAppDispatch } from 'utils/hook'
import { openModal } from 'store/modalSlice'
// import { logout } from 'store/persistSlice'

const Statistics = () => {
  const { win, loss, surrender, bar } = useAppSelector((state) => state.persist.stats)
  const { window } = useAppSelector((state) => state.modal)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)
  const { isLoggedIn } = useAppSelector((state) => state.persist.user)
  const dispatch = useAppDispatch()
  // const disabled = [win, loss, surrender].every((item) => item === 0)
  // const handleStats = () => {
  //   dispatch(openModal({ open: false, window: window, title: title, description: description }))
  //   setTimeout(() => {
  //     dispatch(
  //       openModal({
  //         open: true,
  //         window: 'Confirmation',
  //         title: 'Сбросить статистику?',
  //         description: ['Будет удалена вся текущая статистика игры'],
  //       }),
  //     )
  //   }, 700)
  // }
  // const opneLogin = () => {
  //   dispatch(openModal({ open: false, window: window, title: title, description: description }))
  //   setTimeout(() => {
  //     dispatch(
  //       openModal({
  //         open: true,
  //         window: 'Login',
  //       }),
  //     )
  //   }, 700)
  // }

  return (
    <section className='relative w-[340px] select-none'>
      <h2
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } text-center text-base font-bold uppercase`}
      >
        Статистика
      </h2>
      {/* <p
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } mt-6 text-center text-lg font-bold uppercase`}
      >
        {name}
      </p> */}

      <ButtonIcon
        icon={'close'}
        onClick={() => dispatch(openModal({ open: false, window: window }))}
      />
      {isLoggedIn ? (
        <>
          <div className='my-6 grid grid-cols-3 gap-1'>
            {[win, surrender, loss].map((item, index) => {
              return <CountStats count={item} index={index} key={index} />
            })}
          </div>
          <div className='mb-8'>
            <h3
              className={`${
                darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
              } pb-4 flex justify-center font-bold text-sm uppercase`}
            >
              Выигрышные попытки
            </h3>
            <ul
              className={`border-y ${
                darkMode ? 'border-wordleTone4Dark' : 'border-wordleTone4'
              } py-4`}
            >
              {bar.map((row, index) => {
                return (
                  <li className='w-full mb-1 flex justify-center items-center' key={index}>
                    <p
                      className={`${
                        darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
                      } w-5 mr-2 flex font-bold`}
                    >
                      #{row.name}
                    </p>
                    <div
                      className={`relative w-9/12 h-3 rounded-xl ${
                        darkMode ? 'bg-wordleTone4Dark/40' : 'bg-wordleTone4/40'
                      }`}
                    >
                      <span
                        className={`relative h-full rounded-xl block ${
                          darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                        } overflow-hidden`}
                        style={{ width: `${row.percent}` }}
                      ></span>
                    </div>
                    <p
                      className={`w-6 h-6 ml-auto flex justify-center items-center font-extrabold uppercase box-border overflow-hidden ${
                        darkMode
                          ? 'bg-wordleGreyDark border-0 text-wordleWhite'
                          : 'bg-wordleWhite border border-wordleTone4 text-wordleQuartz'
                      }`}
                    >
                      {row.count}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* <Button
            text={'выйти'}
            color={'red'}
            onClick={() => dispatch(logout())}
            style={{ margin: '1rem auto' }}
            // disabled={disabled}
          /> */}
        </>
      ) : (
        <div className='my-6'>
          <p
            className={`${
              darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
            } text-center text-base font-bold`}
          >
            Для просмотра и учета статистики необходимо
            <button
              onClick={() => dispatch(openModal({ open: true, window: 'Login' }))}
              className=' text-wordleRed my-2 mx-auto rounded block text-center font-bold uppercase select-none transition duration-300'
            >
              войти
            </button>{' '}
            в учетную запись
          </p>
        </div>
      )}
      {/* <div className='my-6 grid grid-cols-3 gap-1'>
        {[win, surrender, loss].map((item, index) => {
          return <CountStats count={item} index={index} key={index} />
        })}
      </div>
      <div className='mb-8'>
        <h3
          className={`${
            darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
          } pb-4 flex justify-center font-bold text-sm uppercase`}
        >
          Выигрышные попытки
        </h3>
        <ul
          className={`border-y ${darkMode ? 'border-wordleTone4Dark' : 'border-wordleTone4'} py-4`}
        >
          {bar.map((row, index) => {
            return (
              <li className='w-full mb-1 flex justify-center items-center' key={index}>
                <p
                  className={`${
                    darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
                  } w-5 mr-2 flex font-bold`}
                >
                  #{row.name}
                </p>
                <div
                  className={`relative w-9/12 h-3 rounded-xl ${
                    darkMode ? 'bg-wordleTone4Dark/40' : 'bg-wordleTone4/40'
                  }`}
                >
                  <span
                    className={`relative h-full rounded-xl block ${
                      darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                    } overflow-hidden`}
                    style={{ width: `${row.percent}` }}
                  ></span>
                </div>
                <p
                  className={`w-6 h-6 ml-auto flex justify-center items-center font-extrabold uppercase box-border overflow-hidden ${
                    darkMode
                      ? 'bg-wordleGreyDark border-0 text-wordleWhite'
                      : 'bg-wordleWhite border border-wordleTone4 text-wordleQuartz'
                  }`}
                >
                  {row.count}
                </p>
              </li>
            )
          })}
        </ul>
      </div> */}
      {/* <Button
        text={'выйти'}
        color={'red'}
        onClick={() => dispatch(logout())}
        style={{ margin: '1rem auto' }}
        // disabled={disabled}
      /> */}
    </section>
  )
}

export default Statistics
