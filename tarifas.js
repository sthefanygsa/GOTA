const MAPEAMENTO_CIDADES = [
    {
        tabela: "regiao-alto-paranapanema-baixo-tiete",
        cidades: [
            "Adolfo", "Aguaí", "Águas da Prata", "Águas de Santa Bárbara", 
            "Alambari", "Alfredo Marcondes", "Altair", "Alto Alegre", "Alvinlândia", 
            "Álvares Machado", "Álvaro de Carvalho", "Angatuba", "Anhumas", "Aparecida d’Oeste", 
            "Apiaí", "Arandu", "Arco-Íris", "Assis", "Aspásia", "Auriflama", "Avaí", 
            "Avaré", "Balbinos", "Barão de Antonina", "Barra do Chapéu", "Bastos", 
            "Bento de Abreu", "Bernardino de Campos", "Bom Sucesso de Itararé", "Borá", 
            "Brejo Alegre", "Buri", "Buritizal", "Cabreúva", "Caiabu", "Cajuru", 
            "Campina do Monte Alegre", "Campo Limpo Paulista", "Cândido Rodrigues", 
            "Capão Bonito", "Cardoso", "Cássia dos Coqueiros", "Catiguá", "Colômbia", 
            "Coronel Macedo", "Coroados", "Cruzália", "Dirce Reis", "Divinolândia", 
            "Dolcinópolis", "Duartina", "Echaporã", "Elias Fausto", "Emilianópolis", 
            "Espírito Santo do Pinhal", "Espírito Santo do Turvo", "Estrela d’Oeste", 
            "Estrela do Norte", "Euclides da Cunha Paulista", "Fartura", "Fernandópolis", 
            "Fernão", "Fernando Prestes", "Flora Rica", "Floreal", "Flórida Paulista", 
            "Florínea", "Franca", "Gália", "Gabriel Monteiro", "Gastão Vidigal", 
            "General Salgado", "Glicério", "Guapiara", "Guarani d’Oeste", "Guareí", 
            "Guariba", "Guzolândia", "Hortolândia", "Iacri", "Iaras", "Ibirá", 
            "Icém", "Igarapava", "Indiaporã", "Inúbia Paulista", "Irapuã", "Itaí", 
            "Itaberá", "Itapetininga", "Itapeva", "Itapirapuã Paulista", "Itaporanga", 
            "Itararé", "Itatiba", "Itaoca", "Itirapuã", "Itobi", "Itupeva", "Jaborandi", 
            "Jales", "Jarinu", "Jeriquara", "Joanópolis", "Lucélia", "Lucianópolis", 
            "Lourdes", "Luiziânia", "Lupércio", "Lutécia", "Macedônia", "Magda", 
            "Marabá Paulista", "Maracaí", "Mariápolis", "Marinópolis", "Meridiano", 
            "Mesópolis", "Miguelópolis", "Mira Estrela", "Mirante do Paranapanema", 
            "Mococa", "Mombuca", "Monções", "Monte Alto", "Monte Aprazível", "Monte Mor", 
            "Morungaba", "Narandiba", "Nazaré Paulista", "Nhandeara", "Nipoã", 
            "Nova Campina", "Nova Canaã Paulista", "Nova Granada", "Nova Guataporanga", 
            "Nova Luzitânia", "Novo Horizonte", "Óleo", "Onda Verde", "Oriente", 
            "Orindiúva", "Oscar Bressane", "Osvaldo Cruz", "Ouroeste", "Palmares Paulista", 
            "Palmeira d’Oeste", "Paranapanema", "Paranapuã", "Paraguaçu Paulista", 
            "Parapuã", "Paulínia", "Paulistânia", "Paulo de Faria", "Pedra Bela", 
            "Pedranópolis", "Pedregulho", "Pedrinhas Paulista", "Piacatu", "Pilar do Sul", 
            "Pinhalzinho", "Piracaia", "Piraju", "Piratininga", 
            "Piquerobi", "Planalto", "Platina", "Poloni", "Pongaí", "Pontalinda", 
            "Pontes Gestal", "Populina", "Pracinha", "Presidente Alves", "Presidente Bernardes", 
            "Presidente Epitácio", "Quatá", "Queiróz", "Regente Feijó", 
            "Restinga", "Ribeira", "Ribeirão Branco", "Ribeirão Corrente", "Ribeirão do Sul", 
            "Ribeirão dos Índios", "Ribeirão Grande", "Rifaina", "Riolândia", "Riversul", 
            "Rosana", "Rubiácea", "Rubineia", "Sagres", "Saltinho", "Salmourão", 
            "Sandovalina", "Santa Albertina", "Santa Clara d’Oeste", "Santa Cruz da Esperança", 
            "Santa Cruz do Rio Pardo", "Santa Ernestina", "Santa Mercedes", "Santa Rosa de Viterbo", 
            "Santa Salete", "Santana da Ponte Pensa", "Santo Anastácio", "Santo Antonio do Jardim", 
            "Santo Expedito", "São Francisco", "São João da Boa Vista", "São João das Duas Pontes", 
            "São Miguel Arcanjo", "Sarapuí", "Sarutaiá", "Sebastianópolis do Sul", "Serra Azul", 
            "Serra Negra", "Socorro", "Sud Mennucci", "Taciba", "Taguaí", "Tapiratiba", 
            "Tarabaí", "Tarumã", "Taquarituba", "Taquarivaí", "Tejupá", "Teodoro Sampaio", 
            "Terra Roxa", "Timburi", "Três Fronteiras", "Tupã", "Turiúba", "Turmalina", 
            "Ubirajara", "União Paulista", "Urânia", "Uru", "Valentim Gentil", 
            "Vargem", "Várzea Paulista", "Vitória Brasil", "Zacarias"
        ]
    },
    {
        tabela: "regiao-metropolitana-guararema-st-isabel",
        cidades: [
            "Arujá", "Barueri", "Biritiba Mirim", "Caieiras", "Cajamar", 
            "Carapicuíba", "Cotia", "Diadema", "Embu das Artes", "Embu-Guaçu", 
            "Ferraz de Vasconcelos", "Francisco Morato", "Franco da Rocha", "Guararema", 
            "Guarulhos", "Itapecerica da Serra", "Itapevi", "Itaquaquecetuba", "Jandira", 
            "Mairiporã", "Mauá", "Mogi das Cruzes", "Osasco", "Pirapora do Bom Jesus", 
            "Póa", "Ribeirão Pires", "Rio Grande da Serra", "Salesópolis", "Santa Isabel", 
            "Santana de Parnaíba", "Santo André", "São Bernardo do Campo", "São Paulo", 
            "Suzano", "Taboão da Serra", "Vargem Grande Paulista"
        ]
    },
    {
        tabela: "regiao-bragantina",
        cidades: [
            "Bragança Paulista", "Joanópolis", "Nazaré Paulista", "Pedra Bela", 
            "Pinhalzinho", "Piracaia", "Socorro", "Vargem"
        ]
    },
    {
        tabela: "juquitiba-sao-lourenco-da-serra-e-regiao-do-vale-do-ribeira",
        cidades: [
            "Barra do Turvo", "Cajati", "Cananéia", "Eldorado", "Iguape", 
            "Ilha Comprida", "Iporanga", "Itariri", "Jacupiranga", "Juquiá", 
            "Juquitiba", "Miracatu", "Pariquera-Açu", "Pedro de Toledo", "Registro", 
            "São Lourenço da Serra", "Sete Barras", "Tapiraí"
        ]
    },
    {
        tabela: "lins",
        cidades: [
            "Lins"
        ]
    },
    {
        tabela: "adamantina-e-pirapozinho",
        cidades: [
            "Adamantina", "Pirapozinho"
        ]
    },
    {
        tabela: "presidente-prudente",
        cidades: [
            "Presidente Prudente"
        ]
    },
    {
        tabela: "regiao-vale-do-paraiba",
        cidades: [
            "Arapeí", "Bananal", "Caçapava", "Cachoeira Paulista", "Campos do Jordão", 
            "Canas", "Igaratá", "Jambeiro", "Lagoinha", "Lavrinhas", 
            "Lorena", "Monteiro Lobato", "Pindamonhangaba", "Queluz", "Redenção da Serra", 
            "Roseira", "Santa Branca", "Santo Antonio do Pinhal", "São Bento do Sapucaí", "São José dos Campos", 
            "São Luiz do Paraitinga", "Silveiras", "Taubaté", "Tremembé" 
            ]
    },
    {
        tabela: "regiao-baixada-santista",
        cidades: [
            "Bertioga", "Caraguatatuba", "Cubatão", "Guarujá", "Ilhabela", 
            "Itanhaém", "Mongaguá", "Peruíbe", "Praia Grande", "Santos", 
            "São Sebastião", "São Vicente", "Ubatuba"
        ]
    },
    {
        tabela: "olimpia",
        cidades: [
            "Olimpia"
        ]
    }
];

const TABELAS_TARIFARIAS = {
    "regiao-alto-paranapanema-baixo-tiete": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 6.99 },
            "residencial-social": { agua: 11.46, esgoto: 9.16 },
            "residencial-social-ii": { agua: 20.21, esgoto: 16.21 },
            "residencial-normal": { agua: 40.42, esgoto: 32.42 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 65.25 },
            "comercial-assistencial": { agua: 40.78, esgoto: 32.63 },
            "publica-com-contrato": { agua: 61.11, esgoto: 48.93 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 0.88 },
                { limite: 30, agua: 3.67, esgoto: 2.95 },
                { limite: 50, agua: 11.10, esgoto: 8.89 },
                { limite: Infinity, agua: 12.26, esgoto: 9.83 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.98, esgoto: 1.60 },
                { limite: 30, agua: 4.30, esgoto: 3.41 },
                { limite: 50, agua: 6.12, esgoto: 4.94 },
                { limite: Infinity, agua: 7.29, esgoto: 5.88 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.85, esgoto: 2.25 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 9.70, esgoto: 7.70 },
                { limite: 50, agua: 15.68, esgoto: 12.53 },
                { limite: Infinity, agua: 18.41, esgoto: 14.68 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.90, esgoto: 3.84 },
                { limite: 50, agua: 7.90, esgoto: 6.34 },
                { limite: Infinity, agua: 9.22, esgoto: 7.37 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.23, esgoto: 5.82 },
                { limite: 50, agua: 11.82, esgoto: 9.41 },
                { limite: Infinity, agua: 13.77, esgoto: 11.05 }
            ]
        }
    },
    "regiao-metropolitana-guararema-st-isabel": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 8.74 },
            "residencial-social": { agua: 11.46, esgoto: 11.46 },
            "residencial-social-ii": { agua: 20.21, esgoto: 20.21 },
            "residencial-normal": { agua: 40.42, esgoto: 40.42 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 81.57 },
            "comercial-assistencial": { agua: 40.78, esgoto: 40.78 },
            "publica-com-contrato": { agua: 61.11, esgoto: 61.11 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 1.10 },
                { limite: 30, agua: 3.67, esgoto: 3.67 },
                { limite: 50, agua: 11.10, esgoto: 11.10 },
                { limite: Infinity, agua: 12.26, esgoto: 12.26 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 2.18, esgoto: 2.18 },
                { limite: 30, agua: 7.79, esgoto: 7.79 },
                { limite: 50, agua: 11.10, esgoto: 11.10 },
                { limite: Infinity, agua: 12.26, esgoto: 12.26 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 3.20, esgoto: 3.20 },
                { limite: 20, agua: 6.40, esgoto: 6.40 },
                { limite: 50, agua: 15.95, esgoto: 15.95 },
                { limite: Infinity, agua: 17.57, esgoto: 17.57 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 6.40, esgoto: 6.40 },
                { limite: 50, agua: 15.95, esgoto: 15.95 },
                { limite: Infinity, agua: 17.57, esgoto: 17.57 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 15.95, esgoto: 15.95 },
                { limite: 50, agua: 30.57, esgoto: 30.57 },
                { limite: Infinity, agua: 31.84, esgoto: 31.84 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.97, esgoto: 7.97 },
                { limite: 50, agua: 15.34, esgoto: 15.34 },
                { limite: Infinity, agua: 15.94, esgoto: 15.94 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 11.95, esgoto: 11.95 },
                { limite: 50, agua: 22.99, esgoto: 22.99 },
                { limite: Infinity, agua: 23.90, esgoto: 23.90 }
            ]
        }
    },
    "regiao-bragantina": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 6.99 },
            "residencial-social": { agua: 11.46, esgoto: 9.16 },
            "residencial-social-ii": { agua: 20.21, esgoto: 16.21 },
            "residencial-normal": { agua: 40.42, esgoto: 32.42 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 65.25 },
            "comercial-assistencial": { agua: 40.78, esgoto: 32.63 },
            "publica-com-contrato": { agua: 61.11, esgoto: 48.93 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 0.88 },
                { limite: 30, agua: 3.67, esgoto: 2.95 },
                { limite: 50, agua: 11.10, esgoto: 8.89 },
                { limite: Infinity, agua: 12.26, esgoto: 9.83 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.98, esgoto: 1.60 },
                { limite: 30, agua: 4.30, esgoto: 3.41 },
                { limite: 50, agua: 6.12, esgoto: 4.94 },
                { limite: Infinity, agua: 7.29, esgoto: 5.88 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.85, esgoto: 2.25 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 9.70, esgoto: 7.70 },
                { limite: 50, agua: 15.68, esgoto: 12.53 },
                { limite: Infinity, agua: 18.41, esgoto: 14.68 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.90, esgoto: 3.84 },
                { limite: 50, agua: 7.90, esgoto: 6.34 },
                { limite: Infinity, agua: 9.22, esgoto: 7.37 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.23, esgoto: 5.82 },
                { limite: 50, agua: 11.82, esgoto: 9.41 },
                { limite: Infinity, agua: 13.77, esgoto: 11.05 }
            ]
        }
    },
    "juquitiba-sao-lourenco-da-serra-e-regiao-do-vale-do-ribeira": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 8.74 },
            "residencial-social": { agua: 11.46, esgoto: 11.46 },
            "residencial-social-ii": { agua: 20.21, esgoto: 20.21 },
            "residencial-normal": { agua: 40.42, esgoto: 40.42 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 81.57 },
            "comercial-assistencial": { agua: 40.78, esgoto: 40.78 },
            "publica-com-contrato": { agua: 61.11, esgoto: 61.11 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 1.10 },
                { limite: 30, agua: 3.67, esgoto: 3.67 },
                { limite: 50, agua: 11.10, esgoto: 11.10 },
                { limite: Infinity, agua: 12.26, esgoto: 12.26 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.98, esgoto: 1.98 },
                { limite: 30, agua: 4.30, esgoto: 4.30 },
                { limite: 50, agua: 6.12, esgoto: 6.12 },
                { limite: Infinity, agua: 7.29, esgoto: 7.29 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.85, esgoto: 2.85 },
                { limite: 20, agua: 5.69, esgoto: 5.69 },
                { limite: 50, agua: 8.74, esgoto: 8.74 },
                { limite: Infinity, agua: 10.46, esgoto: 10.46 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.69, esgoto: 5.69 },
                { limite: 50, agua: 8.74, esgoto: 8.74 },
                { limite: Infinity, agua: 10.46, esgoto: 10.46 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 9.70, esgoto: 9.70 },
                { limite: 50, agua: 16.37, esgoto: 16.37 },
                { limite: Infinity, agua: 20.75, esgoto: 20.75 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.90, esgoto: 4.90 },
                { limite: 50, agua: 8.24, esgoto: 8.24 },
                { limite: Infinity, agua: 10.45, esgoto: 10.45 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.23, esgoto: 7.23 },
                { limite: 50, agua: 12.31, esgoto: 12.31 },
                { limite: Infinity, agua: 15.62, esgoto: 15.62 }
            ]
        }
    },
    "lins": {
        minimos: {
            "residencial-vulneravel": { agua: 7.55, esgoto: 6.08 },
            "residencial-social": { agua: 9.91, esgoto: 7.95 },
            "residencial-social-ii": { agua: 16.14, esgoto: 12.91 },
            "residencial-especial": { agua: 25.79, esgoto: 20.69 },
            "residencial-normal": { agua: 32.27, esgoto: 25.81 },
            "comercial-industrial-publica": { agua: 64.96, esgoto: 51.92 },
            "comercial-assistencial": { agua: 32.51, esgoto: 26.00 },
            "publica-com-contrato": { agua: 48.72, esgoto: 38.95 },
            "publica-municipal": { agua: 32.51, esgoto: 26.00 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 0.96, esgoto: 0.78 },
                { limite: 30, agua: 3.17, esgoto: 2.58 },
                { limite: 50, agua: 5.35, esgoto: 4.30 },
                { limite: Infinity, agua: 6.33, esgoto: 5.03 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.74, esgoto: 1.41 },
                { limite: 30, agua: 3.71, esgoto: 2.98 },
                { limite: 50, agua: 5.35, esgoto: 4.30 },
                { limite: Infinity, agua: 6.33, esgoto: 5.03 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.27, esgoto: 1.80 },
                { limite: 20, agua: 4.53, esgoto: 3.60 },
                { limite: 50, agua: 6.95, esgoto: 5.55 },
                { limite: Infinity, agua: 8.32, esgoto: 6.66 }
            ],
            "residencial-especial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 3.61, esgoto: 2.89 },
                { limite: 50, agua: 5.55, esgoto: 4.43 },
                { limite: Infinity, agua: 6.69, esgoto: 5.30 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.53, esgoto: 3.60 },
                { limite: 50, agua: 6.95, esgoto: 5.55 },
                { limite: Infinity, agua: 8.32, esgoto: 6.66 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.69, esgoto: 6.14 },
                { limite: 50, agua: 12.54, esgoto: 10.00 },
                { limite: Infinity, agua: 14.68, esgoto: 11.74 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 3.91, esgoto: 3.09 },
                { limite: 50, agua: 6.33, esgoto: 5.03 },
                { limite: Infinity, agua: 7.38, esgoto: 5.92 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.76, esgoto: 4.62 },
                { limite: 50, agua: 9.42, esgoto: 7.55 },
                { limite: Infinity, agua: 11.01, esgoto: 8.84 }
            ],
            "publica-municipal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 3.91, esgoto: 3.09 },
                { limite: 50, agua: 6.33, esgoto: 5.03 },
                { limite: Infinity, agua: 7.38, esgoto: 5.92 }
            ]
        }
    },
    "adamantina-pirapozinho": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 6.99 },
            "residencial-social": { agua: 11.46, esgoto: 9.16 },
            "residencial-social-ii": { agua: 20.21, esgoto: 16.21 },
            "residencial-normal": { agua: 40.42, esgoto: 32.42 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 65.25 },
            "comercial-assistencial": { agua: 40.78, esgoto: 32.63 },
            "comercial-especial": { agua: 61.19, esgoto: 48.94 },
            "publica-com-contrato": { agua: 61.11, esgoto: 48.93 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 0.88 },
                { limite: 30, agua: 3.67, esgoto: 2.95 },
                { limite: 50, agua: 11.10, esgoto: 8.89 },
                { limite: Infinity, agua: 12.26, esgoto: 9.83 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.98, esgoto: 1.60 },
                { limite: 30, agua: 4.30, esgoto: 3.41 },
                { limite: 50, agua: 6.12, esgoto: 4.94 },
                { limite: Infinity, agua: 7.29, esgoto: 5.88 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.85, esgoto: 2.25 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 9.70, esgoto: 7.70 },
                { limite: 50, agua: 15.68, esgoto: 12.53 },
                { limite: Infinity, agua: 18.41, esgoto: 14.68 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.90, esgoto: 3.84 },
                { limite: 50, agua: 7.90, esgoto: 6.34 },
                { limite: Infinity, agua: 9.22, esgoto: 7.37 }
            ],
            "comercial-especial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.25, esgoto: 5.71 },
                { limite: 50, agua: 15.68, esgoto: 12.53 },
                { limite: Infinity, agua: 18.41, esgoto: 14.68 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.23, esgoto: 5.82 },
                { limite: 50, agua: 11.82, esgoto: 9.41 },
                { limite: Infinity, agua: 13.77, esgoto: 11.05 }
            ]
        }
    },
    "presidente-prudente": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 6.99 },
            "residencial-social": { agua: 11.46, esgoto: 9.16 },
            "residencial-social-ii": { agua: 20.21, esgoto: 16.21 },
            "residencial-normal": { agua: 40.42, esgoto: 32.42 },
            "residencial-especial": { agua: 34.53, esgoto: 27.68 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 65.25 },
            "comercial-assistencial": { agua: 40.78, esgoto: 32.63 },
            "comercial-especial": { agua: 61.19, esgoto: 48.94 },
            "publica-com-contrato": { agua: 61.11, esgoto: 48.93 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 0.88 },
                { limite: 30, agua: 3.67, esgoto: 2.95 },
                { limite: 50, agua: 11.10, esgoto: 8.89 },
                { limite: Infinity, agua: 12.26, esgoto: 9.83 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.98, esgoto: 1.60 },
                { limite: 30, agua: 4.30, esgoto: 3.41 },
                { limite: 50, agua: 6.12, esgoto: 4.94 },
                { limite: Infinity, agua: 7.29, esgoto: 5.88 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.85, esgoto: 2.25 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "residencial-especial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.87, esgoto: 3.83 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 9.70, esgoto: 7.70 },
                { limite: 50, agua: 15.68, esgoto: 12.53 },
                { limite: Infinity, agua: 18.41, esgoto: 14.68 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.90, esgoto: 3.84 },
                { limite: 50, agua: 7.90, esgoto: 6.34 },
                { limite: Infinity, agua: 9.22, esgoto: 7.37 }
            ],
            "comercial-especial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.25, esgoto: 5.71 },
                { limite: 50, agua: 15.68, esgoto: 12.53 },
                { limite: Infinity, agua: 18.41, esgoto: 14.68 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.23, esgoto: 5.82 },
                { limite: 50, agua: 11.82, esgoto: 9.41 },
                { limite: Infinity, agua: 13.77, esgoto: 11.05 }
            ]
        }
    },
    "regiao-vale-do-paraiba": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 6.99 },
            "residencial-social": { agua: 11.46, esgoto: 9.16 },
            "residencial-social-ii": { agua: 20.21, esgoto: 16.21 },
            "residencial-normal": { agua: 40.42, esgoto: 32.42 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 65.25 },
            "comercial-assistencial": { agua: 40.78, esgoto: 32.63 },
            "publica-com-contrato": { agua: 61.11, esgoto: 48.93 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 0.88 },
                { limite: 30, agua: 3.67, esgoto: 2.95 },
                { limite: 50, agua: 11.10, esgoto: 8.89 },
                { limite: Infinity, agua: 12.26, esgoto: 9.83 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.98, esgoto: 1.60 },
                { limite: 30, agua: 4.30, esgoto: 3.41 },
                { limite: 50, agua: 6.12, esgoto: 4.94 },
                { limite: Infinity, agua: 7.29, esgoto: 5.88 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.85, esgoto: 2.25 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.69, esgoto: 4.49 },
                { limite: 50, agua: 8.74, esgoto: 6.99 },
                { limite: Infinity, agua: 10.46, esgoto: 8.33 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 9.70, esgoto: 7.70 },
                { limite: 50, agua: 16.15, esgoto: 12.94 },
                { limite: Infinity, agua: 20.52, esgoto: 16.36 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 4.90, esgoto: 3.84 },
                { limite: 50, agua: 8.13, esgoto: 6.46 },
                { limite: Infinity, agua: 10.16, esgoto: 8.21 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.23, esgoto: 5.82 },
                { limite: 50, agua: 12.09, esgoto: 9.74 },
                { limite: Infinity, agua: 15.40, esgoto: 12.32 }
            ]
        }
    },
    "regiao-baixada-santista": {
        minimos: {
            "residencial-vulneravel": { agua: 8.74, esgoto: 8.74 },
            "residencial-social": { agua: 11.46, esgoto: 11.46 },
            "residencial-social-ii": { agua: 20.21, esgoto: 20.21 },
            "residencial-normal": { agua: 40.42, esgoto: 40.42 },
            "comercial-industrial-publica": { agua: 81.57, esgoto: 81.57 },
            "comercial-assistencial": { agua: 40.78, esgoto: 40.78 },
            "publica-com-contrato": { agua: 61.11, esgoto: 61.11 }
        },
        faixas: {
            "residencial-vulneravel": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.10, esgoto: 1.10 },
                { limite: 30, agua: 3.67, esgoto: 3.67 },
                { limite: 50, agua: 11.10, esgoto: 11.10 },
                { limite: Infinity, agua: 12.26, esgoto: 12.26 }
            ],
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 1.98, esgoto: 1.98 },
                { limite: 30, agua: 3.68, esgoto: 3.68 },
                { limite: 50, agua: 5.25, esgoto: 5.25 },
                { limite: Infinity, agua: 7.13, esgoto: 7.13 }
            ],
            "residencial-social-ii": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.85, esgoto: 2.85 },
                { limite: 20, agua: 5.69, esgoto: 5.69 },
                { limite: 50, agua: 7.53, esgoto: 7.53 },
                { limite: Infinity, agua: 10.20, esgoto: 10.20 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.69, esgoto: 5.69 },
                { limite: 50, agua: 7.53, esgoto: 7.53 },
                { limite: Infinity, agua: 10.20, esgoto: 10.20 }
            ],
            "comercial-industrial-publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 10.67, esgoto: 10.67 },
                { limite: 50, agua: 23.33, esgoto: 23.33 },
                { limite: Infinity, agua: 25.18, esgoto: 25.18 }
            ],
            "comercial-assistencial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.37, esgoto: 5.37 },
                { limite: 50, agua: 11.72, esgoto: 11.72 },
                { limite: Infinity, agua: 12.64, esgoto: 12.64 }
            ],
            "publica-com-contrato": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 8.00, esgoto: 8.00 },
                { limite: 50, agua: 17.52, esgoto: 17.52 },
                { limite: Infinity, agua: 18.92, esgoto: 18.92 }
            ]
        }
    },
    "olimpia": {
        minimos: {
            "residencial-social": { agua: 12.67, esgoto: 10.14 },
            "residencial-normal": { agua: 25.34, esgoto: 20.27 },
            "comercial": { agua: 36.22, esgoto: 28.98 },
            "publica": { agua: 78.18, esgoto: 62.54 },
            "industrial": { agua: 72.43, esgoto: 57.94 },
            "mista": { agua: 30.78, esgoto: 24.63 }
        },
        faixas: {
            "residencial-social": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 15, agua: 2.55, esgoto: 2.04 },
                { limite: 20, agua: 3.82, esgoto: 3.05 },
                { limite: 30, agua: 5.16, esgoto: 4.13 },
                { limite: 50, agua: 6.40, esgoto: 5.12 },
                { limite: 60, agua: 9.24, esgoto: 7.40 },
                { limite: 70, agua: 9.37, esgoto: 7.49 },
                { limite: Infinity, agua: 9.42, esgoto: 7.54 }
            ],
            "residencial-normal": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.09, esgoto: 4.07 },
                { limite: 30, agua: 5.16, esgoto: 4.13 },
                { limite: 50, agua: 6.40, esgoto: 5.12 },
                { limite: 60, agua: 9.24, esgoto: 7.40 },
                { limite: 70, agua: 9.37, esgoto: 7.49 },
                { limite: Infinity, agua: 9.42, esgoto: 7.54 }
            ],
            "comercial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 6.36, esgoto: 5.09 },
                { limite: 30, agua: 6.39, esgoto: 5.10 },
                { limite: 50, agua: 7.99, esgoto: 6.40 },
                { limite: 60, agua: 9.28, esgoto: 7.42 },
                { limite: 70, agua: 9.37, esgoto: 7.49 },
                { limite: Infinity, agua: 9.42, esgoto: 7.54 }
            ],
            "publica": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.62, esgoto: 6.10 },
                { limite: 30, agua: 7.70, esgoto: 6.16 },
                { limite: 50, agua: 10.40, esgoto: 8.33 },
                { limite: 60, agua: 11.82, esgoto: 9.45 },
                { limite: 70, agua: 11.93, esgoto: 9.55 },
                { limite: Infinity, agua: 12.03, esgoto: 9.63 }
            ],
            "industrial": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 7.07, esgoto: 5.65 },
                { limite: 30, agua: 7.10, esgoto: 5.68 },
                { limite: 50, agua: 9.59, esgoto: 7.67 },
                { limite: 60, agua: 10.82, esgoto: 8.65 },
                { limite: 70, agua: 10.87, esgoto: 8.70 },
                { limite: Infinity, agua: 11.01, esgoto: 8.81 }
            ],
            "mista": [
                { limite: 10, agua: 0.00, esgoto: 0.00 },
                { limite: 20, agua: 5.73, esgoto: 4.58 },
                { limite: 30, agua: 5.78, esgoto: 4.63 },
                { limite: 50, agua: 7.20, esgoto: 5.76 },
                { limite: 60, agua: 9.28, esgoto: 7.42 },
                { limite: 70, agua: 9.37, esgoto: 7.49 },
                { limite: Infinity, agua: 9.42, esgoto: 7.54 }
            ]
        }
    }
};

class GerenciadorTarifas {
    constructor(mapeamentoCidades, tabelasTarifarias) {
        this.mapeamentoCidades = mapeamentoCidades;
        this.tabelasTarifarias = tabelasTarifarias;
    }

    obterChaveTabelaPorCidade(nomeCidade) {
        if (!nomeCidade) return null;
        const cidadeFormatada = nomeCidade.trim().toLowerCase();
        const regiao = this.mapeamentoCidades.find(r => 
            r.cidades.some(c => c.trim().toLowerCase() === cidadeFormatada)
        );
        return regiao ? regiao.tabela : null;
    }

    obterCategoriasDisponiveis(nomeCidade) {
        const chaveTabela = this.obterChaveTabelaPorCidade(nomeCidade);
        if (!chaveTabela || !this.tabelasTarifarias[chaveTabela]) return [];

        const minimos = this.tabelasTarifarias[chaveTabela].minimos || {};
        return Object.keys(minimos);
    }
}

const gerenciadorTarifas = new GerenciadorTarifas(MAPEAMENTO_CIDADES, TABELAS_TARIFARIAS);