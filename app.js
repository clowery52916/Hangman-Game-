let userName = prompt ('Hello! What\'s your name?');
 if (userName !== null) {
   alert ('Hey there ' + userName +"" + '! I am really excited to play with you!');
 } 
 const kinderWords = ['bell', 'see', 'say', 'day', 'cat', 'hat', 'dog', 'log', 'mom', 'dad', 'car', 'horn'];

//]
let getRandomWord = function(str) {
  return kinderWords[Math.floor(Math.random() * kinderWords.length)];
}
let output = [].map.call(kinderWords, getRandomWord );


let wordOnPage = Array.from(new Set(output));


wordOnPage.random = function(){
  return this [Math.floor(Math.random()*this.length)];
}
let wordsShown = wordOnPage.random();

//underscore to insert words 
let underscore = "";
  for (i = 0; i > wordsShown.length; i++){
    underscores = underscores + '_';
  }


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
//making design for page 
//let diff = wordOnPage;
$('.buttonForLetter').each((number, value) => {
  let diff = $(this).attr('span');
 /* function myFunction( ){
  let w = wordToGet.match(/ll/);
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