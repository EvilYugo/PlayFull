// script.js
const words = [
    // Add your predefined texts here
    "Innovation", "Synergy", "Disruptive", "Paradigm", "Leverage", "Scalability", "Ecosystem", "Holistic", "Bandwidth", "Streamline"
];

const buzzWords = [
    "Click Here", "Press Me", "Start", "Go", "Begin", "Activate", "Launch", "Engage", "Enter", "Commence"
];

const toggleButton = document.getElementById('toggleButton');
const quoteContainer = document.getElementById('quoteContainer');
let interval;

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
        const word = getRandomElement(words);
        const wordElement = createWordElement(word);
        document.body.appendChild(wordElement);

        setTimeout(() => {
            document.body.removeChild(wordElement);
        }, 2000);
    }, 500);
}

function createWordElement(word) {
    const element = document.createElement('div');
    element.className = 'word';
    element.textContent = word;
    element.style.fontSize = `${getRandomInt(20, 50)}px`;
    element.style.color = getRandomColor();
    element.style.fontFamily = getRandomFont();
    element.style.top = `${getRandomInt(0, 80)}vh`;
    element.style.left = `${getRandomInt(0, 80)}vw`;
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
