


let userName = prompt ('Hello! What\'s your name?');
 if (userName !== null) {
   alert ('Hey there ' + userName +"" + '! I am really excited to play with you!');
 } 
 // getting the user's name 
 let lives = 6;
 let input = "";
 const kinderWords = ['BELL', 'SEE', 'SAY', 'DAY', 'CAT', 'HAT', 'DOG', 'LOG', 'MOM', 'DAD', 'CAR', 'HORN'];
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
//getting the rando words to create a single word, instead of an array
let word = wordOnPage.random();
(word);
console.log(word);
console.log(word.length);
let wordToLet = word.split('')
console.log(wordToLet);


$('.hidden-word').append(wordToLet.indexOf);




//creating events to remove button when user clicks
  $('.buttonForLetter').click((event) => {
if (wordToLet.indexOf(event.target.innerText)=== wordToLet.indexOf()) { 
    console.log(wordToLet)
}
})


   $('.buttonForLetter').click((event) => {
   if(wordToLet.indexOf(event.target.innerText) === -1){
     // letter does not exist 
     alert('Try again!')
   }

     
   });

  // let correct = document.getElementsByClassName('.guesses')
  // let unhide = document.getElementsByClassName('.hidden-word')
     
 

    

  $('buttonForLetter').click(() => {
    
  });
  $('.buttonForLetter').on('click', function(){
      $(this).remove();
    });
    //creating event to reload page 
    $('button').click((r) => {
      location.reload();
    });
  
 
  $(".buttonForLetter").click(function(){
  })






     







//player to guess letter 
// const answer = wordToLet.map(function(letter) {

//   return $(`.hidden-word`).append(`<span class="hidden answer" ${letter}>${letter}</span>`)
  
  
//   function check(params) {
//     let correct = 0
//     let checkRandom = wordToLet.split('')
//     console.log(checkRandom);
//   }
   

// });

//once user picks letter remove it, remove it 
// let button = document.getElementsByClassName('.buttonForLetters'),





     
