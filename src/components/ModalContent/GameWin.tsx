import Button from 'components/micro-components/Button/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import davidAlaba from '../../assets/gif/david-alaba.gif'

const GameWin = () => {
  const dispatch = useAppDispatch()
  const { window } = useAppSelector((state) => state.modal)

  return (
    <section className='relative w-80 select-none'>
      <div className='flex justify-center'>
        <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
          {globalSvgSelector('trophy')}
        </span>
        <h2 className='py-4 ml-3 mr-3 text-center text-xl font-extrabold text-wordleGreen uppercase'>
          Победа
        </h2>
        <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
          {globalSvgSelector('trophy')}
        </span>
      </div>
      <img src={davidAlaba} alt='David Alaba' className='w-40 h-[285px] mx-auto'></img>
      <Button
        text={'ок'}
        color={'blue'}
        onClick={() => dispatch(openModal({ open: false, window: window }))}
        style={{ margin: '32px auto 16px', zIndex: '10', position: 'relative' }}
      />
    </section>
  )
}

export default GameWin
