// Testes do componente Counter - Jest + React Testing Library
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('Counter', () => {
  // verifica se renderiza e mostra 0 no inicio
  it('mostra zero no inicio', () => {
    render(<Counter />)
    const contador = screen.getByTestId('contador')
    expect(contador).toHaveTextContent('0')
  })

  // verifica se os 2 botoes aparecem
  it('tem botao de incrementar e decrementar', () => {
    render(<Counter />)
    expect(screen.getByText('Incrementar')).toBeInTheDocument()
    expect(screen.getByText('Decrementar')).toBeInTheDocument()
  })

  // ao clicar em incrementar o numero aumenta
  it('incrementar aumenta o valor', () => {
    render(<Counter />)
    const contador = screen.getByTestId('contador')
    const btn = screen.getByText('Incrementar')

    fireEvent.click(btn)
    expect(contador).toHaveTextContent('1')
    fireEvent.click(btn)
    expect(contador).toHaveTextContent('2')
  })

  // ao clicar em decrementar o numero diminui
  it('decrementar diminui o valor', () => {
    render(<Counter />)
    const contador = screen.getByTestId('contador')
    const btn = screen.getByText('Decrementar')

    fireEvent.click(btn)
    expect(contador).toHaveTextContent('-1')
  })

  // os botoes mudam o valor que aparece na tela
  it('valor na tela muda ao clicar nos botoes', () => {
    render(<Counter />)
    const contador = screen.getByTestId('contador')
    fireEvent.click(screen.getByText('Incrementar'))
    fireEvent.click(screen.getByText('Incrementar'))
    fireEvent.click(screen.getByText('Decrementar'))
    expect(contador).toHaveTextContent('1')
  })
})
