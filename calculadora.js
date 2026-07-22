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

    const consumoTotal = parseFloat(document.getElementById('input-consumo').value) || 0;
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

    const minimo = tarifasDaRegiao.minimos ? tarifasDaRegiao.minimos[categoria] : null;
    const faixas = tarifasDaRegiao.faixas ? tarifasDaRegiao.faixas[categoria] : null;

    if (!minimo || !faixas) {
        alert("Configuração de tarifa não encontrada para este fornecimento.");
        return;
    }

    const configTarifa = { 
        minimoAgua: minimo.agua,
        minimoEsgoto: minimo.esgoto,
        faixas: faixas 
    };

    const tipoLigacaoNormalizado = tipoLigacao.toLowerCase().includes("esgoto") ? "agua-esgoto" : "agua";

    const resultado = processarCalculo(consumoTotal, economias, dias, configTarifa, tipoLigacaoNormalizado);

    document.getElementById('res-consumo-economia').innerText = `${resultado.consumoPorEconomia.toFixed(2)} m³`;
    document.getElementById('res-valor-agua').innerText = `R$ ${resultado.valorAgua.toFixed(2).replace('.', ',')}`;
    document.getElementById('res-valor-esgoto').innerText = `R$ ${resultado.valorEsgoto.toFixed(2).replace('.', ',')}`;
    document.getElementById('res-total-geral').innerText = `R$ ${resultado.totalGeral.toFixed(2).replace('.', ',')}`;
});


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

    const valorAguaTotal = aguaPorEconomia * economias;
    const valorEsgotoTotal = esgotoPorEconomia * economias;
    const totalGeral = valorAguaTotal + valorEsgotoTotal;

    return {
        consumoPorEconomia: consumoPorEconomia,
        valorAgua: valorAguaTotal,
        valorEsgoto: valorEsgotoTotal,
        totalGeral: totalGeral
    };
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
        "residencial-normal": "Residencial Normal",
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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-calculadora');
    const btnLimpar = document.getElementById('btn-limpar');
    const selectFornecimento = document.getElementById('select-fornecimento');

    const resConsumoEconomia = document.getElementById('res-consumo-economia');
    const resValorAgua = document.getElementById('res-valor-agua');
    const resValorEsgoto = document.getElementById('res-valor-esgoto');
    const resTotalGeral = document.getElementById('res-total-geral');

    if (btnLimpar) {
        btnLimpar.addEventListener('click', () => {
            form.reset();

            if (selectFornecimento) {
                selectFornecimento.innerHTML = '<option value="" disabled selected>Selecione a cidade primeiro</option>';
                selectFornecimento.disabled = true;
            }

            if (resConsumoEconomia) resConsumoEconomia.textContent = '0.00 m³';
            if (resValorAgua) resValorAgua.textContent = 'R$ 0,00';
            if (resValorEsgoto) resValorEsgoto.textContent = 'R$ 0,00';
            if (resTotalGeral) resTotalGeral.textContent = 'R$ 0,00';
        });
    }
});