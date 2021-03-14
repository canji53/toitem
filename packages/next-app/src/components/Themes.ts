const colors = {
  basecolor: '#555',
  baseThincolor: '#5555',
  conceptcolor: '#d4c4b5',
  conceptHovercolor: '#d4c4b5b7',
  thincolor: '#f0f0f0', // 引用の背景色
  linkcolor: '#339af0',
  hovercolor: '#999', // ホバー時の色
  attention: '#ff4500',
  /* brandcolors */
  twittercolor: '#1da1f3',
  facebookcolor: '#3b5998',
  pocketcolor: '#ef4056',
  hatebucolor: '#01a5df',
  clipboardcolor: '#aaa',
  instagramcolor: '#cf2e92',
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
