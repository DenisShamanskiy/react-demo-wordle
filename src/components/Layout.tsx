import '../styles/header-animation.css'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../hook'
import { Main } from '../components/common'
import GameHeader from '../components/GameHeader'
import Loader from '../components/Loaders/Loader'
import GameControls from '../components/GameControls'

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
