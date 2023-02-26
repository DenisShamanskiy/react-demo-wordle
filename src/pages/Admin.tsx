import CustomLink from 'components/CustomLink'
import Heading from 'components/micro-components/Heading'
import Section from 'components/Section'

const Admin = () => {
  return (
    <Section>
      {/* <section className='scrollbar-hide mx-auto flex h-5/6 w-full max-w-[380px] select-none flex-col items-center overflow-y-auto md:max-w-[448px] '> */}
      <Heading>Администратор</Heading>
      <div className=' mt-8 flex w-11/12 flex-col justify-center gap-5 md:mt-10 md:gap-6'>
        <CustomLink to={'/admin/users'} icon='people'>
          Игроки
        </CustomLink>
        <CustomLink to={'/admin/words'} icon='list'>
          Слова
        </CustomLink>
        <CustomLink to={'/admin/add-word'} icon='add'>
          Добавить слово
        </CustomLink>
      </div>
      {/* </section> */}
    </Section>
  )
}

export default Admin
