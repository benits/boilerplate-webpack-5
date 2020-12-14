import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('Testando App.jsx', () => {
  test('deve renderizar o arquivo, sem quebrar', () => {
    render(<App />)
    expect(screen.getByTestId('App-component')).toBeTruthy()
  })
})
