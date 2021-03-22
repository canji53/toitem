import styled from 'styled-components'

export type ImageProps = {
  src: string
  alt: string
  width?: string
  height?: string
}

const ImageStyled = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  width: props.width || '100%',
  height: props.height || 'auto',
}))`
  margin: 32px 0;
  object-fit: cover;
`

export function Image(props: ImageProps) {
  return <ImageStyled {...props} />
}
