import { useAppSelector } from 'utils/hook'

type MainProps = {
  children?: JSX.Element
  style?: string | string[]
}

const Main = ({ children, style }: MainProps) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  return (
    <main
      className={`${
        darkMode ? 'border-wordleTone4Dark' : 'border-wordleTone4'
      } m-auto p-5 sm:p-7 border rounded select-none ${style}`}
    >
      {children}
    </main>
  )
}

export default Main
