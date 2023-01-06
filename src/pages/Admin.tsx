import Heading from 'components/micro-components/Heading'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <section className='mx-auto w-11/12 max-w-[448px] select-none '>
      <Heading>Администратор</Heading>

      <NavLink to='/admin/words'>
        <div className='relative mx-auto mt-6 flex h-10 w-11/12 items-center justify-center rounded-lg border-2 border-w-grey-tone-2 text-sm font-semibold tracking-wider text-w-quartz transition-all duration-300 hover:scale-105 dark:border-w-grey-tone-3 dark:text-w-white-dark md:mt-8 md:h-12 md:text-base'>
          <div
            className={
              'absolute right-1 mx-0.5 block min-w-[20px] rounded transition duration-300 disabled:opacity-40 md:mx-1 md:min-w-[24px]'
            }
          ></div>
          Список слов
        </div>
      </NavLink>
      {/* <div className='my-6 mx-auto flex w-11/12 max-w-md flex-col items-center justify-center border-b border-w-grey-tone-2 py-2 dark:border-w-grey-tone-3 md:my-8 md:py-3'></div>

      <Statistics />
      <div className='mx-auto mt-10 w-48 md:mt-12 md:w-52'>
        <Button
          type='button'
          text={'выйти'}
          color={'red'}
          size='m'
          onClick={() => handleLogout()}
        />
      </div> */}
    </section>
  )
}

export default Admin
