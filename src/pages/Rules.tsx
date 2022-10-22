import ExampleWord from 'components/micro-components/ExampleWord'
import Heading2 from 'components/micro-components/Heading2'
import Paragraph from 'components/micro-components/Paragraph'
import Section from 'components/micro-components/Section'
import { exampleRules, WORDS } from 'utils/constants'
import { numWord } from 'utils/formate'
import { useAppSelector } from 'utils/hook'

const Rules = () => {
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    <Section style={'w-11/12 max-w-3xl'}>
      <>
        <Heading2>Как играть</Heading2>
        <Paragraph>
          <>
            Угадай <strong>СЛОВО</strong> за 6 попыток
          </>
        </Paragraph>
        <Paragraph>Каждое предположение должно быть допустимым словом из 5 букв</Paragraph>
        <Paragraph>
          После каждой попытки цвет плитки будет меняться, чтобы показать, насколько ваше
          предположение было близко к слову
        </Paragraph>

        <div
          className={`border-y max-w- ${
            darkMode ? 'border-wordleBorderDark' : 'border-wordleBorderLight'
          }`}
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
              <div className='my-4' key={indexRow}>
                {row.word.map((letter, indexWord) => {
                  return (
                    <ExampleWord index={indexWord} letter={letter} row={indexRow} key={indexWord} />
                  )
                })}
                <Paragraph>
                  <>
                    {row.discreption[0]} <strong>{row.discreption[1]}</strong> {row.discreption[2]}
                  </>
                </Paragraph>
              </div>
            )
          })}
        </div>
        <p
          className={`${
            darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
          } mt-5 sm:mt-7 text-center text-xs`}
        >
          В игре <strong>{WORDS.length}</strong> {numWord(WORDS.length)}
        </p>
      </>
    </Section>
  )
}

export default Rules
