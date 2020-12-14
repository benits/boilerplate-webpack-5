import React from 'react'
import ThemeProvider from '@src/styles/Theme'
import AuthProvider from '@src/providers/AuthProvider'
import PropTypes from 'prop-types'

const Providers = ({ children }) => {
  return (
    <div data-testid="Provider-component">
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </div>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}

export default Providers
