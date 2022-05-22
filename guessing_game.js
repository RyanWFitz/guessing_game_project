let currentGuessIndex = 0;

const submit = document.querySelector('#submit');
const guessList = document.querySelectorAll("li"); 
const reset = document.querySelector('#reset');
let hint = document.querySelector('.hint');
let input = document.querySelector('input');

function generateWinningNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
let win = generateWinningNumber();


submit.addEventListener('click', function () {
    const guess = Number(input.value);
    input.value = null;  

    if (guess === win) {
        hint.innerText = "You Win";
        hint.style.color= 'green';
        guessList[currentGuessIndex].innerText = guess;
        alert("You Win!");
        return ;
        
    } else if (guess < win) {
        hint.innerText = "Your Guess is too Low!";
        hint.style.color = 'blue';
        title.innerText = "hello";
        guessList[currentGuessIndex].innerText = guess; 

    } else {
        hint.innerText = "Your Guess is too High!";
        hint.style.color = 'red';
        guessList[currentGuessIndex].innerText = guess; 
    }
    
    currentGuessIndex++

    
    if (currentGuessIndex === 5) {
        alert("You Lose");
        return;
    }   
})

reset.addEventListener('click', function (){
   hint.innerText = "Take a Guess";
   hint.style.color = 'white';
   currentGuessIndex = 0;
   for (let i = 0 ; i < guessList.length; i++) {
       guessList[i].innerText = "-"
   }
})
