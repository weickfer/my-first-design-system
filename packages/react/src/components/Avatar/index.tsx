import { User } from 'phosphor-react'
import { ComponentType } from 'react';
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

export type AvatarProps = ComponentType<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
