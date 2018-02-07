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
wordOnPage.random();



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


/*
lettersToPick = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
lettersToPick.random = function(){
  return this [Math.floor(Math.random()*this.length)]
}

console.log(lettersToPick.random);*/