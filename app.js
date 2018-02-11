


let userName = prompt ('Hello! What\'s your name?');
 if (userName !== null) {
   alert ('Hey there ' + userName +"" + '! I am really excited to play with you!');
 } 
 // getting the user's name 
 let lives = 6;

 const wordsToGuess = ['BELL', 'SEE', 'SAY', 'DAY', 'CAT', 'HAT', 'DOG', 'LOG', 'MOM', 'DAD', 'CAR', 'HORN'];
// array of words

const rightLetter = ['You guessed correct!!! Awesome job!!!'];
// message to return in letter is correct 

const wrongLetter = ['Hmmm, not quite, try again!'];
let getRandomWord = function() {
  return wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
}
console.log(wordsToGuess)

let output = [].map.call(wordsToGuess, getRandomWord);
//making array of random  words 
console.log(output)

let wordOnPage = Array.from(new Set(output));
console.log(wordOnPage)
//shortening array of words 

if (wordOnPage.random = function(){
  return this [Math.floor(Math.random()*this.length)];
})
console.log(wordOnPage)
//getting length of the new array 

// getting the rando words to create a single word, instead of an array

let word = wordOnPage.random()
console.log(word); //single word
console.log(word.length);//length of the single word array 
let wordToLet = word.split('')//splitting single word array into 2 different strings

console.log(wordToLet);

// $('#hidden-word').append(wordToLet);


let answerArray = [];
for (i=0; i < wordToLet; i++) {
  answerArray[i] = '_';
//adding underscores
}
let lettersRemaining = wordToLet.length;
console.log(lettersRemaining);

$('#hidden-word').text('Here is your word, good luck!  \n'+"\b  " + answerArray.join("  "));
console.log(answerArray);

function gameOver(loss) {
  $('.buttonForLetter').click((event) => {
  if(loss (event.target.innerText) === -1){
    // letter does not exist 
    $(`#endGameMessage`).text('You didn\'t win this time!, Don\'t worry, you can try again!')
  } else {
    $(`#endGameMessage`).text('Wow! You are so smart! Keep practicing! You\'ll be reading in no time!')   
 }
  })
}

 $('.buttonForLetter').click(function(guess){

  let val = guess.target.innerText;
  $(event.target).remove();

console.log(guess);

let letters = 0; 

  for (let j =0; j <= wordToLet.length; j++) {

    //guess right & return the letter!!!!!!! YEEEEESSSSS
    if(wordToLet[j] === val) {
      answerArray[j] = val;
      $('#hidden-word').text + answerArray.join(" ");
      $(`#endGameMessage`).delay(600).text(rightLetter)
      $(event.target.remove());
      wordToLet--;
      letters++;
    }
  console.log(rightLetter);

  } if (letters === 0) {
    gameOver(false)
  }
  if(letters === 0) {
    $(`#endGameMessage`).delay(600).text(wrongLetter);
    lives--;
  }
})



// //creating events to remove button when user clicks


  $('.buttonForLetter').click((event) => {
if (answerArray.indexOf(event.target.innerText) === rightLetter.indexOf()) { 
    console.log(event.target.innerText)
}
})
//showing all incorrect letters picked in the log 


  //update user when game is over with a message 



  
   
//   // $('div[class = ".buttonForLetter"]').each(function(index, item){
//   //   if(parseInt($(item).data('index'))>2){
//   //     $(item).html(index+1);
//   //   }
//   // });

//    //loop through hidden word & make a list of all elements that equal the word with class of blank - when clicked, loop through word & check if letter # index === clicked work, if it is, change index of text to letter 
 
//   // let correct = document.getElementsByClassName('.guesses')
//   // let unhide = document.getElementsByClassName('#hidden-word')
     
 

    

  
  $('.buttonForLetter').on('click', function(){
      $(this).remove();
    });
    //creating event to reload page 
    $('button').click((r) => {
      location.reload();
    });
  
 



     







// //player to guess letter 
// // const answer = wordToLet.map(function(letter) {

// //   return $(`#hidden-word`).append(`<span class="hidden answer" ${letter}>${letter}</span>`)
  
  
// //   function check(params) {
// //     let correct = 0
// //     let checkRandom = wordToLet.split('')
// //     console.log(checkRandom);
// //   }
   

// // });

// //once user picks letter remove it, remove it 
// // let button = document.getElementsByClassName('.buttonForLetters'),




     
