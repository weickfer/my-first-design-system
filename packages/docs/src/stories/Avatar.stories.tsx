import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps,  } from '@weickfer/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/weickfer.png',
    alt: 'Weickmam Ferreira'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj = {
  args: {
    src: undefined,
  }
}
