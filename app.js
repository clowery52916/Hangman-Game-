


let userName = prompt ('Hello! What\'s your name?');
 if (userName !== null) {
   alert ('Hey there ' + userName +"" + '! I am really excited to play with you!');
 } 
 // getting the user's name 

 const kinderWords = ['bell', 'see', 'say', 'day', 'cat', 'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'];
// array of words


let getRandomWord = function(str) {
  return kinderWords[Math.floor(Math.random() * kinderWords.length)];
}
//making the array of words random
let output = [].map.call(kinderWords, getRandomWord );
//calling on these rando words

let wordOnPage = Array.from(new Set(output));


wordOnPage.random = function(){
  return this [Math.floor(Math.random()*this.length)];
}
//getting the rando words to create a single work, instead of an array
let word = wordOnPage.random();
(word);
console.log(word);
console.log(word.length);
let wordToLet = word.split('')

//player to guess letter 
const answer = wordToLet.map(function(letter) {

  return $(`.hidden-word`).append(`<span class="hidden answer ${letter}">${letter}</span>`)
  
  
  function check(params) {
    let correct = 0
    let checkRandom = wordToLet.split('')
    console.log(checkRandom);
  }
   

});

//once user picks letter remove it, remove it 
// let button = document.getElementsByClassName('.buttonForLetters'),
$('.buttonForLetter').click((f) => {
  console.log (event.target.innerText);
});

// let hidden = "";
// let guessWord = [];
// let hiddenArray = [];
// for(let i = 0; i < hidden.length; i++) {
//   guessWord.push(hiddenWord[i]);
//   hiddenArray.push("_  ")
// }
// $('.hidden-word').append(hiddenArray);

// // ($button).click(function(event){
// //   console.log(wordToLet)
// //   if (answer.indexOf(wordToLet) >=0){
// //     $(event.target).off()
// //   }
// //})
// $('.buttonForLetter').on('click', function(){
//   $(this).remove();
// });
// //reload page 
// $('button').click((r) => {
//   location.reload();
// });