import { Story } from '@storybook/react'
import { Time, TimeProps } from './Time'

export default {
  title: 'Time',
}

const TimeStory: Story<TimeProps> = (args) => <Time {...args} />

export const Primary = TimeStory.bind({})
Primary.args = {
  dateTime: `${new Date()}`,
}
