import '../styles/header-animation.css'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from 'hook'
import { Main } from './common'
import GameHeader from './GameHeader'
import Loader from './Loaders/Loader'
import GameControls from './GameControls'

interface ILayoutProps {
  isLoading: boolean
}

const Layout: FC<ILayoutProps> = ({ isLoading }) => {
  const visible = useAppSelector((state) => state.newGame.visible)

  return (
    <>
      <GameHeader />
      <Main>
        {isLoading ? <Loader /> : <Outlet />}
        {visible && <GameControls />}
      </Main>
    </>
  )
}

export default Layout
