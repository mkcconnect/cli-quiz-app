var readlineSync = require("readline-sync");

var score = 0;

function welcomeUser() {
    var userName = readlineSync.question("What is your name? ");
    console.log("Hello " + userName + ". Welcome to the Liverpool football club quiz!");
}

var qna = [{
        question: "What is the homeground of Livepool FC? ",
        answer: "anfield"
    },
    {
        question: "When was Liverpool football club founded? ",
        answer: 1892
    },
    {
        question: "When was the last time LFC won the league? ",
        answer: 2020
    },
    {
        question: "Who was the 2020 league winning manager of LFC? ",
        answer: "jurgen klopp"
    },
    {
        question: "Do you support Liverpool? ",
        answer: "yes"
    }
];

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer == answer) {
        console.log("Correct answer. :)))")
        score = score + 1;
    } else {
        console.log("Sorry incorrect answer. :(");
        score = score - 1;
    }
    console.log("Your current score is: " + score + "!");
};

function quiz() {
    for (var i = 0; i < qna.length; i++) {
        var currentQuestion = qna[i];
        play(currentQuestion.question, currentQuestion.answer);
    }
}

function topPlayers() {

    var topScores = [{
            Name: "Gerrard",
            Score: 3
        },
        {
            Name: "Kenny",
            Score: 3
        }
    ];
    console.log("The top players of this game are ");
    topScores.map(score => console.log(score.Name, " : ", score.Score));
}

welcomeUser();
quiz();
topPlayers();