let score=JSON.parse(localStorage.getItem('score')) || {
  win:0,
  loses:0,
  ties:0
};
updateScoreElement();

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';
  if(playerMove==='scissors'){
    if(computerMove==='rock'){
      result = 'You lose.';
    }
    else if(playerMove==='paper'){
      result='You win.';
    }
    else if(playerMove==='scissors'){
      result='Tie.'
    }
  }
  else if(playerMove==='rock'){
    if(computerMove==='rock'){
      result='Tie.';
    }
    else if(computerMove==='paper'){
      result='You win.'
    }
    else if(computerMove==='scissors'){
      result='You lose.'
    }
  }
  else if(playerMove==='paper'){
    if(computerMove==='paper'){
      result='Tie.';
    }
    else if(computerMove==='rock'){
      result='You win.';
    }
    else if(computerMove==='scissors'){
      result='You lose.';
    }
  }
  if(result==='You win.'){
    score.win+=1;
  }
  else if(result==='You lose.'){
    score.loses+=1;
  }
  else if(result==='Tie.'){
    score.ties+=1;
  }
  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-moves').innerHTML=`  You
<img src="${playerMove}-emoji.png" alt="" class="move-icon">
Computer
<img src="${computerMove}-emoji.png" alt="" class="move-icon">`;

}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.win}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove='';
  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  }
  else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='scissors';
  }
  return computerMove;

}