const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn'); // Botão para jogar novamente

const questions = [
    {
        question: 'O que é o Google Gemini?',
        answers: [
            { text: 'Um dispositivo que usa realidade aumentada', correct: false },
            { text: 'Sistema operacional para dispositivos móveis', correct: false },
            { text: 'Uma nova ferramenta de inteligência artificial', correct: true },
            { text: 'É um software que é usado para edição para vídeos', correct: false }
        ]
    },
    {
        question: 'Qual é o principal foco Google Gemini?',
        answers: [
            { text: 'Criação de jogos em realidade virtual', correct: false },
            { text: 'Processamento de linguagem natural', correct: true },
            { text: 'Transmissao de vídeo em alta resolução', correct: false },
            { text: 'Utilizado para desenvolvimento de hardware', correct: false }
        ]
    },
    {
        question: 'Quais são as duas principais áreas em que o Google Gemini atua?',
        answers: [
            { text: 'Tradução automática e reconhecimento de voz', correct: true },
            { text: 'Usado para fazer edição de imagem e vídeo', correct: false },
            { text: 'Design gráfico e animação', correct: false },
            { text: 'Realidade virtual e redes sociais', correct: false }
        ]
    },
    {

        question: 'Que tipo de modelo o Google Gemini utiliza para entender linguagem?',
        answers: [
            { text: 'Ele utiliza redes neurais convolucionais', correct: false },
            { text: 'Modelos de linguagem de grande escala', correct: true },
            { text: 'Algoritmos genéticos', correct: false },
            { text: 'Modelos de clustering', correct: false }
        ]
    },
    {

        question: 'Qual tecnologia é fundamental para o Google Gemini?',
        answers: [
            { text: 'Criação de jogos em realidade virtual', correct: false },
            { text: 'Processamento de linguagem natural', correct: true },
            { text: 'Transmissão de vídeo em alta resolução', correct: false },
            { text: 'Processamento de desenvolvimento de hardware', correct: false }
        ]
    },
    {

        question: 'Qual é um dos objetivos principais do Google Gemini?',
        answers: [
            { text: 'Criar assistentes de voz mais realistas', correct: true },
            { text: 'Substituir engenheiros de software', correct: false },
            { text: 'Desenvolver apps para jogos móveis', correct: false },
            { text: 'Analisar big data', correct: false }
        ]
    },
    {

        question: 'Como o Google Gemini pode ajudar as empresas?',
        answers: [
            { text: 'Reduzindo o tempo de produção de vídeos', correct: false },
            { text: 'Acelerando o desenvolvimento de IA personalizada', correct: true },
            { text: 'Facilitando o design inovadores de sites', correct: false },
            { text: 'Criando relatórios automáticos de marketing', correct: false }
        ]
    },
    {

        question: 'Quais são as possíveis aplicações futuras do Google Gemini?',
        answers: [
            { text: 'Controle de dispositivos domésticos e industriais', correct: false },
            { text: 'Desenvolvimento de sistemas de IA mais avançados', correct: true },
            { text: 'Melhorar a resolução e o download de vídeos', correct: false },
            { text: 'Aumentar a duração da bateria de smartphones', correct: false }
        ]
    },
    {

        question: 'Que tipo de dados o Google Gemini é capaz de analisar?',
        answers: [
            { text: 'Dados textuais e visuais', correct: true },
            { text: 'Apenas dados textuais', correct: false },
            { text: 'Apenas dados de áudio', correct: false },
            { text: 'Apenas bases de dados financeiros', correct: false }
        ]
    },
    {

        question: 'Qual empresa desenvolveu o Gemini?',
        answers: [
            { text: 'Microsoft', correct: false },
            { text: 'Apple', correct: false },
            { text: 'Google', correct: true },
            { text: 'Amazon', correct: false }
        ]
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;
    
    answerButtons.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer));
        answerButtons.appendChild(button);
    });
}

function endGame() {
    // Esconde as perguntas e respostas e mostra o container do score
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}



function selectAnswer(button, answer) {
    const correct = answer.correct;
    if (correct) {
        button.classList.add('correct'); // Adiciona a classe verde
        score++
    } else {
        button.classList.add('incorrect'); // Adiciona a classe vermelha
    }
    
    // Desabilita todos os botões após a resposta
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    // Avança para a próxima pergunta após um pequeno atraso
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            endGame();
        }
    }, 1000); // Espera 1 segundo para mostrar a próxima pergunta
}

function restartGame() {
    // Reinicia o estado do jogo
    scoreContainer.classList.add('hidden'); // Esconde o container de score
    questionContainer.classList.remove('hidden'); // Mostra o container de perguntas
    startGame(); // Reinicia o jogo do zero
}

// Inicializa o jogo ao carregar a página
document.addEventListener('DOMContentLoaded', startGame);

// Adiciona evento de clique para o botão "Jogar Novamente"
restartBtn.addEventListener('click', restartGame);