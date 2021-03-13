import { Story } from '@storybook/react'
import { ButtonNormal, ButtonPrimary, ButtonProps } from './Button'

export default {
  title: 'Button',
}

const ButtonNormalStory: Story<ButtonProps> = (args) => (
  <ButtonNormal {...args} />
)

export const Normal = ButtonNormalStory.bind({})
Normal.args = { text: 'クリア', 'aria-label': 'クリア', type: 'reset' }

const ButtonPrimaryStory: Story<ButtonProps> = (args) => (
  <ButtonPrimary {...args} />
)

export const Primary = ButtonPrimaryStory.bind({})
Primary.args = { text: '送信', 'aria-label': '送信', type: 'submit' }
