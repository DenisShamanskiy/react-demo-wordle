import '../styles/form-animation.css'
import { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Heading from 'components/micro-components/Heading'
import { Radio } from 'components/Input'

const Auth = () => {
  const [isSigninForm, setIsSigninForm] = useState(true)

  const toggleForm = () => setIsSigninForm((prev) => !prev)

  return (
    <section className='mx-auto h-5/6 w-full max-w-xs select-none md:max-w-sm'>
      <Heading>Авторизация</Heading>
      <div className='mt-8 flex h-10 w-full items-center justify-center rounded-full text-center md:mt-12 md:h-10'>
        <Radio
          id='sign-in'
          title='Войти'
          peer
          customClass='peer-checked:signin-active signin-inactive mr-1'
          checked={isSigninForm}
          onChange={toggleForm}
        />
        <Radio
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
