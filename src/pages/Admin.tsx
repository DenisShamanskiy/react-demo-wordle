import CustomLink from 'components/CustomLink'
import { Heading, Section } from 'components/common'

const Admin = () => {
  return (
    <Section width='m'>
      <Heading>Администратор</Heading>
      <div className='mt-8 flex w-11/12 flex-col justify-center gap-5 sm:mt-10 sm:gap-6'>
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
    </Section>
  )
}

export default Admin
