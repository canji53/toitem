const colors = {
  base: '#555',
  baseThin: '#5555',
  concept: '#d4c4b5',
  conceptHover: '#d4c4b5b7',
  thin: '#f0f0f0', // 引用の背景色
  link: '#339af0',
  hover: '#999', // ホバー時の色
  attention: '#ff4500',
  /* brandcolors */
  twitter: '#1da1f3',
  facebook: '#3b5998',
  pocket: '#ef4056',
  hatebu: '#01a5df',
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
