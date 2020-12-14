import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ isAuthenticated, children, ...rest }) => {
  const { REACT_APP_MKT_PLATFORM_LINK } = process.env

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? children : null
      }}
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default PrivateRoute
