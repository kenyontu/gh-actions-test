import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

export const renderWithProviders = (
  ui: React.ReactElement,
  renderOptions?: RenderOptions,
) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>, renderOptions)
}
