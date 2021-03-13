import { Story } from '@storybook/react'
import { Typography, TypographyProps } from './Typography'

export default {
  title: 'Typography',
}

const TypographyStory: Story<TypographyProps> = (args) => (
  <Typography {...args} />
)

export const Primary = TypographyStory.bind({})
Primary.args = {
  size: 1,
  bold: true,
  children: 'text',
}
