import { X } from 'phosphor-react'
import {
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  ToastClose,
} from './styles'

import {
  Provider as ToastProvider,
  ToastProps as PrimitiveToastProps,
} from '@radix-ui/react-toast'

export type ToastProps = PrimitiveToastProps & {
  title: string
  description: string
  onClose: () => void
}

export function Toast({ title, description, onClose, ...props }: ToastProps) {
  return (
    <>
      <ToastViewport />

      <ToastContainer {...props}>
        <ToastClose onClick={onClose}>
          <X />
        </ToastClose>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>
    </>
  )
}

export { ToastProvider }
