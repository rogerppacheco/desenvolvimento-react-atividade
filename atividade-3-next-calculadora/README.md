# Atividade 3 – Calculadora de Soma (Next.js)

## Instalação e execução

```bash
cd atividade-3-next-calculadora
npm install
npm run dev
```

Acesse: http://localhost:3000

## O que foi implementado

- **Página:** `pages/index.js` (roteada como `/`)
- Formulário com dois campos numéricos.
- Estado com `useState` para os dois números e para o resultado.
- Ao enviar o formulário (ou clicar no botão), a soma é calculada e exibida na tela.

O estado guarda `numero1`, `numero2` e `resultado`; no submit, a soma é calculada e `resultado` é atualizado para exibir o valor.
