import { useAppSelector } from 'utils/hook'

type SectionProps = {
  children?: JSX.Element
  style?: string | string[]
}

const Section = ({ children, style }: SectionProps) => {
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    <section
      className={`${
        darkMode ? 'border-wordleTone4Dark' : 'border-wordleTone4'
      } m-auto p-5 sm:p-7 border rounded select-none ${style}`}
    >
      {children}
    </section>
  )
}

export default Section
