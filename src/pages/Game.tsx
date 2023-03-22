import { Section } from 'components/common'
import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

const Game = () => {
  return (
    <Section width='2xl' height='full'>
      <Board />
      <Keyboard />
    </Section>
  )
}

export default Game
