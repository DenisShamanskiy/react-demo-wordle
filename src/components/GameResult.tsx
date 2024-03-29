import { closeModal } from '../redux/features/modalSlice'
import win from '../assets/gif/win.gif'
import leave from '../assets/gif/leave.gif'
import fail from '../assets/gif/fail.gif'
import ButtonIcon from '../components/ButtonIcon'
import { useAppDispatch, useAppSelector, useEncryption } from '../hook'

const GameResult = () => {
  const dispatch = useAppDispatch()
  const { decryptValue } = useEncryption(import.meta.env['VITE_CRYPTO_KEY'])
  const { result } = useAppSelector((state) => state.modal.props)
  const currentWord = useAppSelector((state) => state.game.currentWord)

  const getGifResult = (result: string) => {
    switch (result) {
      case 'win':
        return {
          img: win,
          imgAlt: 'giphy winner',
        }
      case 'fail':
        return {
          img: fail,
          imgAlt: 'giphy fail',
        }
      default:
        return {
          img: leave,
          imgAlt: 'giphy leave',
        }
    }
  }

  return (
    <div className='relative w-72 select-none md:w-80'>
      <ButtonIcon
        icon='close'
        position='close'
        size='s'
        onClick={() => dispatch(closeModal())}
      />
      <img
        src={getGifResult(result!).img}
        alt={getGifResult(result!).imgAlt}
        className='mx-auto h-auto min-h-[160px] w-40 md:min-h-[176px] md:w-44'
      ></img>

      {result !== 'win' && (
        <>
          <p className='pt-4 pb-2 text-center text-base font-extrabold uppercase text-w-quartz dark:text-w-white-dark md:pt-8 md:pb-4 md:text-lg'>
            Загаданное слово
          </p>
          <ul className='mx-auto grid w-fit grid-cols-5 gap-x-1 py-2 md:py-4'>
            {[...decryptValue(currentWord)].map((letter, index) => {
              return (
                <li
                  className='flex h-9 w-9 items-center justify-center rounded bg-w-green font-["Bitter"] text-2xl font-extrabold uppercase text-w-white dark:bg-w-green-dark md:h-11 md:w-11 md:text-3xl'
                  key={index}
                >
                  {letter}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}

export default GameResult
