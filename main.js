var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

for(var i=0; i<animals.length; i++) {
 console.log(animals[i]);
}

for (var i=0; i<animals.length -1; i++) {
	console.log(animals[i]);
}

for (var i=0; i<animals.length; i +=2 ) {
	console.log(animals[i]);
}

for (var i=0; i<animals.length[-1]; i--) {
	console.log(animals[i]);
}
for (var i=0; i<animals.length[-1]; i++) {
	console.log(animals[i*2]);
}



