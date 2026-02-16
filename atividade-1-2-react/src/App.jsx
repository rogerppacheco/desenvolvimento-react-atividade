import FormularioEmail from './components/FormularioEmail'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <h1>Atividades React</h1>

      <div>
        <h2>Formulário Email (Formik + Yup)</h2>
        <FormularioEmail />
      </div>

      <div>
        <h2>Contador</h2>
        <Counter />
      </div>
    </div>
  )
}

export default App
