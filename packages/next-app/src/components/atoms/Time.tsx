import styled from 'styled-components'

export type TimeProps = {
  dateTime: string
}

const TimeStyled = styled.time.attrs((props) => ({
  datetime: props.dateTime,
}))`
  line-height: ${(props) => props.theme.fontSize.xsmall};
  font-size: ${(props) => props.theme.fontSize.xsmall};
  color: ${(props) => props.theme.colors.base};
`

export function Time(props: TimeProps) {
  return <TimeStyled {...props}>{props.dateTime}</TimeStyled>
}
