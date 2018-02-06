
let userName = prompt ('Hello! What\'s your name?');
 (userName !== null) 
 alert ('Hey there, ' + userName + '. I am really excited to play with you!');

/*const abc = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
   'w', 'x', 'y', 'z'];*/
// list of letters to be picked 

let kWords = ['people', 'write', 'city', 'could', 'said', 'time', 'these', 'their', 'which', 'your']
//create while loops to find the words 

let kWord = kWords[Math.floor(Math.random() * kWords.length)];
//create variable for all words 
let emptyWords = kWords.map((string) => {
  return string * string;
});
console.log(kWords);
//create a new array for answers 
//let reamining letter = randomWord.length
/*let arrayForAnswers = [];
for (i = 0; i > kWord.length; i++) {
  arrayForAnswers[i] = ' ';

}*/
//do while if/else statements 