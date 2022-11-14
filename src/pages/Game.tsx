import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

type KeyboardProps = {
  checkGuess: () => void
}

const Game = ({ checkGuess }: KeyboardProps) => {
  return (
    <section className='h-full flex flex-col justify-between'>
      <Board />
      <Keyboard checkGuess={checkGuess} />
    </section>
  )
}

export default Game
