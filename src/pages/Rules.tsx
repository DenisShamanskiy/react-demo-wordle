import { Heading, Paragraph, Section } from 'components/common'
import Example from 'components/micro-components/Example'
import { exampleRules } from 'utils/constants'
import { numWord } from 'utils/helpers'
import { useAppSelector } from 'utils/hook'

const Rules = () => {
  const words = useAppSelector((state) => state.game.words)

  return (
    <Section customClass='w-11/12 max-w-xl md:w-full md:max-w-2xl'>
      <Heading>Как играть</Heading>
      <div className='mt-8 md:mt-10'>
        <Paragraph>
          Угадай <strong>СЛОВО</strong> за 6 попыток
        </Paragraph>
        <Paragraph>
          Каждое предположение должно быть допустимым словом из 5 букв
        </Paragraph>
        <Paragraph>
          После каждой попытки цвет плитки будет меняться, чтобы показать,
          насколько ваше предположение было близко к слову
        </Paragraph>
      </div>

      <div className='w-full border-y border-w-grey-tone-2 dark:border-w-grey-tone-3'>
        <h3 className='mt-2 text-sm font-bold uppercase text-w-quartz dark:text-w-white-dark sm:mt-4 sm:text-lg'>
          Примеры
        </h3>

        {exampleRules.map((row, indexRow) => {
          return (
            <div key={indexRow}>
              <ul className='my-2 flex gap-x-1 sm:my-4'>
                {row.word.map((letter, indexLetter) => {
                  return (
                    <Example
                      indexLetter={indexLetter}
                      letter={letter}
                      indexRow={indexRow}
                      key={indexLetter}
                    />
                  )
                })}
              </ul>
              <Paragraph>
                {row.discreption[0]} <strong>{row.discreption[1]}</strong>{' '}
                {row.discreption[2]}
              </Paragraph>
            </div>
          )
        })}
      </div>
      <p className='mt-4 text-center text-xs text-w-quartz dark:text-w-white-dark sm:mt-6 sm:text-sm'>
        В игре <strong>{words.length}</strong> {numWord(words.length)}
      </p>
    </Section>
  )
}

export default Rules
