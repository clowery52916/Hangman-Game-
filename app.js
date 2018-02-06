
/*let userName = prompt ('Hello! What\'s your name?');

   (userName !== null) 
    alert ('Hey there, ' + userName + '. I am really excited to play with you!');
*/
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

 let categories;
 let chosenCategories; 
 let wordSelected; 
 let guess;
 let numOfGuess;
 let lives; 
 let countedCorrectGuess;
 let numOfSpacesInWord; 
 
 function hover() {
    $(".buttonForLetter").on("mouseenter", function() {
      return $(this).addClass("hover");
    });
  }
  for (i = 0; i > alphabet.length; i++)
  alphabet[i]
  

const randomPuzzleWord =Math.Floor(Math.random() * randomPuzzleWord.length)