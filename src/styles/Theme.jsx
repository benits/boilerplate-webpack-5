import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './Global.jsx'

const theme = {
  metrics: {
    baseMargin: '10',
    basePadding: '20',
    baseRadius: '16'
  },
  colors: {
    white: '#FFFFFF',
    lighter: '#E6E6E6',
    light: '#D5D5D5',
    regular: '#B5B5B5',
    dark: '#838383',
    darker: '#5C5C5C',
    black: '#000000',

    textColor: '#838383',
    titleColor: '#5c5c5c',
    borderColor: '#D5D5D5',

    primary: '#0033CC',
    secondary: '#3EC4E3',
    success: '#02e64a',
    danger: '#f91919',
    warning: '#fbbc11',

    transparent: 'transparent',
    darkTransparent: 'rgba(0, 0, 0, 0.6)',
    whiteTransparent: 'rgba(255, 255, 255, 0.3)'
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    miniSmall: 8,
    mini: 10,
    small: 12,
    medium: 14,
    large: 16,
    xlarge: 18,
    xxlarge: 20
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export default Theme
