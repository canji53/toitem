import styled from 'styled-components'
import { defaultTheme } from '../Themes'

type TypographySize = 1 | 2 | 3 | 4 | 5 | 6

export type TypographyProps = {
  size?: TypographySize
  bold?: boolean
  children: React.ReactNode
}

const getFontSize = (size?: TypographySize) => {
  if (size === 1) return defaultTheme.fontSize.xxlarge
  if (size === 2) return defaultTheme.fontSize.xlarge
  if (size === 3) return defaultTheme.fontSize.large
  if (size === 4) return defaultTheme.fontSize.medium
  if (size === 5) return defaultTheme.fontSize.small
  if (size === 6) return defaultTheme.fontSize.xsmall
  return defaultTheme.fontSize.small
}

const TypographyStyled = styled.p<TypographyProps>`
  font-size: ${(props) => getFontSize(props.size)};
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => props.theme.colors.base};
`

export function Typography(props: TypographyProps) {
  return <TypographyStyled {...props}>{props.children}</TypographyStyled>
}
