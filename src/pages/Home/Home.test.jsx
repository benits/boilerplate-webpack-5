import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './index.jsx'

describe('# Página Home', () => {
  it('verifica se renderiza sem crashar', () => {
    render(
      <Router>
        <Home />
      </Router>
    )
    expect(screen.getByTestId('Home-component')).toBeTruthy()
  })
})
