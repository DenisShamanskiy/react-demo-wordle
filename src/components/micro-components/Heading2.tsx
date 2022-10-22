import { useAppSelector } from 'utils/hook'

type Heading2Props = {
  children: string
}

const Heading2 = ({ children }: Heading2Props) => {
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    <h2
      className={`${
        darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
      } text-center text-base sm:text-lg font-bold uppercase`}
    >
      {children}
    </h2>
  )
}

export default Heading2
