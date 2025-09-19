function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤';
    heart.style.left = (Math.random() * 80 + 10) + '%';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'em';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

function startHeartsAnimation() {
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 300 + Math.random() * 200);
    }
}

window.addEventListener('DOMContentLoaded', startHeartsAnimation);
function showMessage() {
    alert('I love you and always will be!');
}
