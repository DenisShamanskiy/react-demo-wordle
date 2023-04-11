import { FC, HTMLAttributes, ReactNode, useMemo } from 'react'

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  textTransform?: 'normal-case'
}

const getTextTransformClasses = (textTransform?: string) => {
  switch (textTransform) {
    case 'normal-case':
      return 'normal-case'
    default:
      return 'uppercase'
  }
}

const Heading: FC<IHeadingProps> = ({ children, textTransform, ...props }) => {
  const computedClasses = useMemo(() => {
    const textTransformClass = getTextTransformClasses(textTransform)
    return [textTransformClass].filter((item) => !!item).join(' ')
  }, [textTransform])

  return (
    <h2
      className={`text-center text-base font-bold text-w-quartz transition-all dark:text-w-white-dark sm:text-xl ${computedClasses}`}
      {...props}
    >
      {children}
    </h2>
  )
}

export default Heading
