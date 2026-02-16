// Atividade 2 - Contador para testes
import { useState } from 'react'

function Counter() {
  const [valor, setValor] = useState(0)

  function incrementar() {
    setValor(valor + 1)
  }

  function decrementar() {
    setValor(valor - 1)
  }

  return (
    <div>
      <button onClick={decrementar}>Decrementar</button>
      <span data-testid="contador">{valor}</span>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default Counter
