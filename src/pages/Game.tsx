import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

type KeyboardProps = {
  checkGuess: () => void
}

const Game = ({ checkGuess }: KeyboardProps) => {
  return (
    <section className='col-start-1 col-end-13 flex h-full w-full flex-col justify-between'>
      <Board />
      <Keyboard checkGuess={checkGuess} />
    </section>
  )
}

export default Game
