let secretNumber = Math.floor(Math.random() * 100) + 1;//intializes secret number
let attempts = 0;
function setDifficulty()//setting difficulty according to the input given by user 
{
  const max = parseInt(document.getElementById("difficulty").value);//initializing max value according to the difficulty level
  secretNumber = Math.floor(Math.random() * max) + 1;//reinitialing secret number
  resetGame();//calling reset game function
}

function checkGuess()
 {
  const guess = parseInt(document.getElementById("guessInput").value);//taking input from user
  attempts++;//incresing attempts
  let maxAttempts = 10;

  if (attempts >= maxAttempts) {
  document.getElementById("feedback").textContent = `Game over. The number was ${secretNumber}.`;
}

  if (isNaN(guess)) //TO display enter valid input if input is not a number
  {
    
    document.getElementById("feedback").textContent = "Please enter a valid number.";
  } else if (guess < secretNumber)//to check whether the input by user is less that secret number
     {
    document.getElementById("feedback").textContent = "Too low. Try again.";
  } else if (guess > secretNumber)//to check whether the input by user is higher that secret number
   {
    document.getElementById("feedback").textContent = "Too high. Try again.";
  } else//to display that input given by user matches the secret number
   {
    document.getElementById("feedback").textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
  }
}
function resetGame() //reset function 
{
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guessInput").value = "";
}