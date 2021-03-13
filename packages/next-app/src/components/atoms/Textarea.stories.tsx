import { Story } from '@storybook/react'
import { Textarea, TextareaProps } from './Textarea'

export default {
  title: 'Textarea',
}

const TextareaStory: Story<TextareaProps> = (args) => <Textarea {...args} />

export const Email = TextareaStory.bind({})
Email.args = {
  form: 'dummy',
  name: 'textarea',
  rows: 8,
  maxlength: 400,
  placeholder: 'ここに本文を記入してください。（400文字以内）',
  required: true,
  autoComplete: 'off',
  autoFocus: false,
}
