import { useEffect } from '@storybook/addons'
import type { StoryObj, Meta, DecoratorFn } from '@storybook/react'
import { Button, Text, Toast, ToastProps, ToastProvider } from '@weickfer/react'
import { useState } from 'react'

// function ToastDecorator({ Story }: ToastDecoratorProps) {
//   return <ToastProvider>{Story()}</ToastProvider>
// }

const Decorator: DecoratorFn = (Story, { args }) => {
  const { open, ...othersArgs } = args
  const [isOpen, setIsOpen] = useState<boolean>(open)

  useEffect(() => setIsOpen(open), [open])

  return (
    <ToastProvider duration={args.duration || 2000} swipeDirection="right">
      <Button onClick={() => setIsOpen(true)}>
        <Text>Open Modal</Text>
      </Button>

      {Story({
        args: {
          open: isOpen,
          onOpenChange: setIsOpen,
          ...othersArgs,
        },
      })}
    </ToastProvider>
  )
}

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    title: 'Lorem Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    open: true,
  },
  argTypes: {
    open: {
      type: 'boolean',
    },
  },
  decorators: [Decorator],
} as Meta<ToastProps>

export const Primary: StoryObj = {}

export const LongDuration: StoryObj = {
  args: {
    duration: 10000,
  },
}
