# Atividades de Desenvolvimento Web

Repositório destinado às atividades práticas da disciplina de Desenvolvimento Web, com exercícios de HTML, CSS e JavaScript.


<h2>📚 Atividades desenvolvidas</h2>

<h3>🧱 Semana 01 — HTML</h3>
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="22" alt="HTML5">
  Estrutura de um blog, elementos HTML e formulário de inscrição.
</p>

<h3>🎨 Semana 02 — CSS e Flexbox</h3>
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="22" alt="CSS3">
  Estilização do formulário, cores, bordas, espaçamentos e organização com Flexbox.
</p>

<h3>⚡ Semana 03 — Introdução ao JavaScript</h3>
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="22" alt="JavaScript">
  Variáveis, tipos primitivos, funções, hoisting, condicionais e laços de repetição.
</p>

<h3>🧩 Semana 04 — Arrays, DOM e Eventos</h3>
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="22" alt="JavaScript">
  Métodos <code>map</code>, <code>filter</code>, <code>reduce</code> e <code>forEach</code>, manipulação do DOM, eventos, Event Delegation e formulários dinâmicos.
</p>

<h3>🌐 Semana 05 — Objetos, Dados e Assincronismo</h3>
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="22" alt="JavaScript">
  Validação de dados, Promises, <code>async/await</code>, Fetch API, consumo da ViaCEP e desenvolvimento de uma mini Pokédex com a PokéAPI.
</p>


<h2>Tecnologias e ferramentas</h2>

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
