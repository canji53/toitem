const colors = {
  baseColor: '#555',
  baseThinColor: '#5555',
  conceptColor: '#d4c4b5',
  conceptHoverColor: '#d4c4b5b7',
  thinColor: '#f0f0f0', // 引用の背景色
  linkColor: '#339af0',
  hoverColor: '#999', // ホバー時の色
  /* brandColors */
  twitterColor: '#1da1f3',
  facebookColor: '#3b5998',
  pocketColor: '#ef4056',
  hatebuColor: '#01a5df',
  clipboardColor: '#aaa',
  instagramColor: '#cf2e92',
}

const fonts = {
  sansSerif: `-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
  "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic",
  Verdana, Meiryo, sans-serif`,
}

const fontSize = {
  xsmall: '11px',
  small: '13px',
  medium: '16px',
  large: '20px',
  xlarge: '24px',
  xxlarge: '28px',
}

const interactions = {
  transitionTime: '.3s',
  opacityRate: '0.75', // 透明化される割合
}

export const defaultTheme = { colors, fonts, fontSize, interactions }
