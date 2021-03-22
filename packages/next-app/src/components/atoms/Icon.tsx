import styled, { css } from 'styled-components'
import { Twitter, FacebookF, GetPocket } from '@styled-icons/fa-brands'
import { Link, InfoCircle, PaperPlane } from '@styled-icons/fa-solid'

export type BaseIconProps = {
  children?: React.ReactNode
}

const SharedIconStyle = css`
  height: 16px;
  width: 16px;
  color: ${(props) => props.theme.colors.base};
  transition-duration: ${(props) => props.theme.interactions.transitionTime};
`

const TwitterIconStyled = styled(Twitter)`
  ${SharedIconStyle}
  &:hover {
    color: ${(props) => props.theme.colors.twitter};
  }
`

const FacebookIconStyled = styled(FacebookF)`
  ${SharedIconStyle}
  &:hover {
    color: ${(props) => props.theme.colors.facebook};
  }
`

const GetPocketIconStyled = styled(GetPocket)`
  ${SharedIconStyle}
  &:hover {
    color: ${(props) => props.theme.colors.pocket};
  }
`

const CopyLinkIconStyled = styled(Link)`
  ${SharedIconStyle}
  &:hover {
    opacity: ${(props) => props.theme.interactions.opacityRate};
  }
`

const InfoCircleIconStyled = styled(InfoCircle)`
  ${SharedIconStyle}
  &:hover {
    opacity: ${(props) => props.theme.interactions.opacityRate};
  }
`

const PaperPlaneIconStyled = styled(PaperPlane)`
  ${SharedIconStyle}
  &:hover {
    opacity: ${(props) => props.theme.interactions.opacityRate};
  }
`

export function TwitterIcon(props: BaseIconProps) {
  return <TwitterIconStyled>{props.children}</TwitterIconStyled>
}

export function FacebookIcon(props: BaseIconProps) {
  return <FacebookIconStyled>{props.children}</FacebookIconStyled>
}

export function GetPocketIcon(props: BaseIconProps) {
  return <GetPocketIconStyled>{props.children}</GetPocketIconStyled>
}

export function CopyLinkIcon(props: BaseIconProps) {
  return <CopyLinkIconStyled>{props.children}</CopyLinkIconStyled>
}

export function InfoCircleIcon(props: BaseIconProps) {
  return <InfoCircleIconStyled>{props.children}</InfoCircleIconStyled>
}

export function PaperPlaneIcon(props: BaseIconProps) {
  return <PaperPlaneIconStyled>{props.children}</PaperPlaneIconStyled>
}
