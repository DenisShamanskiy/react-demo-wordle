import Example from 'components/micro-components/Example'
import Heading2 from 'components/micro-components/Heading'
import Paragraph from 'components/micro-components/Paragraph'
import { exampleRules } from 'utils/constants'
import { numWord } from 'utils/formate'
import { useAppSelector } from 'utils/hook'

const Rules = () => {
  const words = useAppSelector((state) => state.game.word.words)

  return (
    <section className='mx-auto w-11/12 max-w-xl select-none md:w-full md:max-w-2xl'>
      <Heading2>Как играть</Heading2>
      <div className='mt-8 md:mt-10'>
        <Paragraph>
          <>
            Угадай <strong>СЛОВО</strong> за 6 попыток
          </>
        </Paragraph>
        <Paragraph>
          Каждое предположение должно быть допустимым словом из 5 букв
        </Paragraph>
        <Paragraph>
          После каждой попытки цвет плитки будет меняться, чтобы показать,
          насколько ваше предположение было близко к слову
        </Paragraph>
      </div>

      <div className='border-y border-w-grey-tone-2 dark:border-w-grey-tone-3'>
        <h3 className='mt-2 text-sm font-bold uppercase text-w-quartz dark:text-w-white-dark md:mt-4 md:text-lg'>
          Примеры
        </h3>

        {exampleRules.map((row, indexRow) => {
          return (
            <div key={indexRow}>
              <ul className='my-2 flex gap-x-1 md:my-4'>
                {row.word.map((letter, indexWord) => {
                  return (
                    <Example
                      index={indexWord}
                      letter={letter}
                      row={indexRow}
                      key={indexWord}
                    />
                  )
                })}
              </ul>
              <Paragraph>
                <>
                  {row.discreption[0]} <strong>{row.discreption[1]}</strong>{' '}
                  {row.discreption[2]}
                </>
              </Paragraph>
            </div>
          )
        })}
      </div>
      <p className='mt-4 text-center text-xs text-w-quartz dark:text-w-white-dark md:mt-6 md:text-sm'>
        В игре <strong>{words.length}</strong> {numWord(words.length)}
      </p>
    </section>
  )
}

export default Rules
