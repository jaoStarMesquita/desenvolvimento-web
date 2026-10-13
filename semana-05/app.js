// SEMANA 05 — OBJETOS, DADOS E ASSINCRONISMO
// ==========================================
// BLOCO 1 — VALIDAÇÃO E RESUMO DE PEDIDOS
const pedidos = [
    { id: 1, cliente: "João", valor: 150.00, pago: true },
    { id: 2, cliente: "Maria", valor: 89.90, pago: false },
    { id: 3, cliente: "Pedro", valor: 230.50, pago: true },
    { id: 4, cliente: "Ana", valor: 75.00, pago: true }
];

const pedidosValidos = pedidos.filter(function(pedido) {
    return (
        Number.isFinite(pedido.id) &&
        typeof pedido.cliente === "string" &&
        pedido.cliente.trim() !== "" &&
        Number.isFinite(pedido.valor) &&
        pedido.valor >= 0 &&
        typeof pedido.pago === "boolean"
    );
});

const pedidosPagos = pedidosValidos.filter(function(pedido) {
    return pedido.pago === true;
});

const totalVendas = pedidosPagos.reduce(function(total, pedido) {
    return total + pedido.valor;
}, 0);

const resultadoPedidos = document.querySelector("#resultado-pedidos");

resultadoPedidos.innerHTML = "";

const tituloPedidos = document.createElement("h3");
tituloPedidos.textContent = "Pedidos pagos";
resultadoPedidos.append(tituloPedidos);

pedidosPagos.forEach(function(pedido) {
    const item = document.createElement("p");
    item.textContent =
        `Pedido #${pedido.id} — ${pedido.cliente}: ` +
        pedido.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    resultadoPedidos.append(item);
});

const totalElement = document.createElement("p");
totalElement.textContent =
    `Total recebido: ${totalVendas.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}`;

resultadoPedidos.append(totalElement);

console.log("Pedidos válidos:", pedidosValidos);
console.log("Pedidos pagos:", pedidosPagos);
console.log("Total recebido:", totalVendas);
// BLOCO 2 — CONSULTA DE CEP COM VIACEP
const formCep = document.querySelector("#form-cep");
const campoCep = document.querySelector("#cep");
const resultadoCep = document.querySelector("#resultado-cep");

formCep.addEventListener("submit", async function(evento) {
    evento.preventDefault();

    const cep = campoCep.value.replace(/\D/g, "");

    resultadoCep.replaceChildren();

    if (!/^\d{8}$/.test(cep)) {
        mostrarMensagem(
            resultadoCep,
            "Digite um CEP válido com 8 números.",
            "erro"
        );
        return;
    }

    mostrarMensagem(resultadoCep, "Consultando CEP...", "mensagem");

    try {
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível consultar o CEP.");
        }

        const endereco = await resposta.json();

        if (endereco.erro) {
            mostrarMensagem(
                resultadoCep,
                "CEP não encontrado. Confira os números e tente novamente.",
                "erro"
            );
            return;
        }

        resultadoCep.replaceChildren();

        adicionarCampo(resultadoCep, "CEP", endereco.cep);
        adicionarCampo(resultadoCep, "Logradouro", endereco.logradouro);
        adicionarCampo(resultadoCep, "Bairro", endereco.bairro);
        adicionarCampo(resultadoCep, "Cidade", endereco.localidade);
        adicionarCampo(resultadoCep, "Estado", endereco.uf);

        resultadoCep.classList.add("sucesso");

        console.log("Endereço encontrado:", endereco);

    } catch (erro) {
        mostrarMensagem(
            resultadoCep,
            "Erro ao consultar o CEP. Verifique sua conexão e tente novamente.",
            "erro"
        );

        console.error("Erro na consulta de CEP:", erro);
    }
});
// BLOCO 3 — MINI POKÉDEX COM POKEAPI
const formPokemon = document.querySelector("#form-pokemon");
const campoPokemon = document.querySelector("#pokemon");
const resultadoPokemon = document.querySelector("#resultado-pokemon");

formPokemon.addEventListener("submit", async function(evento) {
    evento.preventDefault();

    const busca = campoPokemon.value.trim().toLowerCase();

    resultadoPokemon.replaceChildren();
    resultadoPokemon.classList.remove("erro", "sucesso");

    if (!busca) {
        mostrarMensagem(
            resultadoPokemon,
            "Digite o nome ou número de um Pokémon.",
            "erro"
        );
        return;
    }

    mostrarMensagem(resultadoPokemon, "Buscando Pokémon...", "mensagem");

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(busca)}`
        );

        if (resposta.status === 404) {
            mostrarMensagem(
                resultadoPokemon,
                "Pokémon não encontrado. Confira o nome ou número.",
                "erro"
            );
            return;
        }

        if (!resposta.ok) {
            throw new Error("Falha ao consultar a PokéAPI.");
        }

        const pokemon = await resposta.json();

        resultadoPokemon.replaceChildren();
        resultadoPokemon.classList.remove("erro");
        resultadoPokemon.classList.add("sucesso");

        const container = document.createElement("div");
        container.classList.add("pokemon");

        const imagem = document.createElement("img");
        imagem.src =
            pokemon.sprites.front_default ||
            pokemon.sprites.other?.["official-artwork"]?.front_default ||
            "";

        imagem.alt = `Imagem de ${pokemon.name}`;

        if (imagem.src) {
            container.append(imagem);
        }

        const informacoes = document.createElement("div");

        const nome = document.createElement("h3");
        nome.textContent =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        const numero = document.createElement("p");
        numero.textContent = `Número: #${pokemon.id}`;

        const altura = document.createElement("p");
        altura.textContent = `Altura: ${pokemon.height / 10} m`;

        const peso = document.createElement("p");
        peso.textContent = `Peso: ${pokemon.weight / 10} kg`;

        const tipos = document.createElement("p");
        tipos.textContent =
            "Tipo(s): " +
            pokemon.types
                .map(function(item) {
                    return item.type.name;
                })
                .join(", ");

        informacoes.append(nome, numero, altura, peso, tipos);
        container.append(informacoes);
        resultadoPokemon.append(container);

        console.log("Pokémon encontrado:", pokemon);

    } catch (erro) {
        mostrarMensagem(
            resultadoPokemon,
            "Não foi possível buscar o Pokémon. Verifique sua conexão e tente novamente.",
            "erro"
        );

        console.error("Erro na PokéAPI:", erro);
    }
});
// FUNÇÕES AUXILIARES
function mostrarMensagem(elemento, mensagem, classe) {
    elemento.replaceChildren();
    elemento.classList.remove("erro", "sucesso");
    elemento.classList.add(classe);

    const paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;

    elemento.append(paragrafo);
}

function adicionarCampo(elemento, rotulo, valor) {
    const linha = document.createElement("p");
    const titulo = document.createElement("strong");

    titulo.textContent = `${rotulo}: `;
    linha.append(titulo, document.createTextNode(valor || "Não informado"));

    elemento.append(linha);
}
