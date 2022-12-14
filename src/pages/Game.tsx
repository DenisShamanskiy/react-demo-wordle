import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

type KeyboardProps = {
  checkGuess: () => void
}

const Game = ({ checkGuess }: KeyboardProps) => {
  return (
    <main className='w-full max-w-5xl h-full grid grid-cols-12 gap-1 md:gap-2 mx-auto'>
      <section className='w-full h-full flex flex-col justify-between col-start-1 col-end-13'>
        <Board />
        <Keyboard checkGuess={checkGuess} />
      </section>
    </main>
  )
}

export default Game
