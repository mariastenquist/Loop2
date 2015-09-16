//Week3 Loop2 Exercises

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']; //global variable

//problem 1
for(var i=0; i<animals.length; i++) {
 console.log(animals[i]);
}
 console.log("loop 1")

for (var i=0; i<animals.length -1; i++) {
	console.log(animals[i]);
}
console.log("loop 2")
// for (var i=0; i<animals.length; i +=2 ) {
// 	console.log(animals[i]);
// }

for (var i = animals.length -1; i >=0; --i) {
	console.log(animals[i]);
}
console.log("loop 3")

for(var i = 0; i < animals.length; i++){
	var animals = animals.reverse();
	console.log(animals[i]);
	} //this one is an alternative solution to loop #3, using .reverse


var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	for(var i = 0; i < animals.length; i++){
	if (i === 0){
		console.log(animals[i]);

	}
	else if (i === animals.length -1){
		console.log(animals[i]);
	}
	else
		{
		console.log(animals[i]);
		console.log(animals[i]);
		}
	} console.log("loop 4")

//extra loops for practice. Not on the class exercises!!
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
animals.splice(0, 1, 'otter');
for (var i = 0; i < animals.length; i++){
	console.log(animals[i]);
}// removed index 0, and inserted/pushed 'otter' into the array

var animals = ['otter', 'cat', 'butterfly', 'marmot', 'ocelot'];
animals.push('otter', 'guanaco');
for (var i = 0; i < animals.length; i++){
	console.log(animals[i]);
	} //pushes two new elements into the array--appended to the end of array

// for (var i =0; i<animals.length; --i){
// 	console.log(animals[i]);
// } -> why does this crash the browser?? 


