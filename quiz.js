const prompt = require("prompt-sync")({ sigint: true });

function replace(i, j, array) {
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function shuffle(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (array.length - i));
        replace(i, j, array);
    }
    return array;
}

var data = [
    { question: "A", answer: "a" },
    { question: "B", answer: "b" },
    { question: "C", answer: "c" },
    /*{ question: "D", answer: "d" },
    { question: "E", answer: "e" },
    { question: "F", answer: "f" },
    { question: "G", answer: "g" },
    { question: "H", answer: "h" },
    { question: "I", answer: "i" },
    { question: "J", answer: "j" },
    { question: "K", answer: "k" },
    { question: "L", answer: "l" },
    { question: "M", answer: "m" },
    { question: "N", answer: "n" },
    { question: "O", answer: "o" },
    { question: "P", answer: "p" },
    { question: "Q", answer: "q" },
    { question: "R", answer: "r" },
    { question: "S", answer: "s" },
    { question: "T", answer: "t" },
    { question: "U", answer: "u" },
    { question: "V", answer: "v" },
    { question: "W", answer: "w" },
    { question: "X", answer: "x" },
    { question: "Y", answer: "y" },*/
    { question: "Z", answer: "z" }
];

var shuffledData = shuffle(data);
var len = shuffledData.length;
var score = 0;

for (var i = 0; i < len; i++) {
    console.log("\n" + shuffledData[i].question);
    
    var contents = [
        shuffledData[i].answer,
        shuffledData[(i + Math.floor(len / 4)) % len].answer,
        shuffledData[(i + Math.floor(len / 2)) % len].answer,
        shuffledData[(i + Math.floor(len / 4 * 3)) % len].answer
    ];

    var j = Math.floor(Math.random() * contents.length);
    replace(0, j, contents);

    for (var k = 0; k < contents.length; k++) {
        console.log(k+1 + ": " + contents[k]);
    }
    const ans = prompt("\nWhich is correct? ");
    if (ans == j + 1) {
        console.log(`Correct!`);
        score++;
    } else {
        console.log(`Incorrect.`);
        console.log(`The answer is ${j+1}.`);
    }
}

console.log("Score is " + score + "/" + len);
