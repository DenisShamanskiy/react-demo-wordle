import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

const Game = () => {
  return (
    <section className='col-start-1 col-end-13 flex h-full w-full flex-col justify-between'>
      <Board />
      <Keyboard />
    </section>
  )
}

export default Game
