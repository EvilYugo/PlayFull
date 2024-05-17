// script.js
const words = [
    "Innovation", "Synergy", "Disruptive", "Paradigm", "Leverage", "Scalability", "Ecosystem", "Holistic", "Bandwidth", "Streamline"
];

const buzzWords = [
    "Click Here", "Press Me", "Start", "Go", "Begin", "Activate", "Launch", "Engage", "Enter", "Commence"
];

const toggleButton = document.getElementById('toggleButton');
const quoteContainer = document.getElementById('quoteContainer');
let interval;
<<<<<<< HEAD
let wordElement;
=======
>>>>>>> bdfd92b7210eed61d6ed31e51efc5d5a866059f3

toggleButton.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        showQuote();
    } else {
        startDisplayingWords();
        toggleButton.textContent = getRandomElement(buzzWords);
    }
});

function startDisplayingWords() {
    interval = setInterval(() => {
<<<<<<< HEAD
        if (wordElement) {
            document.body.removeChild(wordElement);
        }
        const word = getRandomElement(words);
        wordElement = createWordElement(word);
        document.body.appendChild(wordElement);
    }, 2000);
=======
        const word = getRandomElement(words);
        const wordElement = createWordElement(word);
        document.body.appendChild(wordElement);

        setTimeout(() => {
            document.body.removeChild(wordElement);
        }, 2000);
    }, 500);
>>>>>>> bdfd92b7210eed61d6ed31e51efc5d5a866059f3
}

function createWordElement(word) {
    const element = document.createElement('div');
    element.className = 'word';
    element.textContent = word;
<<<<<<< HEAD
    element.style.fontSize = `${getRandomInt(40, 200)}px`; // Adjusted size range
    element.style.color = getRandomColor();
    element.style.fontFamily = getRandomFont();
    element.style.top = `${getRandomInt(0, 70)}vh`; // Adjusted range for full screen coverage
    element.style.left = `${getRandomInt(0, 70)}vw`; // Adjusted range for full screen coverage
=======
    element.style.fontSize = `${getRandomInt(20, 50)}px`;
    element.style.color = getRandomColor();
    element.style.fontFamily = getRandomFont();
    element.style.top = `${getRandomInt(0, 80)}vh`;
    element.style.left = `${getRandomInt(0, 80)}vw`;
>>>>>>> bdfd92b7210eed61d6ed31e51efc5d5a866059f3
    return element;
}

function showQuote() {
    quoteContainer.classList.remove('hidden');
    quoteContainer.style.display = 'block';
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomFont() {
    const fonts = ["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New", "Lucida Console"];
    return getRandomElement(fonts);
}
