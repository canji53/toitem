import styled from 'styled-components'

export type BadgeProps = {
  text: string
}

const Wrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const BadgeStyled = styled.div`
  padding: 6px;
  background-color: ${(props) => props.theme.colors.conceptColor};
  line-height: ${(props) => props.theme.fontSize.xsmall};
  font-size: ${(props) => props.theme.fontSize.xsmall};
  color: #fff;
  transition-duration: ${(props) => props.theme.interactions.transitionTime};
`

export function Badge(props: BadgeProps) {
  const { text } = props

  return (
    <Wrap>
      <BadgeStyled>{text}</BadgeStyled>
    </Wrap>
  )
}
