import styled from 'styled-components'

export type ButtonProps = {
  text: string
  'aria-label': string
  type?: 'button' | 'submit' | 'reset'
  form?: string
  onClick?: () => void
}

const ButtonCommonStyled = styled.button`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.xsmall};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }
`

/**
 * normal button
 */

const ButtonNormalStyled = styled(ButtonCommonStyled).attrs((props) => ({
  'aria-label': props['aria-label'],
  type: props.type || 'button',
  form: props.form,
}))<ButtonProps>`
  padding: 6px 42px;
  border: ${(props) => `solid 1px ${props.theme.colors.thin}`};
  transition-duration: ${(props) => props.theme.interactions.transitionTime};

  &:hover {
    border: ${(props) => `solid 1px ${props.theme.colors.baseThin}`};
  }
`

export function ButtonNormal(props: ButtonProps) {
  const { text } = props

  return <ButtonNormalStyled {...props}>{text}</ButtonNormalStyled>
}

/**
 * primary button
 */

const ButtonPrimaryButton = styled(ButtonCommonStyled).attrs((props) => ({
  'aria-label': props['aria-label'],
  type: props.type || 'button',
  form: props.form,
}))<ButtonProps>`
  padding: 6px 24px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.concept};
  border: ${(props) => `solid 1px ${props.theme.colors.concept}`};
  transition-duration: ${(props) => props.theme.interactions.transitionTime};

  &:hover {
    background-color: ${(props) => props.theme.colors.conceptHover};
    border: ${(props) => `solid 1px ${props.theme.colors.conceptHover}`};
  }
`

export function ButtonPrimary(props: ButtonProps) {
  const { text } = props

  return <ButtonPrimaryButton {...props}>{text}</ButtonPrimaryButton>
}
