import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles/config'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  lineHeight: 0,
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $ignite900',

  '&:focus': {
    border: '2px solid $ignite300',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
})

const slide = (direction: 'in' | 'out') => keyframes({
  from: {
    transform: `translateY(${direction === 'in' ? '-100%' : '0'})`,
  },
  to: {
    transform: `translateY(${direction === 'in' ? '0' : '-100%'})`,
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slide('in')} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slide('out')} 200ms ease-out`,
  },
})

