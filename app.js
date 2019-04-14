$('#start').on('click', function () {
    game.start();
})

var questions = [{
    question: "Which of these sea creatures is most dangerous?",
    options: ["Blue-ringed Octopus", "Great White Shark", "Box Jellyfish", "Pufferfish"],
    correctAnswer: "Box Jellyfish"
},
{
    question: "An Electric Eel can power 10 lightbulbs with its electricity?",
    options: ["True", "False"],
    correctAnswer: "True"
},
{
    question: "Which of these sea animals can change its gender?",
    options: ["Clownfish", "Sea Turtle", "Dolphin", "Sea Horse"],
    correctAnswer: "Clownfish"
},
{
    question: "Which of these animals has 3 hearts and blue blood?",
    options: ["Whale", "Tuna Fish", "Octopus", "Stingray"],
    correctAnswer: "Octopus"
},
{
    question: "The ocean's fastest animal is...",
    options: ["Swordfish", "Mako Shark", "Killer Whale", "Sailfish"],
    correctAnswer: "Sailfish"
},
{
    question: "What is the deepest living fish in the sea?",
    options: ["Mariana Snailfish", "Sunfish", "Barreleye Fish", "Squid"],
    correctAnswer: "Mariana Snailfish"
},
{
    question: "When dolphins sleep only 50% of their brain shuts down and one eye closes.",
    options: ["True", "False"],
    correctAnswer: "True"
},
{
    question: "Which of these is not true about sea otters?",
    options: ["Their favorite snack is the Sea Urchin", "They keep warm with their blubber", "They hold hands while they sleep", "There are 13 otter species in the world"],
    correctAnswer: "They keep warm with their blubber"
}
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function () 
}