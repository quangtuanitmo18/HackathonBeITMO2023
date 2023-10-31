import MetalHelp from '../src/pages/metal-help'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
function sum(a, b) {
  return a + b
}

describe('Calculator', () => {
  it('renders a page', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 5)).toBe(4)
    expect(sum(0, 0)).toBe(0)
  })
})
