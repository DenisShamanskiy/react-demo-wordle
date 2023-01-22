import '../index.css'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from 'components/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      defaultValue: 'green',
      options: ['green', 'red', 'blue', 'yellow'],
      control: {
        type: 'select',
      },
    },
    size: {
      defaultValue: 'm',
      options: ['s', 'm', 'l', 'full'],
      control: {
        type: 'select',
      },
    },
    type: {
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'select',
      },
    },
    text: {
      name: 'label',
      defaultValue: 'Нажимай',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg} />

export const Default = Template.bind({})
Default.args = {
  text: 'Новая игра',
  color: 'green',
  size: 'm',
}
export const Small = Template.bind({})
Small.args = {
  text: 'Сдаться',
  color: 'yellow',
  size: 's',
}
export const Large = Template.bind({})
Large.args = {
  text: 'Войти',
  color: 'red',
  size: 'l',
}
export const Full = Template.bind({})
Full.args = {
  text: 'Создать аккаунт',
  color: 'blue',
  size: 'full',
}
