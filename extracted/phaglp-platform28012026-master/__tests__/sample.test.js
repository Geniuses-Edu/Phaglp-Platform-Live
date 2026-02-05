import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Sample Test', () => {
  it('renders a simple test', () => {
    render(<div>Hello Jest!</div>)
    expect(screen.getByText('Hello Jest!')).toBeInTheDocument()
  })
})
