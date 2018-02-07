
/*function hangMan () {




  wordSelector = getWord();
  wordLength=wordToGuess.length;*/



let userName = prompt ('Hello! What\'s your name?');
 (userName !== null) 
 alert ('Hey there, ' + userName + '. I am really excited to play with you!');


const firstWords = 
   ['people', 'write', 'city', 'could', 'said', 'time', 'these', 'their', 'which', 'your'];
 const kinderWords = ['bell', 'see', 'say', 'day', 'cat', 'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'];
//const wordSelector = [Math.floor(12*Math.random())
//]
let getRandomWord = function(str) {
  return kinderWords[Math.floor(Math.random() * kinderWords.length)];
}
let output = [].map.call(kinderWords, getRandomWord );


let wordOnPage = Array.from(new Set(output));

console.log(wordOnPage);



//document.getElementById('kinderWords').textContent = wordSelector;
//let kWord = kinderWords.map(function(w){



//});
//console.log(kinderWords);
//console.log(firstWords);

//let fWord = firstWords.map(function(w){
//console.log(fWord);


//let word = [];

  //for(i = 0; i > kWord.length; i++) {
   // kWord[i].push(word);
  //}
    //console.log(word);

  //while(kWord.length < 7) {
    //console.log(kWord += word.charAt(Math.floor(Math.random() * word.length)))
  //} 



lettersToPick = ['abcdefghijklmnop'];
let randomLetter = Math.floor(Math.random) * (lettersToPick) -1; 

 console.log(lettersToPick);

 let letterToCompare = lettersToPick[randomLetter];

 console.log(letterToCompare);

 

 /*function intersect_arrays(wordOnPage, lettersToPick) {
  var sorted_wordOnPage = wordOnPage.concat().sort();
  var sorted_lettersToPick = lettersToPick.concat().sort();
  var common = [];
  var wordOnPage_i = 0;
  var lettersToPick_i = 0;

  while (wordOnPage_i < wordOnPage.length
         && lettersToPick_i < lettersToPick.length)
  {
      if (sorted_wordOnPage[wordOnPage_i] === sorted_lettersToPick[lettersToPick_i]) {
          common.push(sorted_wordOnPage[wordOnPage_i]);
          wordOnPage_i++;
          lettersToPick_i++;
      }
      else if(sorted_wordOnPage[wordOnPage_i] < sorted_lettersToPick[lettersToPick_i]) {
        wordOnPage_i++;
      }
      else {
        lettersToPick_i++;
      }
  }
  return common;
}
console.log(intersect_arrays(wordOnPage, lettersToPick));*/
//click button and pick a letter 
 let button = document.getElementsByClassName('.buttonForLetters');
$('.buttonForLetter').click((l) => {
   
 console.log (event.target.innerText);
})

//once letter is picked, remove it 
$('.buttonForLetter').on('click', function(){
  $(this).remove();
});




//reload page 
$('button').click((r) => {
  location.reload();
})





