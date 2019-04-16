$(document).ready(function () {
});

var game = {
    questions: [
        {
    id: 'question-one',
    question: "Which of these sea creatures is most dangerous?",
    choices: ["Blue-ringed Octopus", "Great White Shark", "Box Jellyfish", "Pufferfish"],
    answer: "Box Jellyfish"
},
{
    id: 'question-two',
    question: "An Electric Eel can power 10 lightbulbs with its electricity?",
    choices: ["True", "False"],
    answer: "True"
},
{
    id: 'question-three',
    question: "Which of these sea animals can change its gender?",
    choices: ["Clownfish", "Sea Turtle", "Dolphin", "Sea Horse"],
    answer: "Clownfish"
},
{
    id: 'question-four',
    question: "The ocean's fastest animal is...",
    choices: ["Swordfish", "Mako Shark", "Killer Whale", "Sailfish"],
    answer: "Sailfish"
},
{
    id: 'question-five',
    question: "What is the deepest living fish in the sea?",
    choices:["Mariana Snailfish", "Sunfish", "Barreleye Fish", "Squid"],
    answer: "Mariana Snailfish"
},
{
    id: 'question-six',
    question: "Which of these is not true about sea otters?",
    choices: ["Their favorite snack is the Sea Urchin", "They keep warm with their blubber", "They hold hands while they sleep", "There are 13 otter species in the world"],
    answer: "They keep warm with their blubber"
},
]}

$(".startGame").on("click", function () {

var number = 60;
$('#timeLeft').on('click', run);

function decrement() {
    number--;
    $('#timeLeft').html('<h2>' + number + " seconds" + '</h2>');
    if (number === 0) {
        stop();
        checkAnswers();
    }
}
function run() {
    counter = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(counter);
}
run();

function formTemplate(data) {
    var qString = "<form id='questionOne'>" + data.question + "<br>";
    var choices = data.choices;
    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        console.log(choice);
        qString = qString + "<input type='radio' name='" + data.id + "' value=" + i + ">" + choice;

    }
    return qString + "</form>";
}
window.formTemplate = formTemplate;

function buildQuestions() {
    var questionHTML = ''
    for (var i = 0; i < game.questions.length; i++) {
        questionHTML = questionHTML + formTemplate(game.questions[i]);
    }
    $('#questions-container').append(questionHTML);

}

function isCorrect(question) {
    var answers = $('[name=' + question.id + ']');
    var correct = answers.eq(question.answer);
    var isChecked = correct.is(':checked');
    return isChecked;
}

buildQuestions();

function resultsTemplate(question) {
    var htmlBlock = '<div>'
    htmlBlock = htmlBlock + question.question + ': ' + isChecked;
    return htmlBlock + "</div>";
}

function checkAnswers() {
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0

    for (var i = 0; i < game.questions.length; i++) {
        if (isCorrect(game.questions[i])) {
            correct++;
        } else {
            if (checkAnswered(game.questions[i])) {
                incorrect++;
            } else {
                unAnswered++;
            }
        }
    }

    $('.results').html('correct: ' + correct + "<br>" + 'incorrect: ' + incorrect + "<br>" + 'unanswered: ' + unAnswered);
}

function checkAnswered(question) {
    var anyAnswered = false;
    var answers = $('[name=' + question.id + ']');
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            anyAnswered = true;
        }
    }
    return anyAnswered;
}
$('#doneButton').on('click', function () {
    checkAnswers();
    stop();
})
