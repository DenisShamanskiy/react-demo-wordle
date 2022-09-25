// import { globalSvgSelector } from 'components/svg/tyty'

interface IButtonIconProps {
  onClick: () => void
  disabled?: boolean
  style: React.CSSProperties
}

const ButtonIcon2 = ({ onClick, disabled, style }: IButtonIconProps) => {
  console.log(style)
  // console.log(globalSvgSelector('reload'));

  return (
    <button
      type='button'
      className='w-7 h-7 md:w-8 md:h-8 rounded bg-no-repeat bg-center bg-cover hover:scale-110 transition duration-300 ease-in-out disabled:opacity-40 disabled:pointer-events-none'
      onClick={onClick}
      style={style}
      // style={{ backgroundImage: `url(${globalSvgSelector('reload')})` }}
      disabled={disabled}
    ></button>
  )
}

export default ButtonIcon2
