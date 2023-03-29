import useCurrentHeight from 'hook/useCurrentHeight'
import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import { UseFormReset } from 'react-hook-form/dist/types/form'
import { FixedSizeList } from 'react-window'
import Word from './Word'
import useCurrentWidth from 'hook/useCurrentWidth'

interface IWordListProps {
  words: string[]
  reset: UseFormReset<IFormValues>
}

const WordList: FC<IWordListProps> = ({ words, reset }) => {
  const height = useCurrentHeight()
  const width = useCurrentWidth()

  return (
    <FixedSizeList
      className='scrollbar-hide box-border flex flex-col items-center overflow-y-auto rounded-md'
      itemData={words}
      innerElementType='ul'
      itemCount={words.length}
      itemSize={41}
      height={height * 0.7}
      width={width < 640 ? 288 : 320}
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
