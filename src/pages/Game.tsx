import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

type KeyboardProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Game = ({ handleClick }: KeyboardProps) => {
  return (
    <div className='h-full flex flex-col justify-between'>
      <Board />
      <Keyboard handleClick={handleClick} />
    </div>
  )
}

export default Game
