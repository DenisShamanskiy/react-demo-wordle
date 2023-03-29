import ExampleWord from 'components/ExampleWord'
import { Heading, Paragraph, Section } from 'components/common'
import { useAppSelector } from 'utils/hook'
import { numWord } from 'utils/numWord'

const Rules = () => {
  const words = useAppSelector((state) => state.game.words)

  return (
    <Section customClass='w-11/12 max-w-xl md:w-full md:max-w-2xl'>
      <Heading>Как играть</Heading>
      <div className='mt-8 flex flex-col gap-2 pb-2 sm:gap-4 sm:pb-4 md:mt-10'>
        <Paragraph fontSize='sm'>
          Угадай <strong>СЛОВО</strong> за 6 попыток
        </Paragraph>
        <Paragraph fontSize='sm'>
          Каждое предположение должно быть допустимым словом из 5 букв
        </Paragraph>
        <Paragraph fontSize='sm'>
          После каждой попытки цвет плитки будет меняться, чтобы показать,
          насколько ваше предположение было близко к слову
        </Paragraph>
      </div>
      <div className='mb-4 w-full border-y border-w-grey-tone-2 py-2 dark:border-w-grey-tone-3 sm:mb-6 sm:py-4'>
        <h3 className='mt-2 text-sm font-bold uppercase text-w-quartz dark:text-w-white-dark sm:mt-4 sm:text-lg'>
          Примеры
        </h3>
        <ExampleWord word='кровь' letter='к' color='green' />
        <Paragraph fontSize='sm'>
          Буква <strong>К</strong> есть в загаданном слове и находится на
          правильном месте
        </Paragraph>
        <ExampleWord word='гниль' letter='н' color='yellow' />
        <Paragraph fontSize='sm'>
          Буква <strong>Н</strong> есть в загаданном слове, но стоит в другом
          месте
        </Paragraph>
        <ExampleWord word='череп' letter='р' color='grey' />
        <Paragraph fontSize='sm'>
          Буквы <strong>Р</strong> нет в загаданном слове
        </Paragraph>
      </div>
      <Paragraph fontSize='xs'>
        В игре <strong>{words.length}</strong> {numWord(words.length)}
      </Paragraph>
    </Section>
  )
}

export default Rules
