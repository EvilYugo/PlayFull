// script.js
const words = [
    "Mein Block", "Gheddo", "Ersguterjunge", "Was Hast Du Gedacht", "Straßenjunge", 
    "Chabos wissen wer der Babo ist", "Fick dein Money", "Nie ein Rapper", "Frei", 
    "Kopf kaputt", "Jung, Brutal, Gutaussehend", "Mord", "Asphalt Massaka", "Blyat",
    "Ich bin 2 Berliner", "Ich und keine Maske", "Niemals Antäuschen", "Badewiese",
    "Echte Männer", "Egoist"
];

const buzzWords = [
    "Just Do It", "Keep Moving Forward", "To Infinity and Beyond", "Seize the Day", "Stay Hungry, Stay Foolish", 
    "Think Different", "Imagination is More Important than Knowledge", "The Best is Yet to Come", 
    "Carpe Diem", "I Have a Dream", "Live Long and Prosper", "May the Force be With You", "I'll Be Back",
    "To Be or Not to Be", "Elementary, My Dear Watson", "Here's Looking at You, Kid"
];

const toggleButton = document.getElementById('toggleButton');
const quoteContainer = document.getElementById('quoteContainer');
let interval;
let wordElement;
let wordCount = 0;
let quoteIndex = 0;
const quotes = [
    "Mama, ich hab' 'nen Porsche gekauft - Bushido",
    "Das ist Alpha, kein Beta - Kollegah",
    "Ja, du bist tight, ich bin tighter - Fler",
    "Stress ohne Grund macht den Puls auf 180 - Farid Bang",
    "Du bist die Sonne meines Lebens, Baby, doch ich bin ein Mond - Kool Savas"
];

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('clicked');
    if (interval) {
        clearInterval(interval);
        interval = null;
        showQuote();
        document.body.style.backgroundColor = 'black'; // Change background color to black
        toggleButton.textContent = ""; // Clear button text
    } else {
        startDisplayingWords();
        toggleButton.textContent = getRandomElement(buzzWords);
    }
});

function startDisplayingWords() {
    let wordIndex = 0;
    interval = setInterval(() => {
        if (wordElement) {
            wordElement.style.opacity = 0;
            setTimeout(() => {
                if (wordElement) {
                    document.body.removeChild(wordElement);
                }
                displayWord(words[wordIndex]);
                wordIndex = (wordIndex + 1) % words.length;
                wordCount++;
                if (wordCount % 3 === 0) {
                    wordElement.classList.add('bold-underline');
                }
            }, 500); // Match the transition duration
        } else {
            displayWord(words[wordIndex]);
            wordIndex = (wordIndex + 1) % words.length;
            wordCount++;
            if (wordCount % 3 === 0) {
                wordElement.classList.add('bold-underline');
            }
        }
    }, 1000); // Faster transition
}

function displayWord(word) {
    wordElement = createWordElement(word);
    document.body.appendChild(wordElement);
    setTimeout(() => {
        wordElement.style.opacity = 1;
    }, 10); // Trigger the fade-in effect
}

function createWordElement(word) {
    const element = document.createElement('div');
    element.className = 'word';
    element.textContent = word;
    element.style.fontSize = `${getRandomInt(40, 200)}px`; // Adjusted size range
    element.style.color = getRandomColor();
    element.style.fontFamily = getRandomFont();
    element.style.top = `${getRandomInt(0, 80)}vh`; // Adjusted range for full screen coverage
    element.style.left = `${getRandomInt(0, 80)}vw`; // Adjusted range for full screen coverage
    return element;
}

function showQuote() {
    quoteContainer.classList.remove('hidden');
    quoteContainer.style.display = 'block';
    quoteContainer.innerHTML = `<p style="font-size: 5em; color: white;">${quotes[quoteIndex]}</p>`;
    quoteIndex = (quoteIndex + 1) % quotes.length;
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
    const fonts = [
        "Roboto", "Open Sans", "Lobster", "Montserrat", "Arial", "Verdana", 
        "Times New Roman", "Georgia", "Courier New", "Lucida Console"
    ];
    return getRandomElement(fonts);
}
