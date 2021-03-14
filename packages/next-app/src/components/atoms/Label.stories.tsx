import { Story } from '@storybook/react'
import { Label, LabelProps } from './Label'

export default {
  title: 'Label',
}

const LabelStory: Story<LabelProps> = (args) => <Label {...args} />

export const Primary = LabelStory.bind({})
Primary.args = {
  text: 'お名前',
  for: 'test',
  required: true,
}
