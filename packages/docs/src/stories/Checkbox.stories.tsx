import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@weickfer/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    placeholder: 'Write...'
  },
  decorators: [
    (Story) => (
      <Box 
        css={{ display: 'flex', flexDirection: 'row', gap: '$2', }} 
      >
        {Story()}
        <Text size="sm" >Mark TO-DO</Text>
      </Box>
    )
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

