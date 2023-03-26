import { Section } from 'components/common'
import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

const Game = () => {
  return (
    <Section width='full' height='full'>
      <Board />
      <Keyboard />
    </Section>
  )
}

export default Game
