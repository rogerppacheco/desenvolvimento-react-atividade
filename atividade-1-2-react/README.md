# Atividades 1 e 2 – React (Formulário + Testes)

**Importante:** todos os comandos abaixo devem ser executados **dentro da pasta do projeto** (`atividade-1-2-react`). Se você estiver na pasta raiz do repositório, use antes: `cd atividade-1-2-react`.

## Comandos para instalar as dependências

No terminal, na pasta do projeto:

```bash
cd atividade-1-2-react
npm install
```

Isso instala:

- **React** (react, react-dom)
- **Formik** – gerenciamento do formulário
- **Yup** – validação do e-mail
- **Vite** – build e servidor de desenvolvimento
- **Vitest** + **React Testing Library** – testes (API compatível com Jest)

## Rodar o projeto

```bash
npm run dev
```

Abre em: http://localhost:5173

## Rodar os testes

```bash
npm run test
```

---

## Atividade 1 – Formulário com Validação

- **Componente:** `src/components/FormularioEmail.jsx`
- **App:** `src/App.jsx` importa e exibe o formulário e o contador.

O formulário usa **Formik** (`useFormik`) para estado e **Yup** para validar o e-mail (obrigatório e formato válido).

---

## Atividade 2 – Testes do Counter

- **Componente:** `src/components/Counter.jsx`
- **Testes:** `src/components/Counter.test.jsx`

### O que cada teste verifica

| Teste | O que verifica |
|-------|-----------------|
| **Renderiza o componente e exibe 0** | O componente é renderizado e o elemento com `data-testid="contador"` mostra o texto "0". |
| **Exibe os botões Incrementar e Decrementar** | Os dois botões estão presentes na tela (por nome acessível). |
| **Aumenta o valor ao clicar em Incrementar** | Após cliques em "Incrementar", o valor exibido passa a ser 1, depois 2. |
| **Diminui o valor ao clicar em Decrementar** | Após cliques em "Decrementar", o valor exibido passa a ser -1, depois -2. |
| **Incrementar e Decrementar juntos** | Vários cliques nos dois botões e o valor exibido reflete a soma (ex.: +2 e -1 = 1). |

Os testes usam **React Testing Library** para renderizar o componente, buscar elementos e simular cliques, e **Vitest** (com API no estilo Jest) para `describe`, `it` e `expect`.
