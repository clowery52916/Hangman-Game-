let userName = prompt ('Hello! What\'s your name?');
 if (userName !== null) {
   alert ('Hey there ' + userName +"" + '! I am really excited to play with you!');
 } 
 // getting the user's name 



 //all the words to make the game work! 
 const kinderWords = ['bell', 'see', 'say', 'day', 'cat', 'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'];
// array of words


let getRandomWord = function(str) {
  return kinderWords[Math.floor(Math.random() * kinderWords.length)];
}
//making the array of words random
let output = [].map.call(kinderWords, getRandomWord );
//calling on these rando words

let wordOnPage = Array.from(new Set(output));
//making these 

wordOnPage.random = function(){
  return this [Math.floor(Math.random()*this.length)];
}
//getting the rando words to create a single work, instead of an array
let wordShown = wordOnPage.random();
(wordShown);
console.log(wordShown);
console.log(wordShown.length);
//words:'bell', 'see', 'say', 'day', 'cat', 
//'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'
// let wordSelected = function(words) {
//   let join = wordOnPage.concat(" ");
//   for (i =0; i > wordOnPage.length; i++){

//   }
// }


//adding underscores to the word that has been randomly chosen
let underscores = [];

var oneLetter = 0;

  for (let i = 0; i < wordShown.length; i++){
    underscores[i] = "_";

  }
  $('.wordContainer').html(`<p class='guessed'>${underscores.concat()}</p>`)

//calling for the underscores


/*function getAnswer(userPicks){
  let correctAnswer = 0
  let checkWord = getWord.split('');
  console.log(checkWord)
  for (let i = 0; i < checkWord.length; i++){
      if(anything === checkWord[i]){
          underscores[i]= userPicks
          $('.wordContainer').html(`<class="guessed">${underscores.concat()}</>`)
          wordShown.push(underscores[i])
      }
  }
}*/
function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < wordShown.length; i ++) {
      if (wordShow[i] === letter) {
        underscores[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = wordShown.join(" ");
  }
  if(count>5) {
    document.getElementById("stat").innerHTML = "You should have guessed it by now!";
  }
}

//buttons
 let button = document.getElementsByClassName('.buttonForLetters');
$('.buttonForLetter').click((l) => {
   
 console.log (event.target.innerText);
})

//once user picks letter remove it, remove it 
$('.buttonForLetter').on('click', function(){
  $(this).remove();
});
//reload page 
$('button').click((r) => {
  location.reload();
});

//making design for page 
//let diff = wordOnPage;
//$('.buttonForLetter').each((number, value) => {
  let diff = $(this).attr('span');



 /* function myFunction( ){

document.getElementById('#wordContainer').innerHTML = w;
  //if (wordOnPage.indexOf(x) === 0){
   console.log(diff);
  }*/
  //})
    

  

  // note - let x = str.match(/letter1/letter2)
/*
lettersToPick = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
lettersToPick.random = function(){
  return this [Math.floor(Math.random()*this.length)]
}

console.log(lettersToPick.random);*/