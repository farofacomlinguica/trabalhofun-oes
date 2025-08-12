const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda e percebe que o mundo foi invadido por zumbis. A cidade está em caos. Qual seu primeiro passo?",
        alternativas: [
            {
                texto: "Buscar suprimentos em casa e montar um esconderijo seguro.",
                afirmacao: "Você priorizou sua segurança e se preparou para a luta."
            },
            {
                texto: "Tentar sair da cidade correndo e procurar outros sobreviventes.",
                afirmacao: "Você escolheu se arriscar para encontrar ajuda externa."
            }
        ]
    },
    {
        enunciado: "Enquanto procura suprimentos, você encontra uma pessoa ferida e cercada por zumbis. O que faz?",
        alternativas: [
            {
                texto: "Tentar resgatar a pessoa rapidamente, mesmo com risco de ser atacado.",
                afirmacao: "Sua coragem pode salvar vidas, mas o perigo é real."
            },
            {
                texto: "Evitar o confronto para garantir sua própria sobrevivência.",
                afirmacao: "Às vezes, preservar a si mesmo é a única opção."
            }
        ]
    },
    {
        enunciado: "Você conseguiu se abrigar, mas o local está ficando sem comida. O que você faz?",
        alternativas: [
            {
                texto: "Planejar uma expedição noturna para coletar alimentos em um mercado abandonado.",
                afirmacao: "Você é estrategista e aproveita a escuridão para se proteger."
            },
            {
                texto: "Tentar cultivar algumas plantas usando sementes que encontrou.",
                afirmacao: "Você aposta na sustentabilidade e paciência para sobreviver."
            }
        ]
    },
    {
        enunciado: "Durante a expedição, um barulho estranho se aproxima. Você encontra um grupo de sobreviventes armados. Como age?",
        alternativas: [
            {
                texto: "Tentar se aliar a eles para aumentar as chances de sobrevivência.",
                afirmacao: "Você sabe que em grupo, a força é maior."
            },
            {
                texto: "Evitar contato e continuar sozinho, para não depender de ninguém.",
                afirmacao: "Você prefere confiar só em si mesmo, mesmo que seja mais difícil."
            }
        ]
    },
    {
        enunciado: "Para se proteger dos zumbis, você pode escolher uma arma. Qual dessas você prefere?",
        alternativas: [
            {
                texto: "Uma faca afiada para combates corpo a corpo.",
                afirmacao: "Você valoriza discrição e agilidade."
            },
            {
                texto: "Uma arma de fogo para manter os inimigos à distância.",
                afirmacao: "Você prefere poder de fogo, mesmo com barulho e risco de chamar atenção."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada no apocalipse zumbi:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
