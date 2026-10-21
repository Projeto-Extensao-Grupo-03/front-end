const btnInformacoesPessoais = document.getElementById("btn_informacoesPessoais");
const divInformacoesPessoais = document.getElementById("div_informacoesPessoais");
const btnInformacoesVeiculo = document.getElementById("btn_informacoesVeiculo");
const divInformacoesVeiculo = document.getElementById("div_informacoesVeiculo");
const modalCadastrarCliente = document.getElementById("modal_cadastrarCliente");
const btnCadastrarCliente = document.getElementById("btn_cadastrarCliente");
const btnFecharModal = document.getElementById("btn_fecharModal");
const btnCancelarCliente = document.getElementById("btn_cancelarCliente");
const btnConfirmarCliente = document.getElementById("btn_confirmarCliente");
const btnNovoItem = document.getElementById("btn_novoItem");
const listaItens = document.getElementById("lista_itens");
divInformacoesPessoais.style.display = "none";
divInformacoesVeiculo.style.display = "none";

btnInformacoesPessoais.addEventListener("click", function() {
    if (divInformacoesPessoais.style.display === "none") {
        divInformacoesPessoais.style.display = "grid";
    } else {
        divInformacoesPessoais.style.display = "none";
    }
});

btnInformacoesVeiculo.addEventListener("click", function() {
    if (divInformacoesVeiculo.style.display === "none") {
        divInformacoesVeiculo.style.display = "grid";
    } else {
        divInformacoesVeiculo.style.display = "none";
    }
});

btnCadastrarCliente.addEventListener("click", function() {
    modalCadastrarCliente.classList.add("aberto");
});

btnFecharModal.addEventListener("click", function() {
    modalCadastrarCliente.classList.remove("aberto");
});

btnCancelarCliente.addEventListener("click", function() {
    modalCadastrarCliente.classList.remove("aberto");
});

modalCadastrarCliente.addEventListener("click", function(evento) {
    if (evento.target === modalCadastrarCliente) {
        modalCadastrarCliente.classList.remove("aberto");
    }
});

btnNovoItem.addEventListener("click", function() {
    listaItens.innerHTML += `
        <div class="item-orcamento">
            <input type="number" placeholder="0">
            <input type="text" placeholder="">
            <input type="number" step="0.01" placeholder="">
            <input type="number" step="0.01" placeholder="">
        </div>
    `;
});

btnConfirmarCliente.addEventListener("click", function() {
    const cliente = {
        nome: document.getElementById("input_modalNome").value,
        telefone: document.getElementById("input_modalTelefone").value,
        email: document.getElementById("input_modalEmail").value,
        dataNascimento: document.getElementById("input_modalDataNascimento").value
    };

fetch("http://localhost:8080/clientes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(cliente)
})
.then(function(resposta) {
    if (resposta.ok) {
        return resposta.json();
    }
    throw new Error("Erro ao cadastrar cliente");
})
.then(function(clienteCadastrado) {
    console.log("Cliente cadastrado:", clienteCadastrado);
    alert("Cliente cadastrado com sucesso!");
    modalCadastrarCliente.classList.remove("aberto");
})
.catch(function(erro) {
    console.error(erro);
    alert("Erro ao cadastrar cliente.");
});
});