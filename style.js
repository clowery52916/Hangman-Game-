let userName = prompt( 'Hello! What\'s your name?' );
if ( userName !== null ) {
	alert( 'Hey there ' + userName + "" + '! I am really excited to play with you!' );
}
// getting the user's name 
let lives = 6;
let input = "";
const kinderWords = [ 'BELL', 'SEE', 'SAY', 'DAY', 'CAT', 'HAT', 'DOG', 'LOG', 'MOM', 'DAD', 'CAR', 'HORN' ];
// array of words
let getRandomWord = function( str ) {
	return kinderWords[ Math.floor( Math.random() * kinderWords.length ) ];
}
//making the array of words random
let output = [].map.call( kinderWords, getRandomWord );
//calling on these rando words
let wordOnPage = Array.from( new Set( output ) );
wordOnPage.random = function() {
	return this[ Math.floor( Math.random() * this.length ) ];
}
//getting the rando words to create a single word, instead of an array
let word = wordOnPage.random();
( word );
console.log( word );
console.log( word.length );
let wordToLet = word.split( '' )
console.log( wordToLet );
$( '.hidden-word' )
	.append( wordToLet.indexOf );
let answerArray = [];
let wrongGuess = [];
//correctGuess is answerArray
for ( i = 0; i < wordToLet.length; i++ ) {
	answerArray.push( '_' );
	//adding underscores
}
console.log(answerArray)
// let lettersRemaining = wordToLet.length;
// console.log(wordToLet);
$( '#hidden-word' ).text = answerArray.join( "  " );
//word elm and correct guess
$( '#letterCount' ).text = lives;
//letter count and allowed guess
console.log( lives )
console.log( answerArray );
$(wordToLet).show

       $( '.buttonForLetter' ).click( ( event ) => {
				if ( wordToLet.indexOf( event.target.innerText ) === -1 ) {
					// letter does not exist 
					alert( 'Try again!' )
				} else {
          alert('Good Job! You got a letter! Type it in the box below!!')
        }
      } ), $( 'buttonForLetter' ).click( () => {} ),
       $( '.buttonForLetter' ).on( 'click', function() {
				$( this ).remove();
      } );
      //creating event to reload page 
    $('button').click((r) => {
      location.reload()
    } );

    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');




////go back and figure out what isn't working!!!!!
/// multiple things have worked so i think 
///there is something labeled wrong, or typo maybe- FRESH EYES!!!
///FIGURE IT OUT!!!





// function updateGuess( letter ) {
// 	lives--;
// 	$( '#letterCount' ) = lives;
// 	if ( wordToLet.indexOf( letter ) === -1 ) {
// 		wrongGuess.push( letter ); //update letter guessed 
// 		$( '#guessed' ) = wrongGuess.join( ', ' );
// 	} else {
// 		for ( let i = 0; i < wordToLet.length; i++ ) {
// 			answerArray[ i ] = letter;
// 		} 
//   }
  
// 	$( '#hidden-word' ) = answerArray.join( ' ' );
// 	$( '.buttonForLetter' ).on( ( event ) => {
// 				if ( answerArray.indexOf( '_' ) === -1 ) {
// 					$( `#endGameMessage` ).text( 'Wow! You are so smart! Keep practicing! You\'ll be reading in no time!' );
// 				} else if ( lives === 0 ) {
// 					// letter does not exist 
// 					$( `#endGameMessage` ).text( 'You didn\'t win this time!, Don\'t worry, you can try again!' )
// 				}
//       }),
//       console.log(answerArray)
	
			// //creating events to remove button when user clicks
			// $( '.buttonForLetter' ).click( ( event ) => {
			// 	let userPick = String.fromCharCode( event.target.innerText ).toLowerCase();
			// 	updateGuess( userPick );
			// 	checkWin();
				// if (wordToLet.indexOf(event.target.innerText)=== wordToLet.indexOf()) { 
      // } ),
 //guess right & return the letter!!!!!!! YEEEEESSSSS

  
//     $('#hidden-word').text + answerArray.join(" ");
//     $(`#endGameMessage`).delay(600).text(rightLetter)
//     $(event.target.remove());
//     wordToLet--;
//     lettersRemaining++;
  
// console.log(lettersRemaining);



//  if (lettersRemaining === 0) {
//   gameOver(false)
// }
// if(lettersRemaining === 0) {
//   $(`#endGameMessage`).delay(600).text(wordToLet);
//   lives--;
//   letterCountElement.innerHTML = lives;
// }