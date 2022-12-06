import Example from 'components/micro-components/Example'
import Heading2 from 'components/micro-components/Heading2'
import Paragraph from 'components/micro-components/Paragraph'
import { exampleRules, WORDS } from 'utils/constants'
import { numWord } from 'utils/formate'

const Rules = () => {
  return (
    <main className='my-auto'>
      <section className='w-11/12 max-w-2xl mx-auto select-none'>
        <Heading2>Как играть</Heading2>
        <div className='mt-7 md:mt-9'>
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
        </div>

        <div className='border-y border-w-grey-tone-2 dark:border-w-grey-tone-3'>
          <h3 className='mt-4 text-sm md:text-lg font-bold text-w-quartz dark:text-w-white-dark uppercase'>
            Примеры
          </h3>

          {exampleRules.map((row, indexRow) => {
            return (
              <div key={indexRow}>
                <ul className='my-4 flex gap-x-1'>
                  {row.word.map((letter, indexWord) => {
                    return (
                      <Example index={indexWord} letter={letter} row={indexRow} key={indexWord} />
                    )
                  })}
                </ul>
                <Paragraph>
                  <>
                    {row.discreption[0]} <strong>{row.discreption[1]}</strong> {row.discreption[2]}
                  </>
                </Paragraph>
              </div>
            )
          })}
        </div>
        <p className='mt-5 md:mt-7 text-center text-xs md:text-sm text-w-quartz dark:text-w-white-dark'>
          В игре <strong>{WORDS.length}</strong> {numWord(WORDS.length)}
        </p>
      </section>
    </main>
  )
}

export default Rules
