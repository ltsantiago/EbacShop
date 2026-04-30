# 🛍️ Projeto EBACSHOP



[![Playwright](https://img.shields.io/badge/Playwright-2E3440?style=for-the-badge&logo=playwright&logoColor=#2EAD33)](https://playwright.dev/)
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)



## 📋 Sobre o Projeto

Este é um projeto de automação de testes end-to-end (E2E) para o site [EbacShop](http://lojaebac.ebaconline.art.br/), desenvolvido como parte de um desafio técnico . A automação foi implementada utilizando Playwright, uma ferramenta moderna de automação de testes que oferece suporte a múltiplos navegadores.

## ✨ Funcionalidades

- Autenticação de usuário
- Regisro de usuário
- Navegação entre Vitrine
- Adição de itens ao carrinho
- Edição de itens no carrinho
- Finalização de compra
- Validação de fluxos de compra
- Geração de relatórios de teste

## 📊 Roadmap de Automação

<img width="1195" height="1200" alt="Image" src="https://github.com/user-attachments/assets/51a0088e-4e53-48f8-bb7e-d2cf1e4a54fd" />

## 🚀 Tecnologias Utilizadas

- **Playwright** - Framework de automação de testes
- **Javascript** - Linguagem Desenvolvida
- **Faker.js** - Geração de dados de teste realísticos
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Yarn** - Gerenciador de pacotes

## 📦 Pré-requisitos

- Node.js (versão 16 ou superior)
- Yarn (recomendado) ou npm
- Navegadores: Chromium, Firefox e/ou WebKit

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd ebacshop
   ```

2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

3. Configure as variáveis de ambiente (se necessário):
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   USERFULL=
   PASSWORD=
   ```

## 🧪 Executando os Testes

Para executar todos os testes em modo headless:
```bash
npx playwright test --headed
```

Para executar todos os testes em modo de interface do usuário (UI):
```bash
npx playwright test --ui
```

Para executar testes específicos:
```bash
npx playwright test tests/e2e/nome_do_arquivo.spec.ts
```



## 🔄 Pipeline CI/CD

✅ Integração com **GitHub Actions**  
✅ Execução automática a cada push e pull 

✅ Integração com Pipeline CI/CD **GitHub Actions**

Em construção

## 📊 Relatórios e Evidências

Após a execução dos testes, você pode visualizar os relatórios gerados em:
- Relatório HTML: `playwright-report/index.html`
- Screenshots: `test-results/`
- Vídeos: `test-results/`

  
## 🔗 Modo de interface do usuário (UI)

https://github.com/user-attachments/assets/cb19d44d-9248-4fe9-9219-e21054b733e5

## 🔗 Integração com Tesults

<img width="1902" height="1041" alt="Image" src="https://github.com/user-attachments/assets/c551805f-d71f-4156-a81f-323a22657f4b" />


## 🔗 Breve Apresentação do Trabalho - Mostrando os conceitos utilizados

<img width="1900" height="859" alt="Image" src="https://github.com/user-attachments/assets/242c2a46-54d1-4058-a2be-6cbc5f75ed3f" /><br><br>

Video sobre: https://drive.google.com/file/d/1WGlC3Aiph7yKg6xJXOEwcLJvJQfdueUt/view?usp=sharing

## 🏗️ Estrutura do Projeto

```
ebacshop/
├── .github/                  # Configurações do GitHub, workflows de CI
├── tests/
│   ├── e2e/                  # Testes end-to-end
│   ├── pages/                # Page Objects
│   └── support/              # Utilitários e configurações
├── evidencias/                 # Pasta de evidências (vídeos, screenshots etc.)
├── .env                      # Variáveis de ambiente
├── package.json              # Dependências e scripts
├── playwright.config.js      # Configuração do Playwright
└── test-results/              # Resultados de execuções (screenshots, vídeos etc.)

```

## 📦 Desafio de Qualidade

**Cenário:** “Às vezes, o cliente paga, mas o pedido não aparece na tela de ‘Meus Pedidos’.” Você não tem acesso ao código-fonte. Possui apenas acesso ao ambiente de produção, logs básicos e apoio dos times de Produto e Backend.

**Pergunta:** Qual seria sua primeira ação para investigar esse problema e por quê? Detalhe sua hipótese inicial e como reduziria a incerteza rapidamente

**Resposta**

```bash
Abordagem Inicial

01 -Reprodução do problema de forma controlada em produção

-Registrar o fluxo de ponta-ponta até o pagamento
-Validar se o pagamento de fato foi aprovado
-Em que momento do fluxo ele acontece
-Verificar a tela de “Meus pedidos” para saber se algum problema de cachê ou atualização de retorno dos dados consumidos(Front-End)

Redução da Incerteza

02 - Analisar Logs

-Verificar ID do pedido
-Se a transação tem algum ID de pagamento
-ID do usuário
-Qual status code da response retornada
-Qual payload foi enviado
-Erro de timeout após pagamento

03 - Colaboração com Back-End e Produto

-Trabalhar junto com Backend e Produto para correlacionar dados e simular o fluxo juntamente e tentar identificar dependências assíncronas e possíveis falhas
-Verificar frequência do problema
-Quais as condições específicas que ocorre o problema?
   Tipo de pagamento
   Volume de dados
   Horário
   
04 - Tentativa de Isolar a falha

-Caso o pedido não exista: Passível de problema na integração verificar e alinhar com time de back-end
-Caso o pedido exista, porém, não aparece para o usuário: Validar com o front-end se a API está sendo consumida.


```

## 📦 Análise de Qualidade

Para leitura do documento:

```bash
Encontra-se dentro pasta **evidencias** no repositorio com nome : "Analise de Qualidade.pdf"
```


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✉️ Contato

Seu Nome - [ltsantiago](https://github.com/ltsantiago) - Seu emai: ltsantiago88@gmail.com

[⬆ Voltar ao topo](#-saucedemo-e2e-test-automation)
