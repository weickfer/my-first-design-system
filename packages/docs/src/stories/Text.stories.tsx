import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@weickfer/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est at inventore iure, minima iste incidunt, eos ratione alias perspiciatis suscipit odit, impedit quidem distinctio consectetur labore itaque porro voluptates.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong Text',
  },
}
