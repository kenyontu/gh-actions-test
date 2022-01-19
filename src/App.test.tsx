import { screen, fireEvent } from '@testing-library/react'

import { renderWithProviders } from './test/utils'
import App from './App'

test('Should increment and reset the counter correctly', () => {
  renderWithProviders(<App />)

  const counter = screen.getByTestId('counter')
  const incrementBtn = screen.getByText(/increment/i)
  const resetBtn = screen.getByText(/reset/i)

  expect(counter.innerHTML).toBe('0')

  fireEvent.click(incrementBtn)
  expect(counter.innerHTML).toBe('1')

  fireEvent.click(incrementBtn)
  expect(counter.innerHTML).toBe('2')

  fireEvent.click(resetBtn)
  expect(counter.innerHTML).toBe('0')

  fireEvent.click(incrementBtn)
  expect(counter.innerHTML).toBe('1')
})
