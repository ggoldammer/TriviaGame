// 1. I need to declare all variables, including an object or array of questions and answers

let triviaQuestions = {
    questions:
        ["Who recruited the original Avengers?",
            "Who is the first Avenger?",
            "Who was the first deceased Avenger in the movie series?",
            "Who is currently stuck in the Quantum Realm?",
            "Which Avenger is a twin?",
            "Who's the only other Avenger that can lift Thor's hammer?",
            "Who did Thanos sacrifice for the Soul Stone?",
            "Who was the hero referrenced at the endcredit scene in Avengers: Infinity War?",
            "Who is the owner of the Time Stone?",
            "Who's the youngest Avenger?"],
    answers: {
        // Correct Answers in-order corresponding to the above questions
        correctAnswers:
            ["Nick Fury",
                "Captain America",
                "Quick Silver",
                "Ant Man",
                "Scarlet Witch",
                "Vision",
                "Gamora",
                "Captain Marvel",
                "Doctor Strange",
                "Vision"],
        // Incorrect answers are below in array form
        incorrectHeroes: [
            "Winter Soldier", "Thor", "Black Widow", "Hawkeye", "Iron Man", "Hulk", "War Machine", "Groot", "Batman", "Superman", "Rocket Raccoon", "Spiderman", "Black Panther", "Wolverine",
        ]
    }
}

// 2. I need a start button
let startButton = function () {
    $('#mainSection').append('<button id="startButton" class="btn btn-primary" type="button">Start</button>');
}

startButton();

// 3. I need content to show up and replace the start button when start is pressed. I also need a timer at the start

$('#startButton').on('click', function () {
    $('#startButton').remove();

    let resultDisplay = function () {
        $('#mainSection').empty();
        $('#mainSection').text('Game Over!');
    }

    let timerSet = setTimeout(resultDisplay, 60000);



    $('#mainSection').append('<h2>Time Remaining: ' + timerSet + '</h2>');

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

    let triviaWrongAnswers = function () {
        let incorrectAnswer = triviaQuestions.answers.incorrectHeroes[Math.floor(Math.random(triviaQuestions.answers.incorrectHeroes.length) * triviaQuestions.answers.incorrectHeroes.length)];
        console.log('Incorrect Answers: ' + incorrectAnswer);
        return incorrectAnswer;
    }



    // This function returns the correct answer with the corresponding question and creates other random incorrect answers


    for (i = 0; i < 10; i++) {

        let qIndex = Math.floor(Math.random(triviaQuestions.questions.length) * triviaQuestions.questions.length);
        $('#mainSection').append('<h2>' + triviaQuestion(qIndex) + '</h2>');
        $('#mainSection').append('<input type="radio" id="correct-' + i + '" name="question-' + i + '">' + triviaAnswer(qIndex));
        $('#mainSection').append('<input type="radio" name="question-' + i + '">' + triviaWrongAnswers());
        $('#mainSection').append('<input type="radio" name="question-' + i + '">' + triviaWrongAnswers());
        $('#mainSection').append('<input type="radio" name="question-' + i + '">' + triviaWrongAnswers());
    }
});

