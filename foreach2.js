/*
	For Each 2:
	Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
 */

var foods = [
  {name: 'Pizza', level: 'very'},
  {name: 'Tacos', level: 'mostly'},
  {name: 'Cottage Cheese', level: 'not very'}
]

function faveFoods (element, index, array) {
  console.log(element['name'] + ' is ' + element['level'] + ' delicious')
}

foods.forEach(faveFoods)

// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious
