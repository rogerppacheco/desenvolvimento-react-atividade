// Atividade 1 - Formulário com Formik e Yup
import { useFormik } from 'formik'
import * as Yup from 'yup'

// esquema de validação do email com yup
const validacao = Yup.object({
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Email inválido'),
})

function FormularioEmail() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validacao,
    onSubmit: (valores) => {
      console.log(valores)
      alert('Email: ' + valores.email)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        ) : null}
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioEmail
