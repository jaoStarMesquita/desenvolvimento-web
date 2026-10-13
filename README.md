# Atividades de Desenvolvimento Web

Repositório destinado às atividades práticas da disciplina de Desenvolvimento Web, com exercícios de HTML, CSS e JavaScript.

## 📚 Atividades

### Semana 01 — HTML
- Estruturação de uma página de blog.
- Criação de formulário de inscrição.
- Utilização de elementos HTML.

### Semana 02 — CSS e Flexbox
- Estilização do formulário de inscrição.
- Aplicação de cores, bordas, espaçamentos e fontes.
- Organização dos campos com CSS Flexbox.
- Adaptação do formulário para telas menores.

### Semana 03 — Introdução ao JavaScript
- Variáveis, constantes e tipos primitivos.
- Operador `typeof`, Template Literals e concatenação.
- Funções declaradas, expressões e arrow functions.
- Hoisting e parâmetros padrão.
- Estruturas condicionais e laços de repetição.

### Semana 04 — Arrays, DOM e Eventos
- Utilização de `forEach`, `map`, `filter` e `reduce`.
- Manipulação do DOM com `querySelector`, `createElement` e `classList`.
- Tratamento de eventos com `addEventListener`.
- Event Delegation para lidar com elementos criados dinamicamente.
- Manipulação de formulários e listas de tarefas.

### Semana 05 — Objetos, Dados e Assincronismo
- Validação e filtragem de pedidos utilizando arrays de objetos.
- Cálculo do faturamento com `reduce` e formatação de valores com `toFixed(2)`.
- Consumo da API ViaCEP utilizando `fetch`, Promises e `async/await`.
- Validação de CEP e tratamento dos estados de carregamento, erro, não encontrado e sucesso.
- Desenvolvimento de uma mini Pokédex com a API PokéAPI.
- Manipulação dinâmica do DOM com `createElement` e `textContent`.
- Utilização de `response.ok` para tratamento de erros HTTP.

##  Tecnologias utilizadas

<h2>🛠️ Tecnologias e ferramentas</h2>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="55" alt="HTML5" title="HTML5">
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="55" alt="CSS3" title="CSS3">
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="55" alt="JavaScript" title="JavaScript">
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="55" alt="Node.js" title="Node.js">
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="55" alt="Git" title="Git">
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="55" alt="GitHub" title="GitHub">
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="55" alt="Visual Studio Code" title="Visual Studio Code">
</p>

<p align="center">
  <strong>HTML5 · CSS3 · JavaScript · Node.js · Git · GitHub · VS Code</strong>
</p>

<p align="center">
  <strong>Recursos estudados:</strong><br>
  Flexbox · DOM · Eventos · Arrays · Promises · Async/Await · Fetch API · APIs REST · ViaCEP · PokéAPI
</p>


## ▶️ Como executar

1. Abra o arquivo `index.html` no navegador.
2. Para testar as funcionalidades, abra o Console do navegador com `F12`.
3. Utilize um servidor local, como o servidor do Codespaces, caso necessário para executar o projeto.
4. Certifique-se de estar conectado à internet para consultar as APIs externas.

## 💭 Reflexão — Por que `Promise.all` pode ser mais rápido que vários `await` seguidos?

Quando utilizamos vários `await` sequencialmente, cada operação assíncrona espera a conclusão da anterior antes de começar. Isso pode aumentar o tempo total de execução.

Com `Promise.all`, podemos iniciar várias operações assíncronas independentes em paralelo e aguardar que todas sejam concluídas. Dessa forma, o tempo de espera pode ser reduzido, especialmente em requisições de rede.

Porém, se uma das Promises rejeitar, o `Promise.all` rejeita também, mesmo que as outras operações ainda estejam em andamento.

## 🎯 Objetivo

Desenvolver conhecimentos fundamentais de desenvolvimento web, desde a estruturação e estilização de páginas até a programação JavaScript, manipulação do DOM, eventos, consumo de APIs e tratamento de operações assíncronas.
