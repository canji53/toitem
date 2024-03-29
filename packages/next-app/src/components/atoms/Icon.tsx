import styled, { css } from 'styled-components'
import { Twitter, FacebookF, GetPocket } from '@styled-icons/fa-brands'
import { Link, InfoCircle, PaperPlane } from '@styled-icons/fa-solid'
import { Hatenabookmark } from '@styled-icons/simple-icons'

const SharedStyle = css`
  height: 16px;
  width: 16px;
  color: ${(props) => props.theme.colors.base};
  transition-duration: ${(props) => props.theme.interactions.transitionTime};
`

const TwitterIconStyled = styled(Twitter)`
  ${SharedStyle}
  &:hover {
    color: ${(props) => props.theme.colors.twitter};
  }
`

const FacebookIconStyled = styled(FacebookF)`
  ${SharedStyle}
  &:hover {
    color: ${(props) => props.theme.colors.facebook};
  }
`

const GetPocketIconStyled = styled(GetPocket)`
  ${SharedStyle}
  &:hover {
    color: ${(props) => props.theme.colors.pocket};
  }
`

const HatenaBookmarkIconStyled = styled(Hatenabookmark)`
  ${SharedStyle}
  &:hover {
    color: ${(props) => props.theme.colors.hatebu};
  }
`

const CopyLinkIconStyled = styled(Link)`
  ${SharedStyle}
  &:hover {
    opacity: ${(props) => props.theme.interactions.opacityRate};
  }
`

const InfoCircleIconStyled = styled(InfoCircle)`
  ${SharedStyle}
  &:hover {
    opacity: ${(props) => props.theme.interactions.opacityRate};
  }
`

const PaperPlaneIconStyled = styled(PaperPlane)`
  ${SharedStyle}
  &:hover {
    opacity: ${(props) => props.theme.interactions.opacityRate};
  }
`

export function TwitterIcon() {
  return <TwitterIconStyled />
}

export function FacebookIcon() {
  return <FacebookIconStyled />
}

export function GetPocketIcon() {
  return <GetPocketIconStyled />
}

export function HatenaBookmarkIcon() {
  return <HatenaBookmarkIconStyled />
}

export function CopyLinkIcon() {
  return <CopyLinkIconStyled />
}

export function InfoCircleIcon() {
  return <InfoCircleIconStyled />
}

export function PaperPlaneIcon() {
  return <PaperPlaneIconStyled />
}

export type ImageIconProps = {
  src: string
  alt: string
}

const ImageIconStyled = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  ${SharedStyle}
  &:hover {
    opacity: ${(props) => props.theme.interactions.opacityRate};
  }
`

export function ImageIcon(props: ImageIconProps) {
  return <ImageIconStyled {...props} />
}
