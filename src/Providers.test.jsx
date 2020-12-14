import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Providers from './Providers.jsx'

describe('Testando Providers.jsx', () => {
  test('deve renderizar o arquivo, sem quebrar', () => {
    render(
      <Providers>
        <div data-testid="child" />
      </Providers>
    )
    expect(screen.getByTestId('Provider-component')).toBeTruthy()
    expect(screen.getByTestId('child')).toBeTruthy()
  })
})
