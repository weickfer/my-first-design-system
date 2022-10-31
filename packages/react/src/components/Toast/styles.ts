import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles/config'

const slideIn = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100%))` },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$2',
  right: '$2',
  width: 360,
  maxWidth: '100vw',
  listStyle: 'none',
  margin: 0,
})

export const ToastContainer = styled(Toast.Root, {
  border: '1px solid $gray600',
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  padding: '$3 $5',
  // minWidth: '$90',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset', // Remove all default button css.
  position: 'absolute',
  top: '$4',
  right: '$4',
  font: 0,
  width: '$4',
  height: '$4',

  svg: {
    width: '$4',
    height: '$4',
    color: '$gray200',
  },
})
