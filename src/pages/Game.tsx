import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

type KeyboardProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Game = ({ handleClick }: KeyboardProps) => {
  return (
    <section className='h-full flex flex-col justify-between'>
      <Board />
      <Keyboard handleClick={handleClick} />
    </section>
  )
}

export default Game
