import styled from 'styled-components'

export type LabelProps = {
  text: string
  for: string
  required: boolean
}

const LabelStyled = styled.label.attrs((props) => ({
  // https://ja.reactjs.org/docs/accessibility.html#accessible-forms
  for: props.htmlFor,
}))`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.base};
`

const SpanStyled = styled.span`
  margin: 0 0 0 8px;
  color: ${(props) => props.theme.colors.attention};
`

export function Label(props: LabelProps) {
  const { text, required } = props

  return (
    <LabelStyled {...props}>
      {text}
      {required && <SpanStyled>*</SpanStyled>}
    </LabelStyled>
  )
}
