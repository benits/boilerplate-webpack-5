import React from 'react'
import Providers from '@src/Providers'
import { Router } from 'react-router-dom'
import Routes from '@src/routes/index'
import { createBrowserHistory } from 'history'

const defaultHistory = createBrowserHistory()

const App = ({ history = defaultHistory }) => {
  return (
    <div data-testid="App-component">
      <Router history={history}>
        <Providers>
          <Routes />
        </Providers>
      </Router>
    </div>
  )
}

export default App
