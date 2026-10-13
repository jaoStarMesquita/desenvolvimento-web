
console.log("===== BLOCO 1: FUNDAMENTOS E VARIÁVEIS =====");

// 1. Variável let: adicionar 10 pontos
let pontos = 20;
pontos = pontos + 10;
console.log("Pontos:", pontos);

// 2. Constante: demonstrar erro de reatribuição
const MAX_PONTOS = 100;
console.log("Máximo de pontos:", MAX_PONTOS);

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao reatribuir MAX_PONTOS:", erro.name);
    console.log("Motivo: uma constante não pode receber outro valor.");
}

// 3. Tipos primitivos e typeof
const texto = "JavaScript";
const numero = 25;
const ativo = true;
let indefinido;
const nulo = null;

console.log("Texto:", typeof texto);
console.log("Número:", typeof numero);
console.log("Boolean:", typeof ativo);
console.log("Undefined:", typeof indefinido);
console.log("Null:", typeof nulo); // Retorna "object" por um bug histórico.

// 4. Template Literals e concatenação
const nome = "João";
const linguagem = "JavaScript";

const fraseTemplate = `Olá, ${nome}! Você está aprendendo ${linguagem}.`;
const fraseConcatenada =
    "Olá, " + nome + "! Você está aprendendo " + linguagem + ".";

console.log("Template Literals:", fraseTemplate);
console.log("Concatenação:", fraseConcatenada);


console.log("===== BLOCO 2: FUNÇÕES =====");

// 1. Função declarada: chamada antes da declaração (hoisting)
console.log("Maior de idade aos 20 anos:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// 2. Função de expressão: tentativa de chamada antes da declaração
try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro na função de expressão:", erro.name);
    console.log("Motivo: a constante ainda não foi inicializada.");
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(
    "Função de expressão após declaração:",
    ehMaiorDeIdadeExpressao(20)
);

// 3. Função dobro em três formas

// Função declarada
function dobro(n) {
    return n * 2;
}

// Função de expressão
const dobroExpressao = function (n) {
    return n * 2;
};

// Arrow function
const dobroArrow = n => n * 2;

console.log("Dobro com função declarada:", dobro(5));
console.log("Dobro com expressão:", dobroExpressao(5));
console.log("Dobro com arrow function:", dobroArrow(5));

// 4. Parâmetro com valor padrão
function dobroPadrao(n = 1) {
    return n * 2;
}

console.log("Dobro de 4:", dobroPadrao(4));
console.log("Dobro sem argumento:", dobroPadrao());


console.log("===== BLOCO 3: CONTROLE DE FLUXO =====");

// 1. Classificação de nota
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));

// 2. Semáforo com switch
const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

// 3. Tabuada do 5 com for
console.log("--- Tabuada do 5 ---");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva com while
console.log("--- Contagem regressiva ---");

let contagem = 5;

while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}

// 5. Números pares e ímpares de 1 a 20 com for
console.log("--- Pares e ímpares com for ---");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i}: par`);
    } else {
        console.log(`${i}: ímpar`);
    }
}

// 6. Números pares e ímpares de 1 a 20 com while
console.log("--- Pares e ímpares com while ---");

let numeroAtual = 1;

while (numeroAtual <= 20) {
    if (numeroAtual % 2 === 0) {
        console.log(`${numeroAtual}: par`);
    } else {
        console.log(`${numeroAtual}: ímpar`);
    }

    numeroAtual++;
}

// 7. Dia da semana com switch
function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido. Digite um número de 1 a 7.";
    }
}

console.log("Dia 2:", diaDaSemana(2));
console.log("Dia 7:", diaDaSemana(7));
console.log("Dia 9:", diaDaSemana(9));

console.log("===== FIM DA ATIVIDADE =====");