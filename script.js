// script.js

const words = [
    "Mein Block", "Gheddo", "Ersguterjunge", "Was Hast Du Gedacht", "Straßenjunge", 
    "Chabos wissen wer der Babo ist", "Fick dein Money", "Nie ein Rapper", "Frei", 
    "Kopf kaputt", "Jung, Brutal, Gutaussehend", "Mord", "Asphalt Massaka", "Blyat",
    "Ich bin 2 Berliner", "Ich und keine Maske", "Niemals Antäuschen", "Badewiese",
    "Echte Männer", "Egoist"
];

const quotes = [
    "Mama, ich hab' 'nen Porsche gekauft - Bushido",
    "Das ist Alpha, kein Beta - Kollegah",
    "Ja, du bist tight, ich bin tighter - Fler",
    "Stress ohne Grund macht den Puls auf 180 - Farid Bang",
    "Du bist die Sonne meines Lebens, Baby, doch ich bin ein Mond - Kool Savas"
];

const toggleButton = document.getElementById('toggleButton');
const quoteContainer = document.getElementById('quoteContainer');
let interval;
let isAnimating = false;

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('clicked');
    if (!isAnimating) {
        isAnimating = true;
        if (interval) {
            clearInterval(interval);
            interval = null;
            stopAnimations();
            showQuote();
            document.body.style.backgroundColor = 'black'; // Change background color to black
            toggleButton.textContent = "Lass düsen";
        } else {
            startDisplayingWords();
            toggleButton.textContent = getRandomElement(words);
        }
    }
});

function startDisplayingWords() {
    interval = setInterval(() => {
        const word = getRandomElement(words);
        displayWord(word);
    }, 2000); // Adjusted display interval
}

function displayWord(word) {
    const wordElement = createWordElement(word);
    document.body.appendChild(wordElement);
    setTimeout(() => {
        wordElement.style.opacity = 1; // Fade in
        setTimeout(() => {
            wordElement.style.opacity = 0; // Fade out
            setTimeout(() => {
                document.body.removeChild(wordElement); // Remove the word element
            }, 500); // Match the transition duration
        }, 1500); // Display time before fading out
    }, 100); // Delay before fading in
}

function createWordElement(word) {
    const element = document.createElement('div');
    element.className = 'word';
    element.textContent = word;
    element.style.fontSize = `${getRandomInt(20, 40)}px`; // Adjusted size range
    element.style.color = getRandomFontColor(); // Random font color
    element.style.fontFamily = getRandomFont(); // Random font family
    element.style.position = 'absolute'; // Position the words absolutely
    element.style.top = `${getRandomInt(0, 80)}vh`; // Adjusted range for full screen coverage
    element.style.left = `${getRandomInt(0, 80)}vw`; // Adjusted range for full screen coverage
    return element;
}

function stopAnimations() {
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        word.style.opacity = 0;
        setTimeout(() => {
            if (word.parentElement) {
                document.body.removeChild(word);
            }
        }, 500); // Match the transition duration
    });
}

function showQuote() {
    quoteContainer.classList.remove('hidden');
    quoteContainer.innerHTML = getRandomElement(quotes);
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFont() {
    const fonts = [
        "Roboto", "Open Sans", "Lobster", "Montserrat", "Arial", "Verdana"
    ];
    return getRandomElement(fonts);
}

function getRandomFontColor() {
    const colors = ['#000000', '#333333', '#666666', '#999999', '#ff8c00']; // Black, various shades of gray, bold orange
    return getRandomElement(colors);
}
