// BLOCO 1 — ARRAYS E MÉTODOS

console.log("===== BLOCO 1: ARRAYS =====");

// forEach e map com nomes
const nomes = ["João", "Maria", "Pedro"];

nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);

// filter e reduce com preços
const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(function(preco) {
    return preco > 20;
});

const somaPrecos = precos.reduce(function(total, preco) {
    return total + preco;
}, 0);

console.log("Preços acima de 20:", precosAcimaDe20);
console.log("Soma dos preços:", somaPrecos);

// Métodos com objetos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 45 }
];

const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

const produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

const totalProdutos = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos abaixo de R$ 50:", produtosBaratos);
console.log("Valor total dos produtos:", totalProdutos);

produtos.forEach(function(produto) {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


// BLOCO 2 — MANIPULAÇÃO DO DOM
console.log("===== BLOCO 2: DOM =====");
// Selecionar o título e alterar o texto
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do João Vitor";
// Selecionar todos os parágrafos
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(function(paragrafo) {
    console.log("Texto do parágrafo:", paragrafo.textContent);
});
// Selecionar a lista
const lista = document.querySelector("#lista");
// Inserir dois itens sem perder os três itens que já estavam no HTML
lista.innerHTML += `
    <li>Item adicionado com innerHTML 1</li>
    <li>Item adicionado com innerHTML 2</li>
`;
// Criar o terceiro item com JavaScript
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);
terceiroItem.classList.add("destaque");
console.log(
    "O terceiro item tem a classe destaque?",
    terceiroItem.classList.contains("destaque")
);
// Criar tarefas usando forEach
const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];
tarefas.forEach(function(tarefa) {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
});
// Marcar o primeiro item da lista como feito
const primeiroItem = lista.querySelector("li");
primeiroItem.classList.add("feito");
// Imprimir a quantidade total de itens
console.log(
    "Quantidade total de itens:",
    lista.querySelectorAll("li").length
);
// BLOCO 3 — EVENTOS
console.log("===== BLOCO 3: EVENTOS =====");
const botao = document.querySelector("#botao");
const campoNome = document.querySelector("#nome");
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");
// Evento de clique
botao.addEventListener("click", function() {
    console.log("Clicou!");
});
// Evento ao passar o mouse
botao.addEventListener("mouseover", function() {
    botao.textContent = "Pode clicar!";
});
// Evento ao soltar uma tecla
campoNome.addEventListener("keyup", function() {
    console.log("Nome digitado:", campoNome.value);
});
// EVENT DELEGATION
// Um único listener controla os cliques em todos os itens,
// inclusive aqueles criados depois pelo JavaScript.
lista.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});

// Criar um item dinamicamente para testar a delegação
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado dinamicamente";
lista.append(itemDinamico);
// FORMULÁRIO DE NOVAS TAREFAS
formulario.addEventListener("submit", function(e) {
    // Evita que a página recarregue
    e.preventDefault();
    // Remove espaços extras do início e do final
    const textoTarefa = campoTarefa.value.trim();
    // Não adiciona tarefas vazias
    if (textoTarefa === "") {
        return;
    }
    // Cria e adiciona a nova tarefa
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;
    lista.append(novaTarefa);
    // Limpa o campo após adicionar
    campoTarefa.value = "";
    campoTarefa.focus();
    console.log("Nova tarefa adicionada:", textoTarefa);
});
