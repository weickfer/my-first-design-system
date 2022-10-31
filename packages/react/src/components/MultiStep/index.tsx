import { ComponentProps } from 'react'
import { Text } from '../Text'
import { MultiStepContainer, Step, StepGroup } from './styles'

export type MultiStepProps = ComponentProps<typeof MultiStepContainer> & {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1, ...props }: MultiStepProps) {
  const [sizeLabel, currentStopLabel] = [currentStep, size].map((s) =>
    String(s).padStart(2, '0'),
  )

  return (
    <MultiStepContainer {...props}>
      <Text size="md" css={{ color: '$gray200' }}>
        Passo {sizeLabel} de {currentStopLabel}
      </Text>

      <StepGroup css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </StepGroup>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
