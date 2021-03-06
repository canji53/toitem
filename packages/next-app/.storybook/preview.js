import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../src/components/Themes'

const addParameters = require('@storybook/react').addParameters
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  )
]
