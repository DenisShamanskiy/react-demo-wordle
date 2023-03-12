import Button from 'components/Button'
import Heading from 'components/micro-components/Heading'
import { FC } from 'react'
import { closeModal } from 'redux/features/modalSlice'
import { useAppDispatch } from 'utils/hook'

interface IConfirmProps {
  heading: string
  description?: string
  onConfirm: () => void
}

const Confirm: FC<IConfirmProps> = ({ heading, description, onConfirm }) => {
  const dispatch = useAppDispatch()

  return (
    <section className='w-72 select-none md:w-80'>
      <Heading>{heading}</Heading>
      {description && (
        <p className='mt-5 mb-6 text-center text-sm font-bold text-w-quartz dark:text-w-white-dark md:mt-7 md:mb-8 md:text-base'>
          {description}
        </p>
      )}
      <div className='mt-6 flex w-full justify-center gap-4 md:mt-8 md:gap-5'>
        <Button
          type='button'
          text='Нет'
          size='s'
          isRounded
          onClick={() => dispatch(closeModal())}
        />
        <Button
          type='button'
          text='Да'
          size='s'
          isRounded
          onClick={() => onConfirm()}
        />
      </div>
    </section>
  )
}

export default Confirm
