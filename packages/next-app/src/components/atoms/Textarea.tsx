import styled from 'styled-components'

export type TextareaProps = {
  form: string
  name: string
  rows: number
  maxlength: number
  placeholder?: string
  required: boolean
  autoFocus?: boolean
  autoComplete?: string
  value?: string
}

const TextareaStyled = styled.textarea.attrs((props) => ({
  form: props.form,
  name: props.name,
  rows: props.rows,
  maxlength: props.maxLength,
  placeholder: props.placeholder,
  required: props.required,
  autofocus: props.autoFocus || false,
  autocomplete: props.autoComplete || 'off',
  value: props.value,
}))`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: ${(props) => `solid 1px ${props.theme.colors.thin}`};
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.base};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition-duration: ${(props) => props.theme.interactions.transitionTime};

  &::placeholder {
    color: ${(props) => props.theme.colors.baseThin};
  }

  &:focus {
    outline: none;
    border-bottom: ${(props) => `solid 1px ${props.theme.colors.baseThin}`};
  }
`

export function Textarea(props: TextareaProps) {
  return <TextareaStyled {...props} />
}
