import ButtonIcon from 'components/micro-components/Button/ButtonIcon'
import ExampleWord from 'components/micro-components/ExampleWord'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import { exampleRules, WORDS } from 'utils/constants'
import { numWord } from 'utils/formate'

const Rules = () => {
  const dispatch = useAppDispatch()
  const { window } = useAppSelector((state) => state.modal)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    <section
      className={`${
        darkMode ? 'bg-wordleBlack' : 'bg-wordleWhite'
      } relative w-full w-max-96 select-none`}
    >
      <h2
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } text-center text-base font-bold uppercase`}
      >
        Как играть
      </h2>
      <ButtonIcon
        icon={'close'}
        onClick={() => dispatch(openModal({ open: false, window: window }))}
      />
      <p className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
        Угадай <strong>СЛОВО</strong> за 6 попыток
      </p>
      <p className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
        Каждое предположение должно быть допустимым словом из 5 букв
      </p>
      <p className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
        После каждой попытки цвет плитки будет меняться, чтобы показать, насколько ваше
        предположение было близко к слову
      </p>
      <div
        className={`border-y ${darkMode ? 'border-wordleBorderDark' : 'border-wordleBorderLight'}`}
      >
        <p
          className={`${
            darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
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
              <p className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm`}>
                {row.discreption[0]} <strong>{row.discreption[1]}</strong> {row.discreption[2]}
              </p>
            </div>
          )
        })}
      </div>
      <p
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } mt-4 text-center text-xs`}
      >
        В игре <strong>{WORDS.length}</strong> {numWord(WORDS.length)}
      </p>
    </section>
  )
}

export default Rules
