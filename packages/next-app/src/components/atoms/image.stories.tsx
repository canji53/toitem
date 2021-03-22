import { Story } from '@storybook/react'
import { Image, ImageProps } from './image'

export default {
  title: 'Image',
}

const ImageStory: Story<ImageProps> = (args) => <Image {...args} />

export const Primary = ImageStory.bind({})
Primary.args = {
  src: '/eyecatch.png',
  alt: 'test',
}
