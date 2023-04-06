import { useAppDispatch, useAppSelector } from 'hook'
import Button from './Button'
import { closeModal } from 'redux/features/modalSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'

export const ModalError = () => {
  const dispatch = useAppDispatch()
  const { status, message } = useAppSelector((state) => state.modal.error)
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  return (
    <div className='w-72 select-none md:w-80'>
      <div className='mx-auto mb-6 w-16 md:mb-8 md:w-20'>
        {globalSvgSelector('close-circle', darkMode)}
      </div>
      <p className='mt-8 text-center text-sm font-semibold text-w-quartz dark:text-w-white-dark md:mt-10 md:text-base'>
        Код ошибки: {status}
      </p>
      <p className='mt-4 mb-8 text-center text-sm font-semibold text-w-quartz dark:text-w-white-dark md:mt-5 md:mb-10 md:text-base'>
        {message}
      </p>
      <div className='mt-6 flex w-full justify-center gap-4 md:mt-8 md:gap-5'>
        <Button
          type='button'
          text='Плохо'
          size='s'
          isRounded
          onClick={() => dispatch(closeModal())}
        />
      </div>
    </div>
  )
}
export default ModalError
