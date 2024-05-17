// script.js

const words = [
    "Mein Block", "Gheddo", "Ersguterjunge", "Was Hast Du Gedacht", "Straßenjunge", 
    "Chabos wissen wer der Babo ist", "Fick dein Money", "Nie ein Rapper", "Frei", 
    "Kopf kaputt", "Jung, Brutal, Gutaussehend", "Mord", "Asphalt Massaka", "Blyat",
    "Ich bin 2 Berliner", "Ich und keine Maske", "Niemals Antäuschen", "Badewiese",
    "Echte Männer", "Egoist"
];

const buzzWords = [
    "Straßenkredit", "Mehr Kohle, mehr Probleme", "Baba Saad", "Mein Herz schlägt für Hip Hop", "Deutscher Sprechgesang", 
    "Rapper aus Deutschland", "Ich bin ein Rapper", "Rap ist mein Leben", 
    "Untergrund Rap", "Rap ist nicht tot", "Flow auf Deutsch", "Hip Hop Kultur", "Rapmusik für die Straße",
    "Gangsta Rap", "Deutschrap Anthem", "Hoch die Tassen", "Raptexte voller Bedeutung"
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
    element.style.fontSize = `${getRandomInt(40, 200)}px`; // Adjusted size range
    element.style.color = getRandomFontColor(); // Random font color
    element.style.fontFamily = getRandomFont(); // Random font family
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
    toggleButton.style.backgroundColor = 'white'; // Change button background color
    toggleButton.style.color = 'black'; // Change button text color
    document.body.style.backgroundColor = 'black'; // Change background color to black
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
    const colors = ['#000000', '#333333', '#666666', '#999999', '#00008B']; // Black, various shades of gray, dark blue
    return getRandomElement(colors);
}
