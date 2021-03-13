import { Story } from '@storybook/react'
import { Input, InputProps } from './Input'

export default {
  title: 'Input',
}

const InputStory: Story<InputProps> = (args) => <Input {...args} />

export const Email = InputStory.bind({})
Email.args = {
  form: 'dummy',
  name: 'email',
  type: 'email',
  placeholder: '',
  required: true,
  autoFocus: false,
  // autoComplete: 'off', // あえてコメントアウト
  readOnly: false,
}

export const Name = InputStory.bind({})
Name.args = {
  form: 'dummy',
  name: 'name',
  type: 'text',
  placeholder: '',
  required: true,
  autoFocus: false,
  readOnly: false,
}

export const Subject = InputStory.bind({})
Subject.args = {
  form: 'dummy',
  name: 'subject',
  type: 'text',
  placeholder: '無題',
  required: true,
  autoFocus: false,
  readOnly: false,
}
