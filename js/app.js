const app = new Game('d', 'k');

const startButton = document.querySelector('#begin-game');

startButton.addEventListener('click', e=>{
    app.startGame();
    e.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});