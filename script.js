const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
 enunciado: "Ao sair de casa pela manhã, você percebe que a lâmpada da sala foi deixada acesa. Qual é sua atitude imediata?", alternativas: [
  {    texto: "Volto imediatamente para apagar, pensando na economia de energia.",
   afirmacao: "Sua consciência energética é alta, mostrando preocupação imediata com o desperdício. },
  }
 texto: "Deixo acesa, pois volto em algumas horas e é mais prático.",
 afirmacao: "Inicialmente, priorizou a conveniência, ignorando um pequeno impacto no consumo. "
}
]
},
    {
    enunciado: "Você precisa comprar um tênis novo. Em que critério você baseia sua escolha?",
 alternativas: [
  {
   texto: "Escolho um tênis de uma marca conhecida por usar materiais reciclados e ter produção ética.",
  afirmacao: "Você pesquisa e apoia ativamente o consumo ético e a moda sustentável. "
  {,
  }
  enunciado: "O restaurante que você frequenta passa a oferecer apenas canudos e embalagens de papel. Qual é a sua reação?",
  alternativas: [
    {
texto: "Fico satisfeito com a iniciativa e trago meus próprios utensílios reutilizáveis.",
afirmacao: "Você apoia a redução de plástico e adota práticas 'Lixo Zero' em seu dia a dia. "
},
{
texto: "Reclamo que o canudo de papel molha rapidamente e sinto falta do plástico.",
afirmacao: "A mudança de hábito gera resistência, focando no conforto momentâneo em vez da causa. "
}

]
},
{
enunciado: "Você precisa ir a um lugar a 5km de distância. Qual meio de transporte você utiliza?",
 alternativas: [
 {
 texto: "Vou de bicicleta ou transporte público para reduzir as emissões de carbono.",
 afirmacao: "Demonstra preferência por transportes de baixo carbono, contribuindo para a qualidade do ar. "
},
{
    texto: "Pego meu carro particular, pois é mais rápido e confortável.",
    afirmacao: "Ainda depende do transporte individual, aumentando sua pegada de carbono. "
 }
  ]
},
{  
enunciado: "O que você faz com lixo orgânico (restos de comida) que sobra em sua casa?",
alternativas: [
{
texto: "Separo para fazer compostagem, transformando-o em adubo para plantas.",
afirmacao: "Compostar o lixo orgânico é uma ação essencial que demonstra um ciclo de vida consciente dos resíduos. "
},
{
    texto: "Jogo no lixo comum, misturado com os recicláveis e não-recicláveis.",
    afirmacao: "A mistura de resíduos orgânicos e inorgânicos dificulta a reciclagem e aumenta o volume nos aterros sanitários. "
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
// Texto do enunciado (pergunta)
caixaPerguntas.textContent = perguntaAtual.enunciado;

// Limpa as alternativas anteriores
caixaAlternativas.textContent = "";

mostraAlternativas();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        // Adiciona o evento de clique que chama a função de resposta
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    // Pega a afirmação correspondente à alternativa
    const afirmacoes = opcaoSelecionada.afirmacao;

    // Adiciona a afirmação à história final
    historiaFinal += afirmacoes + "\n\n";

    // Avança para a próxima pergunta
    atual++;

    // Exibe a próxima pergunta
    mostraPergunta(); 
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu Perfil de Sustentabilidade:";
    // O texto final é a compilação de todas as afirmações
    textoResultado.textContent = historiaFinal;

    // Opcional: Esconder a caixa de alternativas no resultado
   caixaAlternativas.textContent = "";

   // Opcional: Adicionar um botão de "Recomeçar"
   const botaoRecomecar = document.createElement("button");
   botaoRecomecar.textContent = "Refazer o Quiz";
   botaoRecomecar.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
    caixaResultado.style.display = "block"; // Garante que o resultado volte a aparecer
});
caixaAlternativas.appendChild(botaoRecomecar);
} 

// Inicia o quiz
mostraPergunta();

