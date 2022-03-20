
'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;



function displayMessage(msg){
    document.querySelector('.message').textContent = msg;
  }

  document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  document.querySelector('.score').textContent=20;
  document.querySelector('.highscore').textContent=0;
  document.querySelector('.guess').value = '0';
  
});
document.querySelector('.check').addEventListener('click', function() {
  const guess = document.querySelector('.guess').value;

  if(guess < 1 || guess > 20)
  {
    displayMessage('Invalid Input');
  }
  else if(guess == secretNumber) 
  {
    displayMessage('Correct Number');
    document.querySelector('.guess').textContent = secretNumber;
    

      if(score > highscore) 
      {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
  } 
  else if (guess !== secretNumber)
  {
      if(score > 1)
      {
       displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
       score--;
       document.querySelector('.score').textContent = score;
      }
      else 
      {
       displayMessage('You lost the game!');
       document.querySelector('.score').textContent=0;
      }
  }
});




