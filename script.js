const verbs = [
    ["бъда", "ある、いる"], ["имам", "持つ"], ["правя", "する"], ["ходя", "行く"],
    ["виждам", "見る"], ["чувам", "聞く"], ["казвам", "言う"], ["давам", "与える"],
    ["вземам", "取る"], ["поставям", "置く"], ["пиша", "書く"], ["чета", "読む"],
    ["уча", "学ぶ"], ["работя", "働く"], ["играя", "遊ぶ"], ["спя", "眠る"],
    ["ям", "食べる"], ["пия", "飲む"], ["говоря", "話す"], ["мисля", "考える"],
    ["разбирам", "理解する"], ["помня", "覚える"], ["забравям", "忘れる"],
    ["чувствам", "感じる"], ["искам", "欲しい"], ["трябва", "～すべきだ"],
    ["мога", "できる"], ["питам", "尋ねる"], ["отговарям", "答える"], ["намирам", "見つける"]
];

const questionElement = document.getElementById('question');
const verbElement = document.getElementById('verb');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const choiceButtons = document.querySelectorAll('.choice');

let currentVerb = {};
let correctAnswer = '';

function newQuestion() {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    currentVerb = verbs[randomIndex];
    verbElement.textContent = currentVerb[0];

    const choices = [currentVerb[1]];
    while (choices.length < 3) {
        const randomChoice = verbs[Math.floor(Math.random() * verbs.length)][1];
        if (!choices.includes(randomChoice)) {
            choices.push(randomChoice);
        }
    }

    choices.sort(() => Math.random() - 0.5);
    correctAnswer = currentVerb[1];

    choiceButtons.forEach((button, index) => {
        button.textContent = choices[index];
        button.onclick = () => checkAnswer(button.textContent);
    });
}

function checkAnswer(answer) {
    if (answer === correctAnswer) {
        resultElement.textContent = "正解！";
    } else {
        resultElement.textContent = `不正解。正しい答えは: ${correctAnswer}`;
    }
    setTimeout(newQuestion, 1000);
}

newQuestion();
