# Semana 05 — Objetos, Dados e Assincronismo

> Praticando JavaScript com dados, requisições e APIs externas.

## Sobre o projeto

Nesta atividade, trabalhei com objetos e arrays para organizar informações de pedidos e desenvolvi duas consultas utilizando APIs: uma para buscar endereços pelo CEP e outra para pesquisar Pokémon.

## Resumo de pedidos

Utilizei `filter()` para selecionar os pedidos pagos e `reduce()` para calcular o valor total recebido. Também fiz validações para evitar dados inválidos nos pedidos.

## Consulta de CEP

A consulta utiliza a API ViaCEP para buscar informações de um endereço a partir do CEP digitado.

- `fetch()` para realizar a requisição.
- `async/await` para trabalhar com operações assíncronas.
- `try/catch` para tratar possíveis erros.
- Validação do CEP antes de fazer a consulta.

## Mini Pokédex

A Pokédex utiliza a PokéAPI para buscar informações de um Pokémon pelo nome ou número, exibindo sua imagem, altura, peso e tipos.

Também foram tratados os estados de carregamento, os resultados não encontrados e os erros de conexão.

## Reflexão — Por que usar `Promise.all`?

Quando usamos vários `await` seguidos, uma operação espera a anterior terminar. Se as operações forem independentes, isso pode aumentar o tempo de espera.

Com `Promise.all`, podemos iniciar várias operações assíncronas e aguardar os resultados em conjunto. Isso costuma ser mais rápido quando dependemos de várias requisições de rede.

Por outro lado, se uma das Promises rejeitar, o `Promise.all` rejeita também. Por isso, é importante tratar os erros.

## Tecnologias utilizadas

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="38" alt="HTML5">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="38" alt="CSS3">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="38" alt="JavaScript">
</p>

- HTML5 e CSS3
- JavaScript
- ViaCEP API
- PokéAPI

## ▶️ Como executar

1. Abra o arquivo `index.html` em um navegador.
2. Tenha conexão com a internet para consultar as APIs.
3. Consulte um CEP ou pesquise um Pokémon.
4. Pressione `F12` para acompanhar os registros e erros no Console.

---

*Atividade da disciplina de Desenvolvimento Web — Semana 05.*
