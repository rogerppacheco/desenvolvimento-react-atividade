// Atividade 3 - Calculadora de Soma (Next.js)
import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [soma, setSoma] = useState(null)

  function calcular(e) {
    e.preventDefault()
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    setSoma(n1 + n2)
  }

  return (
    <>
      <Head>
        <title>Calculadora Soma</title>
      </Head>
      <div>
        <h1>Calculadora de Soma</h1>
        <form onSubmit={calcular}>
          <label>Primeiro número</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <br />
          <label>Segundo número</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <br />
          <button type="submit">Somar</button>
        </form>
        {soma !== null && <p>Resultado: {soma}</p>}
      </div>
    </>
  )
}
