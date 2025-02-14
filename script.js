document.getElementById('revealButton').addEventListener('click', function() {
    const content = document.getElementById('hiddenContent');
    content.style.display = 'block';
    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
        document.getElementById('poemButton').classList.remove('hidden');
    }, 50);
    this.style.display = 'none';
});

document.getElementById('poemButton').addEventListener('click', function() {
    const poemContainer = document.getElementById('poemContainer');
    const words = ["¿Y mi vida?", "Dime,", "mi vida,", "¿qué es,", "si no eres tú?"];
    poemContainer.innerHTML = '';
    words.forEach((word, index) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.classList.add('poem-word');
            span.innerText = word;
            poemContainer.appendChild(span);
        }, index * 1000);
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.top = '100vh';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
