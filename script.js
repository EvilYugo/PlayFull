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
let wordElement;

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
        if (wordElement) {
            document.body.removeChild(wordElement);
        }
        const word = getRandomElement(words);
        wordElement = createWordElement(word);
        document.body.appendChild(wordElement);
    }, 2000);
}

function createWordElement(word) {
    const element = document.createElement('div');
    element.className = 'word';
    element.textContent = word;
    element.style.fontSize = `${getRandomInt(40, 200)}px`; // Adjusted size range
    element.style.color = getRandomColor();
    element.style.fontFamily = getRandomFont();
    element.style.top = `${getRandomInt(0, 70)}vh`; // Adjusted range for full screen coverage
    element.style.left = `${getRandomInt(0, 70)}vw`; // Adjusted range for full screen coverage
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
