const TARIFAS_REGIAO = {
    "residencial-normal": {
        minimoAgua: 40.42,
        minimoEsgoto: 32.42,
        faixas: [
            { limite: 10, agua: 0.00, esgoto: 0.00 }, 
            { limite: 20, agua: 5.69, esgoto: 4.49 },
            { limite: 50, agua: 8.74, esgoto: 6.99 },
            { limite: Infinity, agua: 10.46, esgoto: 8.33 }
        ]
    },
    "residencial-social": {
        minimoAgua: 20.21,
        minimoEsgoto: 16.21,
        faixas: [
            { limite: 10, agua: 0.00, esgoto: 0.00 },
            { limite: 15, agua: 2.85, esgoto: 2.25 },
            { limite: 20, agua: 5.69, esgoto: 4.49 },
            { limite: 50, agua: 8.74, esgoto: 6.99 },
            { limite: Infinity, agua: 10.46, esgoto: 8.33 }
        ]
    },
    "comercial": {
        minimoAgua: 81.57,
        minimoEsgoto: 65.25,
        faixas: [
            { limite: 10, agua: 0.00, esgoto: 0.00 },
            { limite: 20, agua: 9.70, esgoto: 7.70 },
            { limite: 50, agua: 15.68, esgoto: 12.53 },
            { limite: Infinity, agua: 18.41, esgoto: 14.68 }
        ]
    }
};

document.getElementById('form-calculadora').addEventListener('submit', function(e) {
    e.preventDefault();

    const consumoTotal = parseFloat(document.getElementById('input-consumo').value);
    const economias = parseInt(document.getElementById('input-economias').value) || 1;
    const dias = parseInt(document.getElementById('input-periodo').value) || 30;
    const categoria = document.getElementById('select-fornecimento').value;
    const tipoLigacao = document.getElementById('select-ligacao').value;

    const resultado = processarCalculo(consumoTotal, economias, dias, categoria, tipoLigacao);

    document.getElementById('res-consumo-economia').innerText = `${resultado.consumoPorEconomia} m³`;
    document.getElementById('res-valor-agua').innerText = `R$ ${resultado.valorAgua}`;
    document.getElementById('res-valor-esgoto').innerText = `R$ ${resultado.valorEsgoto}`;
    document.getElementById('res-total-geral').innerText = `R$ ${resultado.totalGeral}`;
});

function processarCalculo(consumoTotal, economias, dias, categoria, tipoLigacao) {
    const config = TARIFAS_REGIAO[categoria];
    if (!config) return;

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