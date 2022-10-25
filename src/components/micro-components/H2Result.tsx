// import { useAppSelector } from 'utils/hook'

import { globalSvgSelector } from 'utils/globalSvgSelector'

type Heading2Props = {
  children: string
  text: string
}

const Heading2 = ({ text }: Heading2Props) => {
  // const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    // <h2
    //   className={`${
    //     darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
    //   } text-center text-base sm:text-lg font-bold uppercase`}
    // >
    //   {children}
    // </h2>
    <div className='flex justify-center'>
      <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
        {globalSvgSelector('trophy')}
      </span>
      <h2 className='py-4 ml-3 mr-3 text-center text-xl font-extrabold text-wordleGreen uppercase'>
        {text}
      </h2>
      <span className='w-7 h-7 my-4 flex justify-center bg-no-repeat bg-center bg-contain text-center'>
        {globalSvgSelector('trophy')}
      </span>
    </div>
  )
}

export default Heading2
