// 1. I need to declare all variables, including an object or array of questions and answers

let timer = 90;
let triviaQuestions = {
    questions:
        ["Who recruited the original Avengers?",
            "Who is the first Avenger?",
            "Who was the first deceased Avenger in the movie series?",
            "Who was the first villain that the Avengers fought collectively?",
            "How many Avengers were a part of the original team from the first movie?",
            "Who's the only other Avenger that can lift Thor's hammer?",
            "Who did Thanos sacrifice for the Soul Stone?",
            "Who was the villain that killed off half of the universe?",
            "Who is the owner of the Time Stone?",
            "Who's the youngest Avenger?"],
    answers: {
        // Correct Answers in-order corresponding to the above questions
        correctAnswers:
            ["Nick Fury",
                "Captain America",
                "Quick Silver",
                "Loki",
                "6",
                "Vision",
                "Gamora",
                "Thanos",
                "Doctor Strange",
                "Vision"],
        // Incorrect answers are below in array form
        incorrectHeroes: [
            "Winter Soldier", "Thor", "Black Widow", "Hawkeye", "Iron Man", "Hulk", "War Machine", "Groot", "Batman", "Superman", "Rocket Raccoon", "Spiderman", "Black Panther", "Wolverine",
        ],
        icorrectVillains: [
            "Venom", "Ultron", "Hela", "Red Skull", "Ronan", "Abomination", "Ebony Maw", "Ego", "Erik Killmonger", "Grandmaster", "Aldrich Killian"
        ],
        incorrectNumbers: [
            "5", "7", "8", "9", "11", "15", "17"
        ]
    }
}

// 2. I need a start button
let startButton = function () {
    $('#mainSection').append('<button id="startButton" class="btn btn-primary" type="button">Start</button>');
}

startButton();

// 3. I need content to show up and replace the start button when start is pressed

$('#startButton').on('click', function () {
    $('#startButton').remove();

    // We create functions to generate random questions and answers
    let triviaQuestion = function (qindex) {
        let randomQuestion = triviaQuestions.questions[qindex];
        let removeQuestion = triviaQuestions.questions.splice(qindex, 1);
        console.log('Question #' + i + ' is: ' + randomQuestion);
        return randomQuestion;
    }

    let triviaAnswer = function (qIndex) {
        let correctAnswer = triviaQuestions.answers.correctAnswers[qIndex];
        let removeAnswer = triviaQuestions.answers.correctAnswers.splice(qIndex, 1);
        console.log('The answer is ' + correctAnswer);
        return correctAnswer;
    }

    // This function returns the correct answer with the corresponding question and creates other random incorrect answers


    for (i = 0; i < 10; i++) {
        let qIndex = Math.floor(Math.random(triviaQuestions.questions.length) * triviaQuestions.questions.length);
        $('#mainSection').append('<h2>' + triviaQuestion(qIndex) + '</h2>');
        $('#mainSection').append('<input type="radio" name="question-'+ qIndex + '">'  + triviaAnswer(qIndex));
    }
});

// 4. I need a function that will generate a question and the answers that correspond with the question
