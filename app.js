let userName = prompt ('Hello! What\'s your name?');
 if (userName !== null) {
   alert ('Hey there ' + userName +"" + '! I am really excited to play with you!');
 } 

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

var word = 0;
for (i = 0; i < wordOnPage.length; i++){
  if (wordOnPage[i] < word) {
    word = wordOnPage[i];
  }
}
console.log(word);

lettersToPick = ['abcdefghijklmnop'];
let randomLetter = Math.floor(Math.random) * (lettersToPick) -1; 

 console.log(lettersToPick);

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


