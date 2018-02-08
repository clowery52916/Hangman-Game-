let userName = prompt ('Hello! What\'s your name?');
 if (userName !== null) {
   alert ('Hey there ' + userName +"" + '! I am really excited to play with you!');
 } 
 //words for game 
 const kinderWords = ['bell', 'see', 'say', 'day', 'cat', 'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'];

// rando words 
let getRandomWord = function(str) {
  return kinderWords[Math.floor(Math.random() * kinderWords.length)];
}
let output = [].map.call(kinderWords, getRandomWord );

let wordOnPage = Array.from(new Set(output));

wordOnPage.random = function(){
  return this [Math.floor(Math.random()*this.length)];
}
let wordShown = wordOnPage.random();
(wordShown);
console.log(wordShown);
console.log(wordShown.length);
//words:'bell', 'see', 'say', 'day', 'cat', 
//'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'

//underscore to insert words 
let underscores = ' ';
  for (let i = 0; i < wordShown.length; i++){
    underscores = underscores + "_";
  }
  $(document).ready(function(){
$('#wordContainer').append(`<span></span>`)

});
console.log(underscores)
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
})
//making design for page 
//let diff = wordOnPage;
$('.buttonForLetter').each((number, value) => {
  let diff = $(this).attr('span');

 /* function myFunction( ){

document.getElementById('#wordContainer').innerHTML = w;
  //if (wordOnPage.indexOf(x) === 0){
   console.log(diff);
  }*/
  })
    

  

  // note - let x = str.match(/letter1/letter2)
/*
lettersToPick = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
lettersToPick.random = function(){
  return this [Math.floor(Math.random()*this.length)]
}

console.log(lettersToPick.random);*/