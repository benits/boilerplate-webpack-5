import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@src/pages/Home'
import NotFound from '@src/pages/NotFound'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route exact component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
