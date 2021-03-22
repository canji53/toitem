import { Story } from '@storybook/react'
import {
  BaseIconProps,
  TwitterIcon,
  FacebookIcon,
  GetPocketIcon,
  CopyLinkIcon,
  InfoCircleIcon,
  PaperPlaneIcon,
} from './Icon'

export default {
  title: 'Icon',
}

const TwitterIconStory: Story<BaseIconProps> = (args) => (
  <TwitterIcon {...args} />
)
export const Twitter = TwitterIconStory.bind({})
Twitter.args = {}

const FacebookIconStory: Story<BaseIconProps> = (args) => (
  <FacebookIcon {...args} />
)
export const Facebook = FacebookIconStory.bind({})
Facebook.args = {}

const GetPocketIconStory: Story<BaseIconProps> = (args) => (
  <GetPocketIcon {...args} />
)
export const GetPocket = GetPocketIconStory.bind({})
GetPocket.args = {}

const CopyLinkIconStory: Story<BaseIconProps> = (args) => (
  <CopyLinkIcon {...args} />
)
export const CopyLink = CopyLinkIconStory.bind({})
CopyLink.args = {}

const InfoCircleIconStory: Story<BaseIconProps> = (args) => (
  <InfoCircleIcon {...args} />
)
export const InfoCircle = InfoCircleIconStory.bind({})
InfoCircle.args = {}

const PaperPlaneIconStory: Story<BaseIconProps> = (args) => (
  <PaperPlaneIcon {...args} />
)
export const PaperPlane = PaperPlaneIconStory.bind({})
PaperPlane.args = {}
