import Heading from 'components/micro-components/Heading'
import NavLinkСontainer from 'components/micro-components/NavLinkСontainer'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <section className='mx-auto w-11/12 max-w-[448px] select-none '>
      <Heading>Администратор</Heading>
      <div className='mx-auto my-6 grid w-11/12 grid-rows-2 gap-6 md:my-8 md:gap-8'>
        <NavLink to='/admin/words'>
          <NavLinkСontainer title={'Список слов'} />
        </NavLink>
        <NavLink to='/admin/add-word'>
          <NavLinkСontainer title={'Добавить слово'} />
        </NavLink>
      </div>
    </section>
  )
}

export default Admin
