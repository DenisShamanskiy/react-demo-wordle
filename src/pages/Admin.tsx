import CustomLink from 'components/CustomLink'
import Heading from 'components/micro-components/Heading'

const Admin = () => {
  return (
    <section className='mx-auto w-11/12 max-w-[380px] select-none md:max-w-[448px] '>
      <Heading>Администратор</Heading>
      <div className='mt-8 flex w-full flex-col justify-center gap-5 md:mt-10 md:gap-6'>
        <CustomLink to={'/admin/words'} icon='list'>
          Список слов
        </CustomLink>
        <CustomLink to={'/admin/add-word'} icon='add'>
          Добавить слово
        </CustomLink>
      </div>
    </section>
  )
}

export default Admin
