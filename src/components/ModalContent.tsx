import { useAppDispatch, useAppSelector } from 'hook'
import { WORDS } from '../words'
import InputSwitch from './micro-components/InputSwitch'
import ButtonClose from './micro-components/Button/ButtonClose'
import ButtonTrue from './micro-components/Button/ButtonTrue'
import ButtonFalse from './micro-components/Button/ButtonFalse'
import ButtonNewGame from './micro-components/Button/ButtonNewGame'
import ButtonLeaveGame from './micro-components/Button/ButtonLeaveGame'
import ButtonResetStats from './micro-components/Button/ButtonResetStats'
import ButtonOk from './micro-components/Button/ButtonOk'
import ExampleWord from './micro-components/ExampleWord'
import CountStats from './micro-components/CountStats'
import { numWord } from 'utils/formate'
import { exampleRules } from 'utils/constants'
import { setHardMode } from 'store/hardModeSlice'
import { toggleTheme } from 'store/themeSlice'
import ButtonIcon from './micro-components/Button/ButtonIcon'
import { activeModal } from 'store/modalSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'

export const Content = {
  Confirmation: function Confirmation() {
    const { title, description } = useAppSelector((state) => state.modal.modalSlice)
    const dark = useAppSelector((state) => state.theme.darkThemeSlice)

    return (
      <section className='relative w-[340px]'>
        <h2
          className={`${
            dark ? 'text-wordleWhite' : 'text-wordleQuartz'
          } py-4 text-base font-extrabold text-center uppercase`}
        >
          {title}
        </h2>
        {description && (
          <ul className={`mb-4 ${dark ? 'text-wordleYellowDark' : 'text-wordleYellow'}`}>
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
          <ButtonFalse />
          <ButtonTrue />
        </div>
      </section>
    )
  },

  GameLost: function GameLost() {
    const rightGuess = useAppSelector((state) => state.rightGuess.rightGuessSlice.currentWord)
    const dark = useAppSelector((state) => state.theme.darkThemeSlice)

    return (
      <section className='w-80'>
        <div className='flex justify-center'>
          <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
            {globalSvgSelector('skull')}
          </span>
          <h2 className='py-4 ml-3 mr-3 text-center text-xl font-extrabold text-wordleRed uppercase'>
            Ты проиграл
          </h2>
          <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
            {globalSvgSelector('skull')}
          </span>
        </div>
        <p
          className={`${
            dark ? 'text-wordleWhite' : 'text-wordleQuartz'
          } py-4 text-base font-extrabold text-center uppercase`}
        >
          Загаданное слово
        </p>
        <ul className='py-4 flex justify-center items-center'>
          {[...rightGuess].map((letter, index) => {
            return (
              <li
                className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center font-['Bitter'] text-2xl font-extrabold text-wordleWhite uppercase ${
                  dark ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                }`}
                key={index}
              >
                {letter}
              </li>
            )
          })}
        </ul>
        <ButtonOk />
      </section>
    )
  },

  LeaveGame: function LeaveGame() {
    const { previousWord } = useAppSelector((state) => state.rightGuess.rightGuessSlice)
    const dark = useAppSelector((state) => state.theme.darkThemeSlice)

    return (
      <section className='w-80 select-none'>
        <h2
          className={`${
            dark ? 'text-wordleWhite' : 'text-wordleQuartz'
          } py-4 text-base font-extrabold text-center uppercase`}
        >
          Загаданное слово
        </h2>
        <ul className='py-4 flex justify-center items-center'>
          {[...previousWord].map((letter, index) => {
            return (
              <li
                className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center font-['Bitter'] text-2xl font-extrabold text-wordleWhite uppercase ${
                  dark ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                }`}
                key={index}
              >
                {letter}
              </li>
            )
          })}
        </ul>
        <ButtonOk />
      </section>
    )
  },

  Rules: function Rules() {
    const dispatch = useAppDispatch()
    const { window } = useAppSelector((state) => state.modal.modalSlice)
    const dark = useAppSelector((state) => state.theme.darkThemeSlice)

    return (
      <section
        className={`${
          dark ? 'bg-wordleBlack' : 'bg-wordleWhite'
        } relative w-full w-max-96 select-none`}
      >
        <h2
          className={`${
            dark ? 'text-wordleWhite' : 'text-wordleQuartz'
          } text-center text-base font-bold uppercase`}
        >
          Как играть
        </h2>
        {/* <ButtonClose /> */}
        <ButtonIcon
          icon={'close'}
          onClick={() => dispatch(activeModal({ open: false, window: window }))}
        />
        <p className={`${dark ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
          Угадай <strong>СЛОВО</strong> за 6 попыток
        </p>
        <p className={`${dark ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
          Каждое предположение должно быть допустимым словом из 5 букв
        </p>
        <p className={`${dark ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
          После каждой попытки цвет плитки будет меняться, чтобы показать, насколько ваше
          предположение было близко к слову
        </p>
        <div
          className={`border-y ${dark ? 'border-wordleBorderDark' : 'border-wordleBorderLight'}`}
        >
          <p
            className={`${
              dark ? 'text-wordleWhite' : 'text-wordleQuartz'
            } mt-4 text-sm font-bold uppercase`}
          >
            Примеры
          </p>
          {exampleRules.map((row, indexRow) => {
            return (
              <div className='my-6' key={indexRow}>
                {row.word.map((letter, indexWord) => {
                  return (
                    <ExampleWord index={indexWord} letter={letter} row={indexRow} key={indexWord} />
                  )
                })}
                <p className={`${dark ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
                  {row.discreption[0]} <strong>{row.discreption[1]}</strong> {row.discreption[2]}
                </p>
              </div>
            )
          })}
        </div>
        <p
          className={`${dark ? 'text-wordleWhite' : 'text-wordleQuartz'} mt-4 text-center text-xs`}
        >
          В игре <strong>{WORDS.length}</strong> {numWord(WORDS.length)}
        </p>
      </section>
    )
  },

  Statistics: function Statistics() {
    const { win, loss, surrender, bar } = useAppSelector((state) => state.stats.stats)
    const dark = useAppSelector((state) => state.theme.darkThemeSlice)

    return (
      <section className='relative w-[340px] select-none'>
        <h2
          className={`${
            dark ? 'text-wordleWhite' : 'text-wordleQuartz'
          } text-center text-base font-bold uppercase`}
        >
          Статистика
        </h2>
        <ButtonClose />
        <div className='my-6 grid grid-cols-3 gap-1'>
          {[win, loss, surrender].map((item, index) => {
            return <CountStats count={item} index={index} key={index} />
          })}
        </div>
        <div className='mb-8'>
          <h3
            className={`${
              dark ? 'text-wordleWhite' : 'text-wordleQuartz'
            } pb-4 flex justify-center font-bold text-sm uppercase`}
          >
            Выигрышные попытки
          </h3>
          <ul className={`border-y ${dark ? 'border-wordleTone4Dark' : 'border-wordleTone4'} py-4`}>
            {bar.map((row, index) => {
              return (
                <li className='w-full mb-1 flex justify-center items-center' key={index}>
                  <p
                    className={`${
                      dark ? 'text-wordleWhite' : 'text-wordleQuartz'
                    } w-5 mr-2 flex font-bold`}
                  >
                    #{row.name}
                  </p>
                  <div
                    className={`relative w-9/12 h-3 rounded-xl ${
                      dark ? 'bg-wordleTone4Dark/40' : 'bg-wordleTone4/40'
                    }`}
                  >
                    <span
                      className={`relative h-full rounded-xl block ${
                        dark ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                      } overflow-hidden`}
                      style={{ width: `${row.percent}` }}
                    ></span>
                  </div>
                  <p
                    className={`w-6 h-6 ml-auto flex justify-center items-center font-extrabold uppercase box-border overflow-hidden ${
                      dark
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
        <ButtonResetStats />
      </section>
    )
  },

  Settings: function Settings() {
    const dispatch = useAppDispatch()
    // const { window, title, description } = useAppSelector(
    //   (state) => state.modal.modalSlice
    // );
    const { window } = useAppSelector((state) => state.modal.modalSlice)
    const { active, letters } = useAppSelector((state) => state.hardMode.hardModeSlice)
    const dark = useAppSelector((state) => state.theme.darkThemeSlice)
    // const clearLocalStorage = () => {
    //   dispatch(
    //     activeModal({
    //       open: false,
    //       window: window,
    //       title: title,
    //       description: description,
    //     })
    //   );
    //   setTimeout(() => {
    //     dispatch(
    //       activeModal({
    //         open: true,
    //         window: "Confirmation",
    //         title: "Очистить LocalStorage?",
    //         description: [
    //           "LocalStorage будет очищен",
    //           "Статистика будет удалена",
    //           "Для начала новой игры необходимо обновить страницу",
    //         ],
    //       })
    //     );
    //   }, 700);
    // };

    return (
      <div className='relative w-[340px] select-none'>
        <h2
          className={`${
            dark ? 'text-wordleWhite' : 'text-wordleQuartz'
          } text-center text-base font-bold uppercase`}
        >
          Настройки
        </h2>
        <ButtonIcon
          icon={'close'}
          onClick={() => dispatch(activeModal({ open: false, window: window }))}
        />
        <div className='my-6'>
          <div className='relative mb-1 p-2 flex justify-between items-center'>
            <div className={`${dark ? 'text-wordleWhite' : 'text-wordleQuartz'} flex flex-col`}>
              <p className='text-lg font-bold'>Hard Mode</p>
              <p className='text-xs'>Необходимо использовать все подсказки</p>
            </div>
            <InputSwitch
              onChange={() => dispatch(setHardMode({ active: !active, letters: letters }))}
              isChecked={active}
            />
          </div>
          <div className='relative p-2 h-[60px] flex justify-between items-center'>
            <p className={`${dark ? 'text-wordleWhite' : 'text-wordleQuartz'} text-lg font-bold`}>
              Dark Theme
            </p>
            <InputSwitch onChange={() => dispatch(toggleTheme())} isChecked={dark} />
            {/* <div className="absolute bg-neutral-300 top-0 right-0 left-0 bottom-0 opacity-80 flex justify-center items-center rounded">
              <p className="after:text-slate-900">В разработке</p>
            </div> */}
          </div>
        </div>
        {/* <p className="mt-8 mb-4 text-center text-base font-bold uppercase">
          Дополнительно
        </p>
        <div className="h-[60px] p-2 border-b border-wordleBorderLight flex justify-between items-center">
          <p className="text-lg font-bold">Очистить LocalStorage</p>
          <button
            type="button"
            className="w-7 h-7 md:w-8 md:h-8 rounded flex justify-center items-center  bg-no-repeat bg-center bg-contain hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => clearLocalStorage()}
            style={{ backgroundImage: `url(${trash})` }}
          ></button>
        </div> */}
        <p className='text-xs text-[#787c7e]'>© 2022 Денис Шаманский</p>
      </div>
    )
  },

  Restart: function Restart() {
    return (
      <section className='relative w-[340px]'>
        <ButtonClose />
        <div className='w-48 py-10 mx-auto p-2 rounded'>
          <ButtonNewGame />
          <ButtonLeaveGame />
        </div>
      </section>
    )
  },
}
