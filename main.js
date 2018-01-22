const addPlayer = document.querySelector('#addPlayer');
const players = document.querySelector('#players');
const playerName = document.querySelector('#playerName');

function createPlayer() {
    const player = document.createElement('div');
    player.className = 'player';   
    
    const nameLabel = document.createElement('label');
    nameLabel.className = 'nameLabel';
    nameLabel.setAttribute('for', 'nameInput');
    if (playerName.value === '') {
        nameLabel.innerHTML = 'Click Here to Enter a Player Name';
    } else {
        nameLabel.innerHTML = playerName.value;
    }
    playerName.value = '';
    
    const nameInput = document.createElement('input');
    nameInput.className = 'nameInput';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', ' Please Enter a Player Name');
    nameInput.style.display = 'none';
    
    const formatDiv = document.createElement('div');
    formatDiv.className = 'formatDiv';
    
    const remove = document.createElement('button');
    remove.className = 'remove';
    remove.innerHTML = 'REMOVE PLAYER';
    
    const counter = document.createElement('div');
    counter.className = 'counter';
    
    const decrement = document.createElement('button');
    decrement.className = 'decrement';
    decrement.innerHTML = '-';
    
    const score = document.createElement('p');
    score.className = 'score';
    score.innerHTML = 0;
    
    const increment = document.createElement('button');
    increment.className = 'increment';
    increment.innerHTML = '+';
    
    counter.appendChild(decrement);
    counter.appendChild(score);
    counter.appendChild(increment);      
    player.appendChild(nameLabel);
    player.appendChild(nameInput);
    
    formatDiv.appendChild(remove);
    formatDiv.appendChild(counter);
    
    player.appendChild(formatDiv);    
    players.appendChild(player);
}//end createPlayer

addPlayer.addEventListener('click', function() {
    createPlayer();
});

players.addEventListener('click', function(event) {
    let target = event.target;
    
    if (target.className === 'remove') {
        let parent = target.parentElement.parentElement;
        parent.setAttribute('id', 'removePlayer');        
        let grandParent = parent.parentElement;        
        let playerToRemove = document.querySelector('#removePlayer');
        grandParent.removeChild(playerToRemove);        
    } else if (target.className === 'increment') {        
        target.previousElementSibling.innerHTML = parseInt(target.previousElementSibling.innerHTML) + 1;
    } else if (target.className === 'decrement') {
        target.nextElementSibling.innerHTML = parseInt(target.nextElementSibling.innerHTML) - 1;
    } else if (target.className === 'nameLabel') {
        target.style.display = 'none';
        target.nextElementSibling.style.display = 'block';
    } else {
        return;
    }
});

players.addEventListener('focusout', function(event) {
    let target = event.target;
    let label = target.previousElementSibling;
    
    if (target.className === 'nameInput') {
        label.innerHTML = target.value;
        if (target.value === '') {
            label.innerHTML = 'Click Here to Enter a Player Name';
        }
        label.style.display = 'block';
        target.style.display = 'none';
    } else {
        return;
    }
});






