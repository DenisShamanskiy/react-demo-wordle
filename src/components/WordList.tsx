import useCurrentHeight from 'hook/useCurrentHeight'
import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import { UseFormReset } from 'react-hook-form/dist/types/form'
import { FixedSizeList } from 'react-window'
import Word from './Word'

interface IWordListProps {
  words: string[]
  reset: UseFormReset<IFormValues>
}

const WordList: FC<IWordListProps> = ({ words, reset }) => {
  const height = useCurrentHeight()

  return (
    <FixedSizeList
      className='scrollbar-hide mt-6 box-border flex flex-col items-center overflow-y-auto rounded-md md:mt-8'
      itemData={words}
      innerElementType='ul'
      itemCount={words.length}
      itemSize={41}
      height={height * 0.7}
      width={320}
    >
      {({ data, style, index }) => {
        return (
          <Word style={style} index={index} word={data[index]!} reset={reset} />
        )
      }}
    </FixedSizeList>
  )
}

export default WordList
