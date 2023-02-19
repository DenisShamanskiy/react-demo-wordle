import '../css/form-animation.css'
import { FC, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import InputRadio from 'components/micro-components/InputRadio'
import Heading from 'components/micro-components/Heading'

const Auth: FC = () => {
  const [isSigninForm, setIsSigninForm] = useState(true)

  const toggleForm = () => setIsSigninForm((prev) => !prev)

  return (
    <section className='mx-auto h-5/6 w-full max-w-xs select-none md:max-w-sm'>
      <Heading>Авторизация</Heading>
      <div className='mt-8 flex h-10 w-full items-center justify-center rounded-full text-center md:mt-12 md:h-10'>
        <InputRadio
          id='sign-in'
          title='Войти'
          peer
          customClass='peer-checked:signin-active signin-inactive mr-1'
          checked={isSigninForm}
          onChange={toggleForm}
        />
        <InputRadio
          id='sign-up'
          title='Регистрация'
          customClass='signup-active peer-checked:signup-inactive ml-1'
          checked={!isSigninForm}
          onChange={toggleForm}
        />
      </div>

      <SwitchTransition>
        <CSSTransition
          key={isSigninForm ? 'signin' : 'signup'}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames='form-animation'
        >
          {isSigninForm ? <Signin /> : <Signup />}
        </CSSTransition>
      </SwitchTransition>
    </section>
  )
}

export default Auth
