import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@weickfer/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => (
      <Box 
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2', }} 
      >
        <Text size="sm" >Type anything...</Text>
        {Story()}
      </Box>
    )
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your Call ID'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.io/'
  }
}
