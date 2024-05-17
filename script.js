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
        removeAllWords(); // Stop displaying words
        removeGradientAnimation(); // Stop gradient animation
        toggleButton.textContent = "Start"; // Reset button text
    } else {
        startDisplayingWords();
        toggleButton.textContent = getRandomElement(buzzWords);
    }
});

function startDisplayingWords() {
    interval = setInterval(() => {
        const word = words[wordCount % words.length];
        displayWord(word);
        wordCount++;
    }, 1000); // Faster transition
}

function displayWord(word) {
    const wordElement = createWordElement(word);
    document.body.appendChild(wordElement);
    setTimeout(() => {
        wordElement.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(wordElement);
        }, 500); // Match the transition duration
    }, 5000); // Display time for each word
}

function createWordElement(word) {
    const element = document.createElement('div');
    element.className = 'word';
    element.textContent = word;
    element.style.fontSize = `${getRandomInt(40, 200)}px`; // Adjusted size range
    element.style.color = getRandomColor();
    element.style.fontFamily = getRandomFont();
    element.style.position = 'absolute'; // Position the words absolutely
    element.style.top = `${getRandomInt(0, 80)}vh`; // Adjusted range for full screen coverage
    element.style.left = `${getRandomInt(0, 80)}vw`; // Adjusted range for full screen coverage
    return element;
}

function removeAllWords() {
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

function removeGradientAnimation() {
    document.body.style.animation = 'none';
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
        "Roboto", "Open Sans", "Lobster", "Montserrat", "Arial", "Verdana"
    ];
    return getRandomElement(fonts);
}
