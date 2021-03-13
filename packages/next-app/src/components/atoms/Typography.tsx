import styled from 'styled-components'
import { defaultTheme } from '../Themes'

export type TypographyProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6
  bold?: boolean
  children: React.ReactNode
}

const getFontSize = (size?: number) => {
  switch (size) {
    case 1:
      return defaultTheme.fontSize.xsmall
    case 2:
      return defaultTheme.fontSize.small
    case 3:
      return defaultTheme.fontSize.medium
    case 4:
      return defaultTheme.fontSize.large
    case 5:
      return defaultTheme.fontSize.xlarge
    case 6:
      return defaultTheme.fontSize.xxlarge
    default:
      return defaultTheme.fontSize.small
  }
}

const TypographyStyled = styled.p<TypographyProps>`
  font-size: ${(props) => getFontSize(props.size)};
  font-weight: ${(props) => props.bold && 'bold'};
`

export function Typography(props: TypographyProps) {
  return <TypographyStyled {...props}>{props.children}</TypographyStyled>
}
