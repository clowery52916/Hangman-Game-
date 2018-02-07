
/*function hangMan () {




  wordSelector = getWord();
  wordLength=wordToGuess.length;*/



let userName = prompt ('Hello! What\'s your name?');
 (userName !== null) 
 alert ('Hey there, ' + userName + '. I am really excited to play with you!');


const firstWords = 
   ['people', 'write', 'city', 'could', 'said', 'time', 'these', 'their', 'which', 'your'];
 const kinderWords = ['bell', 'see', 'say', 'day', 'cat', 'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'];
//const wordSelector = kinderWords [Math.floor(Math.random () * kinderWords[''])]; 
//console.log(wordSelector);
let getRandomWord = function(str) {
  return kinderWords[Math.floor(Math.random() * kinderWords.length)];
}
let output = [].map.call(kinderWords, getRandomWord );
console.log(output);

let wordOnPage = Array.from(new Set(output));

console.log(wordOnPage);

('.wordSelection').append(wordOnPage);

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
  
  //let word = kWord && fWord === kWord && fWord 
    //alert('Game Over')
  //})


lettersToPick = ['abcdefghijklmnop'];

let letters = lettersToPick.map(function(l){
 return l * l;
 })
 console.log(lettersToPick);


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





