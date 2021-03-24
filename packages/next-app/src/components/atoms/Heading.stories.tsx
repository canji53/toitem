import { Story } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Heading',
}

const HeadingStory: Story<HeadingProps> = (args) => <Heading {...args} />

export const Primary = HeadingStory.bind({})
Primary.args = {
  size: 1,
  children: 'text',
}
