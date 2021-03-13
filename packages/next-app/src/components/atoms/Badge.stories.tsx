import { Story } from '@storybook/react'
import { Badge, BadgeProps } from './Badge'

export default {
  title: 'Badge',
}

const BadgeWithText: Story<BadgeProps> = (args) => <Badge {...args} />

export const Primary = BadgeWithText.bind({})
Primary.args = { text: 'テスト' }
