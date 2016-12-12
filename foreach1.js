/*
	For Each:
	Use the .forEach iterator to loop over the following array of foods and say you like them.
 */

var foods = ["pizza", "tacos", "ice cream"];

foods.forEach(function (fave) {
  console.log('I like ' + fave)
})

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
