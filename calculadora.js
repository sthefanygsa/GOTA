function inicializarCalculadora() {
    const selectCidade = document.getElementById("select-cidade");
    const selectFornecimento = document.getElementById("select-fornecimento");
    const formCalculadora = document.getElementById("form-calculadora");

    if (!selectCidade || !selectFornecimento || !formCalculadora) return;

    selectCidade.innerHTML = "";
    
    const optionPadrao = document.createElement("option");
    optionPadrao.value = "";
    optionPadrao.disabled = true;
    optionPadrao.selected = true;
    optionPadrao.textContent = "Selecione sua cidade";
    selectCidade.appendChild(optionPadrao);

    const todasAsCidades = MAPEAMENTO_CIDADES
        .flatMap(regiao => regiao.cidades)
        .sort((a, b) => a.localeCompare(b, "pt-BR"));

    todasAsCidades.forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade.trim();
        option.textContent = cidade.trim();
        selectCidade.appendChild(option);
    });

    selectCidade.value = "";

    selectFornecimento.innerHTML = '<option value="" disabled selected>Selecione a cidade primeiro</option>';
    selectFornecimento.disabled = true;

    selectCidade.addEventListener("change", () => {
        const cidadeSelecionada = selectCidade.value;
        
        const fornecimentosDaRegiao = gerenciadorTarifas.obterCategoriasDisponiveis(cidadeSelecionada);

        if (fornecimentosDaRegiao.length > 0) {
            selectFornecimento.innerHTML = '<option value="" disabled selected>Selecione o tipo de fornecimento</option>';
            selectFornecimento.disabled = false;

            fornecimentosDaRegiao.forEach(chaveFornecimento => {
                const option = document.createElement("option");
                option.value = chaveFornecimento;
                option.textContent = formatarNomeFornecimento(chaveFornecimento);
                selectFornecimento.appendChild(option);
            });
        } else {
            selectFornecimento.innerHTML = '<option value="" disabled selected>Selecione a cidade primeiro</option>';
            selectFornecimento.disabled = true;
        }
    });

    formCalculadora.addEventListener("submit", (event) => {
        event.preventDefault();

        const consumoTotal = parseFloat(document.getElementById('input-consumo').value);
        const economias = parseInt(document.getElementById('input-economias').value) || 1;
        const dias = parseInt(document.getElementById('input-periodo').value) || 30;
        const cidadeSelecionada = selectCidade.value.trim().toLowerCase();
        const categoria = selectFornecimento.value;
        const tipoLigacao = document.getElementById('select-ligacao').value;

        const regiao = MAPEAMENTO_CIDADES.find(r => 
            r.cidades.some(c => c.trim().toLowerCase() === cidadeSelecionada)
        );
        const chaveTabela = regiao ? regiao.tabela : null;

        if (!chaveTabela || !TABELAS_TARIFARIAS[chaveTabela]) {
            alert("Tabela tarifária não encontrada para esta cidade.");
            return;
        }

        const tarifasDaRegiao = TABELAS_TARIFARIAS[chaveTabela];
        const configTarifa = tarifasDaRegiao[categoria];

        if (!configTarifa) {
            alert("Configuração de tarifa não encontrada para este fornecimento.");
            return;
        }

        const resultado = processarCalculo(consumoTotal, economias, dias, configTarifa, tipoLigacao);

        document.getElementById('res-consumo-economia').innerText = `${resultado.consumoPorEconomia} m³`;
        document.getElementById('res-valor-agua').innerText = `R$ ${resultado.valorAgua}`;
        document.getElementById('res-valor-esgoto').innerText = `R$ ${resultado.valorEsgoto}`;
        document.getElementById('res-total-geral').innerText = `R$ ${resultado.totalGeral}`;
    });
}

function processarCalculo(consumoTotal, economias, dias, config, tipoLigacao) {
    const consumoPorEconomia = consumoTotal / economias;
    
    let aguaPorEconomia = config.minimoAgua;
    let esgotoPorEconomia = (tipoLigacao === "agua-esgoto") ? config.minimoEsgoto : 0;

    if (consumoPorEconomia > 10) {
        let consumoRestante = consumoPorEconomia - 10;
        let limiteAnterior = 10;

        for (let i = 1; i < config.faixas.length; i++) {
            const faixa = config.faixas[i];
            const larguraFaixa = faixa.limite - limiteAnterior;

            if (consumoRestante <= larguraFaixa) {
                aguaPorEconomia += consumoRestante * faixa.agua;
                if (tipoLigacao === "agua-esgoto") {
                    esgotoPorEconomia += consumoRestante * faixa.esgoto;
                }
                break;
            } else {
                aguaPorEconomia += larguraFaixa * faixa.agua;
                if (tipoLigacao === "agua-esgoto") {
                    esgotoPorEconomia += larguraFaixa * faixa.esgoto;
                }
                consumoRestante -= larguraFaixa;
                limiteAnterior = faixa.limite;
            }
        }
    }

    const fatorTempo = dias / 30;
    
    const totalAgua = aguaPorEconomia * economias * fatorTempo;
    const totalEsgoto = esgotoPorEconomia * economias * fatorTempo;
    const totalGeral = totalAgua + totalEsgoto;

    return {
        consumoPorEconomia: consumoPorEconomia.toFixed(2),
        valorAgua: totalAgua.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        valorEsgoto: totalEsgoto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        totalGeral: totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    };
}

function formatarNomeFornecimento(slug) {
    const traducoes = {
        "residencial-vulneravel": "Residencial Vulnerável",
        "residencial-social": "Residencial Social",
        "residencial-social-ii": "Residencial Social II",
        "residencial": "Residencial",
        "residencial-especial": "Residencial Especial",
        "comercial-industrial-publica-sem-contrato": "Comercial / Industrial / Pública sem Contrato",
        "comercial-entidades-de-assistencia-social": "Comercial: Entidades de Assistência Social",
        "comercial-especial": "Comercial Especial",
        "comercial": "Comercial",
        "publica-com-contrato": "Pública com Contrato",
        "publica-municipal": "Pública Municipal",
        "publico": "Público",
        "industrial": "Industrial",
        "mista": "Mista",
        "residencial-rural-sem-medidor": "Residencial Rural (sem medidor)",
        "residencial-rural": "Residencial Rural"
    };

    return traducoes[slug] || slug
        .split('-')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
}

document.addEventListener("DOMContentLoaded", inicializarCalculadora);