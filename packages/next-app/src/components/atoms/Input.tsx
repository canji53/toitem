import styled from 'styled-components'

export type inputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export type InputProps = {
  form: string
  name: string
  type: inputType
  placeholder?: string
  required: boolean
  autoFocus?: boolean
  autoComplete?: string
  readOnly?: boolean
  value?: string
}

const InputStyled = styled.input.attrs((props) => ({
  form: props.form,
  name: props.name,
  type: props.type,
  placeholder: props.placeholder,
  required: props.required,
  autofocus: props.autoFocus || false,
  autocomplete: props.autoComplete || 'off',
  readonly: props.readOnly || false,
  value: props.value,
}))`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: ${(props) => `solid 1px ${props.theme.colors.thinColor}`};
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.baseColor};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition-duration: ${(props) => props.theme.interactions.transitionTime};

  &::placeholder {
    color: ${(props) => props.theme.colors.baseThinColor};
  }

  &:focus {
    outline: none;
    border-bottom: ${(props) =>
      `solid 1px ${props.theme.colors.baseThinColor}`};
  }
`

export function Input(props: InputProps) {
  return <InputStyled {...props} />
}
