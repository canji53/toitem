import { Story } from '@storybook/react'
import {
  TwitterIcon,
  FacebookIcon,
  GetPocketIcon,
  HatenaBookmarkIcon,
  CopyLinkIcon,
  InfoCircleIcon,
  PaperPlaneIcon,
  ImageIconProps,
  ImageIcon,
} from './Icon'

export default {
  title: 'Icon',
}

const TwitterIconStory: Story = () => <TwitterIcon />
export const Twitter = TwitterIconStory.bind({})
Twitter.args = {}

const FacebookIconStory: Story = () => <FacebookIcon />
export const Facebook = FacebookIconStory.bind({})
Facebook.args = {}

const GetPocketIconStory: Story = () => <GetPocketIcon />
export const GetPocket = GetPocketIconStory.bind({})
GetPocket.args = {}

const HatenaBookmarkIconStory: Story = () => <HatenaBookmarkIcon />
export const HatenaBookmark = HatenaBookmarkIconStory.bind({})
HatenaBookmark.args = {}

const CopyLinkIconStory: Story = () => <CopyLinkIcon />
export const CopyLink = CopyLinkIconStory.bind({})
CopyLink.args = {}

const InfoCircleIconStory: Story = () => <InfoCircleIcon />
export const InfoCircle = InfoCircleIconStory.bind({})
InfoCircle.args = {}

const PaperPlaneIconStory: Story = () => <PaperPlaneIcon />
export const PaperPlane = PaperPlaneIconStory.bind({})
PaperPlane.args = {}

const ImageIconStory: Story<ImageIconProps> = (args) => <ImageIcon {...args} />
export const ImageIconPrimary = ImageIconStory.bind({})
ImageIconPrimary.args = {
  src: '/tolog.png',
  alt: 'test',
}
