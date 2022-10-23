import { Check } from "phosphor-react";
import { ComponentType } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export type CheckboxProps = ComponentType<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  ) 
}

Checkbox.displayName = 'Checkbox'
