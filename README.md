# EbacShop — Testes E2E com Playwright

Este repositório contém testes end-to-end (E2E) automatizados para a aplicação loja EBAC, escritos com Playwright.

## Visão geral

Os testes automatizam cenários comuns do fluxo de usuário: cadastro, login, logout, adicionar ao carrinho, checkout, entre outros. 

## Stack escolhida

- Node.js (JavaScript)
- Playwright (`@playwright/test`) — runner, assertions e API de browser
- Faker (`@faker-js/faker`) — geração de dados randômicos
- dotenv — carregamento de variáveis de ambiente

## Requisitos

- Node.js 18+ (recomendado)
- npm ou yarn
- Acesso à internet para baixar dependências

## Instalação

1. Clone o repositório:

```bash
git clone <repo-url>
cd caseTecnico
```

2. Instale dependências:

```bash
npm install
```

3. (Opcional) Instale as dependências do Playwright (browsers):

```bash
npx playwright install
```

4. Crie um arquivo `.env` na raiz (opcional, usado por alguns testes) e adicione as variáveis necessárias, por exemplo:

```

USERFULL=seu_email_completo@example.com
PASSWORD=sua_senha

```

> Nota: variáveis que apontam para usuários já existentes (como `USERFULL`) são usadas em testes que verificam cenários de e-mail já cadastrado.

## Scripts úteis

- Executar todos os testes (headless):

```bash
npx playwright test
```

- Executar testes com interface (Playwright Test Runner UI):

```bash
npx playwright test --ui
```

- Executar um arquivo de teste específico:

```bash
npx playwright test e2e/login.spec.js
```

- Gerar código com o recorder (interação manual):

```bash
npx playwright codegen http://lojaebac.ebaconline.art.br/
```

## Estrutura do projeto

```
.
├─ e2e/                   # arquivos de teste (Playwright)
│  ├─ login.spec.js
│  ├─ register.spec.js
│  ├─ cart.spec.js
│  └─ ...
├─ support/
│  ├─ pages/              # page objects
│  │  ├─ LoginPage.js
│  │  ├─ RegisterPage.js
│  │  └─ Components.js    # componentes compartilhados (toasts, etc.)
│  └─ ...
├─ playwright.config.js
├─ package.json
├─ README.md
└─ .env (não comitado)
```

## Cenários automatizados (principais)

- Acessar a página inicial
- Registrar usuário com credenciais válidas
- Não permitir registro com campos vazios
- Não permitir registro com e-mail já cadastrado
- Fazer login com credenciais válidas
- Não permitir login com campos vazios
- Adicionar produto ao carrinho e verificar mensagem de sucesso
- Fluxo de checkout (se suportado)

Cada cenário está implementado em `e2e/*.spec.js` usando Page Objects em `support/pages/`.

### Como o fluxo de "e-mail já cadastrado" funciona

O teste `e2e/register.spec.js` contém um caso que usa a variável `process.env.USERFULL` e tenta registrar com esse e-mail, esperando a mensagem:

```
Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.
```

Recomendações:
- Garanta que `USERFULL` esteja definido e que o e-mail exista na aplicação de teste.
- Se quiser que o teste seja totalmente isolado, podemos alterar o teste para criar o usuário antes (se não existir) e então tentar registrá-lo novamente para provocar a mensagem de erro.

## Dicas para debugging

- Use `messageComponent.debugToasts()` (helper incluído) para imprimir as mensagens de toast que aparecem na página e descobrir diferenças de texto ou seletores.
- Se um `locator` não é encontrado, cheque o seletor com as ferramentas do navegador (DevTools) e ajuste em `support/pages/Components.js`.
- Aumente timeouts caso a UI demore para processar ações, por exemplo usando `waitFor` ou aumentando `timeout` nos asserts.

## Boas práticas

- Mantenha as asserções nos arquivos de teste; os Page Objects devem expor ações e estados (por exemplo `isLoggedIn()` deve retornar booleano).
- Use variáveis de ambiente para credenciais e dados que podem variar por ambiente.
- Evite testes flakey: aguarde explicitamente por estados do DOM que indiquem conclusão de ações.

## Executando um teste específico (exemplo)

```bash
# Rodar apenas o teste de registro
npx playwright test e2e/register.spec.js -g "Não deve registrar um usuário com e-mail já cadastrado"
```

## Contato

Se precisar que eu adapte os testes para serem mais isolados (criando usuários automaticamente), posso aplicar as alterações nos Page Objects e nos testes — me diga se quer que eu implemente isso automaticamente.

---

README gerado em 29/04/2026 — boas execuções! :)