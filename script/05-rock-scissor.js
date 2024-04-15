let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    tie:0
};

updateScoreElement();

function playGame(playerMove){
    const computerMove = pickCompMove();

    let result = '';

    if(playerMove === 'Scisors'){
 if(computerMove === 'Rock'){
     result = 'You lose';
 }
 else if(computerMove === 'Paper'){
     result = 'You win';
 }
 else if(computerMove === 'Scisors'){
     result = 'Tie';
 }

}else if(playerMove === 'Paper'){
 if(computerMove === 'Rock'){
     result = 'You win';
 }
 else if(computerMove === 'Paper'){
     result = 'Tie';
 }
 else if(computerMove === 'Scisors'){
     result = 'You lose';
 }
}else if(playerMove === 'Rock'){
if(computerMove === 'Rock'){
 result = 'Tie';
}
else if(computerMove === 'Paper'){
 result='You lose';
}
else if(computerMove === 'Scisors'){
 result = 'You Win';
}
}
if(result === 'You win'){
    score.wins += 1;
}else if(result === 'You lose'){
    score.losses += 1;
}else if(result === 'Tie'){
    score.tie += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move').innerHTML = `You 
<img  src="picture/${playerMove}-rock.png " class="move-icon" >
<img src="picture/${computerMove}-scisor.png" class="move-icon">
Computer`;
}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`Win: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;
}

function pickCompMove(){
const randomNumber = Math.random();
let computerMove ='';
    if(randomNumber >= 0  && randomNumber <1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber <2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber <1){
        computerMove = 'Scisors';
 }
return computerMove;
}