const orcamentos = document.querySelectorAll(".orcamento");

orcamentos.forEach(function(orcamento) {

    const resumo = orcamento.querySelector(".orcamento-resumo");

    resumo.addEventListener("click", function() {
        orcamento.classList.toggle("aberto");
    });

});

function carregarOrcamentos() {
    fetch("http://localhost:8080/orcamentos")
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(orcamentos) {
            const listaOrcamentos = document.getElementById("listaOrcamentos");

            listaOrcamentos.innerHTML = "";

            orcamentos.forEach(function(orcamento) {
                listaOrcamentos.innerHTML += `
                    <article class="orcamento">
                        <div class="orcamento-resumo">
                            <h2>Orçamento #${orcamento.id}</h2>
                            <p>${formatarData(orcamento.dataEntrada)}</p>
                            <p>Cliente: ${orcamento.nomeCliente}</p>
                            <p>Mecânico: ${orcamento.codigoFuncionario}</p>
                            <p>Status: ${orcamento.status}</p>
                        </div>
                        <div class="orcamento-detalhes">
                            <h3>Cliente</h3>
                            <p>Nome: ${orcamento.nomeCliente}</p>
                            <p>Telefone: ${orcamento.telefoneCliente}</p>
                            <p>E-mail: ${orcamento.emailCliente}</p>

                            <h3>Veículo</h3>
                            <p>Placa: ${orcamento.placaVeiculo}</p>
                            <p>Chassi: ${orcamento.chassiVeiculo}</p>
                            <p>KM: ${orcamento.kmVeiculo}</p>

                            <h3>Relato do cliente</h3>
                            <p>${orcamento.relatoCliente}</p>

                            <h3>Serviços e peças</h3>
                            <div class="item-orcamento">
                                <p>Serviços e peças serão carregados aqui.</p>
                            </div>

                            <h3>Total</h3>
                            <p>R$ ${orcamento.total.toFixed(2).replace(".", ",")}</p>
                        </div>
                    </article>
                `;
            });

            const orcamentosTela = document.querySelectorAll(".orcamento");

            orcamentosTela.forEach(function(orcamento) {
                const resumo = orcamento.querySelector(".orcamento-resumo");

                resumo.addEventListener("click", function() {
                    orcamento.classList.toggle("aberto");
                });
            });
        });
}

function formatarData(data) {
    if (!data) {
        return "-";
    }
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

carregarOrcamentos();