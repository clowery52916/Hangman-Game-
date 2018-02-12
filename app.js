
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

let word = wordsToGuess.random()
console.log(word); //single word
console.log(word.length);//length of the single word array 
let wordToLet = word.split('')//splitting single word array into 2 different strings

console.log(wordToLet);
let output = [].map.call(wordsToGuess, getRandomWord);
//making array of random  words 
console.log(output)

let w = Array.from(new Set(output));
console.log(w)

$('#hidden-word').append(wordToLet);
//shortening array of words 

if (w.random = function(){
  return this [Math.floor(Math.random()*this.length)];
})
console.log(w)
//getting length of the new array 




let answerArray = [];
for (i=0; i < wordToLet; i++) {
  answerArray[i] = '_';
//adding underscores
}
let lettersRemaining = wordToLet.innerText;
console.log(lettersRemaining);

// $('#hidden-word').text('Here is your word, good luck!  \n'+"\b  " + answerArray.join("  "));
console.log(answerArray);


  $('.buttonForLetter').on((event) => {
  	if(wordOnPage.indexOf (event.target.innerText) === -1){
    // letter does not exist 
    $(`#endGameMessage`).text('You didn\'t win this time!, Don\'t worry, you can try again!')
  } else {
    $(`#endGameMessage`).text('Wow! You are so smart! Keep practicing! You\'ll be reading in no time!')   
 }
  })


//  $('.buttonForLetter').click(function(guess){

// 	let singleLet = guess.target.innerText;
// 	$(event.target).remove();
// 	//remove button

// console.log(guess);

// let lettersRemaining = 0; 

//   for (let j =0; j <= wordOnPage.length; j++) {



const answer = wordOnPage.map(function(letter) {
	return $(`#hidden-word`).append(`<span class ='hidden answer' ${letter}>${letter}</span>`);
})
$('.buttonForLetter').on('click', function(){
	$(this).remove();
  }),
  //creating event to reload page 
  $('button').click((r) => {
	location.reload();
  });



// //creating events to remove button when user clicks


//   $('.buttonForLetter').click((event) => {
// if (wordToLet.indexOf(event.target.innerText) === -1) { 
// 	wordToLet.push(answerArray.indexOf)
// 	console.log(event.target.innerText)

// }
// }),
//showing all incorrect letters picked in the log 


  //update user when game is over with a message 

  
