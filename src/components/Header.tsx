import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import ButtonIcon from './micro-components/Button/ButtonIcon'

const Header = () => {
  const dispatch = useAppDispatch()

  const { board, gameStatus } = useAppSelector((state) => state.persist.game)
  const {
    darkMode: darkTheme,
    hardMode: { active },
  } = useAppSelector((state) => state.persist.settings)

  return (
    <header
      className={`${
        darkTheme
          ? 'border-wordleTone4Dark text-wordleWhite bg-wordleBlack'
          : 'border-wordleTone4 text-wordleQuartz bg-wordleWhite'
      } w-full h-10 sm:h-[65px] px-4 md:px-5 border-b flex justify-between items-center box-border select-none relative z-50 overflow-hidden`}
    >
      <ButtonIcon
        icon={'rules'}
        onClick={() => dispatch(openModal({ open: true, window: 'Rules' }))}
      />

      <div className='relative w-full h-full ml-4 md:ml-[98px] mr-2 flex justify-center items-center'>
        <h1
          className={
            "grow-[2] text-left md:text-center text-[28px] md:text-[32px] lg:text-[36px] font-['Bitter'] font-black leading-[64px]"
          }
        >
          {`${gameStatus === 'WIN' ? 'Winner' : gameStatus === 'DEFEAT' ? 'Loser' : 'Wordle'}`}
        </h1>
        {/* <InputSwitch
          onChange={() => dispatch(toggleTheme())}
          isChecked={darkTheme}
        /> */}
        {active && (
          <p className='absolute right-0 h-7 md:h-8 px-2 align-middle text-[12px] md:text-[14px] font-extrabold text-red-500 uppercase leading-[26px] md:leading-[30px]'>
            Hard Mode
          </p>
        )}
      </div>
      <div className='flex justify-end items-center'>
        <ButtonIcon
          icon={'restart'}
          onClick={() => dispatch(openModal({ open: true, window: 'Restart' }))}
          disabled={board[0]?.every((item) => item.color === '')}
          style={{ marginRight: '8px' }}
        />
        <ButtonIcon
          icon={'statistics'}
          onClick={() => dispatch(openModal({ open: true, window: 'Statistics' }))}
          style={{ marginRight: '8px' }}
        />
        <ButtonIcon
          icon={'settings'}
          onClick={() => dispatch(openModal({ open: true, window: 'Settings' }))}
        />
      </div>
    </header>
  )
}

export default Header
