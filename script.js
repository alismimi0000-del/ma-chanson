// Song templates with placeholders for the name
const songTemplates = [
    {
        verses: [
            `In the night, I think of you, ${name}
Your name echoes in my heart
Every star that shines so bright
Makes me think of you tonight`,
            `${name}, you are my melody
The sweetest song I've ever known
With every beat, my heart will sing
Your name, forever my favorite thing`,
            `When I close my eyes, I see
${name}, you set me free
You're the rhythm in my soul
The only one who makes me whole`
        ]
    },
    {
        verses: [
            `${name}, ${name}, in my dreams you stay
Dancing through the light of day
Your smile is like a melody
That plays forever inside me`,
            `I would write a thousand songs
Just to sing your name along
${name}, you're my inspiration
My only love, my destination`,
            `Every moment feels so right
When you're here to hold me tight
${name}, I found my song
With you is where I belong`
        ]
    },
    {
        verses: [
            `In every silence, I hear you call
${name}, the greatest love of all
Your voice is music to my ears
Erasing all my doubts and fears`,
            `Together we will reach the sky
${name}, forever you and I
Our love's a timeless symphony
A beautiful harmony`,
            `Time may pass and seasons change
But my love will stay the same
${name}, my heart belongs to you
True love, forever true`
        ]
    },
    {
        verses: [
            `${name}, you light up my world
You're my precious, my pearl
In your arms I find my peace
Our love will never cease`,
            `Every day with you is blessed
You're simply the very best
${name}, you make me smile
You make life worthwhile`,
            `Through the ups and downs we go
My love for you will always grow
${name}, you're my guiding star
My heart is where you are`
        ]
    },
    {
        verses: [
            `${name}, in your eyes I see
The most beautiful destiny
Your love has set me free
You're all I'll ever need`,
            `Every word, every touch
${name}, I love you so much
You're the answer to my prayer
Without you, life's not fair`,
            `Hand in hand, we'll face it all
${name}, hear my love's call
Together we are strong
With you is where I belong`
        ]
    }
];

// Get DOM elements
const nameInput = document.getElementById('nameInput');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const songSection = document.getElementById('songSection');
const songDisplay = document.getElementById('songDisplay');

// Event listeners
generateBn.addEventListener('click', generateSong);
resetBtn.addEventListener('click', resetForm);
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateSong();
    }
});

// Generate song function
function generateSong() {
    const name = nameInput.value.trim();
    
    // Validation
    if (!name) {
        alert('Please enter your name! 💙');
        nameInput.focus();
        return;
    }
    
    if (name.length < 2) {
        alert('Please enter a valid name! 💙');
        nameInput.focus();
        return;
    }
    
    // Select random template
    const template = songTemplates[Math.floor(Math.random() * songTemplates.length)];
    
    // Replace ${name} with actual name in all verses
    const personaizedVerses = template.verses.map(verse => {
        return verse.replace(/\$\{name\}/g, `<span class="name-highlight">${name}</span>`);
    });
    
    // Display song
    displaySong(personaizedVerses);
}

// Display song function
function displaySong(verses) {
    let songHTML = '';
    
    verses.forEach((verse, index) => {
        songHTML += `<div class="verse">${verse}</div>`;
    });
    
    songDisplay.innerHTML = songHTML;
    songSection.style.display = 'block';
    
    // Scroll to song
    setTimeout(() => {
        songSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Reset form function
function resetForm() {
    nameInput.value = '';
    songSection.style.display = 'none';
    songDisplay.innerHTML = '';
    nameInput.focus();
}
