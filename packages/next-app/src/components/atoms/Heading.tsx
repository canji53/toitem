import styled, { css } from 'styled-components'

type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6

export type HeadingProps = {
  size: HeadingSize
  children: React.ReactNode
}

const SharedStyle = css`
  color: ${(props) => props.theme.colors.base};
`

const Heading1Styled = styled.h1`
  ${SharedStyle}
  font-size: ${(props) => props.theme.fontSize.xxlarge};
`

const Heading2Styled = styled.h2`
  ${SharedStyle}
  font-size: ${(props) => props.theme.fontSize.xlarge};
`

const Heading3Styled = styled.h3`
  ${SharedStyle}
  font-size: ${(props) => props.theme.fontSize.large};
`

const Heading4Styled = styled.h4`
  ${SharedStyle}
  font-size: ${(props) => props.theme.fontSize.medium};
`

const Heading5Styled = styled.h5`
  ${SharedStyle}
  font-size: ${(props) => props.theme.fontSize.small};
`
const Heading6Styled = styled.h6`
  ${SharedStyle}
  font-size: ${(props) => props.theme.fontSize.xsmall};
`

const getHeadingStyled = (size: HeadingSize) => {
  if (size === 1) return Heading1Styled
  if (size === 2) return Heading2Styled
  if (size === 3) return Heading3Styled
  if (size === 4) return Heading4Styled
  if (size === 5) return Heading5Styled
  if (size === 6) return Heading6Styled
  return Heading3Styled
}

export function Heading(props: HeadingProps) {
  const { size, children } = props
  const HeadingStyled = getHeadingStyled(size)
  return <HeadingStyled>{children}</HeadingStyled>
}
