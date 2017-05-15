var cold = [];
var cold4 = ["Today is: "];
cold[1] = "Monday";
var frozen = function(sum){
  return cold4 + cold[1];
};


// Question 1

function Jasmine(){
  	var today = new Date();
  	var Chloe = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   	var calender = today.getMonth() +1;
  	var Hours = today.getHours();
  	var Minutes = today.getMinutes();
  	return ("Today is: " + Chloe[today.getDay()] + "," + " " + Hours + ":" + Minutes + " " + 
  	today.getDate() + "/" + calender + "/" + today.getFullYear());
}
console.log(Jasmine());

// Question 2

function leap(year){
  	if  (year%4===0 && year%400){
  		return("This is a leap year");
  	}
  	else if (year%100===0 && year%4===0){
  		return("This is NOT a leap year");
  	}
  	else if (year%4===0){
  		return("This is a leap year");
  	}
  	else {
  		return("This is NOT a leap year");
  	}
}


// Question 3

 function randomize() {
 	var n = prompt("Pick a number between 1 & 20");
 	n = Number(n);  
 	var r = Math.ceil(20 * Math.random());
 	var tries = 1;
 	console.log(r);
 	while(r !== n) {
 		n = prompt("Sorry. Try Again");
 		n = Number(n);
 		tries++; 	
 	}
 	return "Excellent! " + "Number of tries: " + tries; 
	
	
}
	
// Question 4

function letter(arrayNum) {
	var min = first[0];
	var max = last[0];
	for(var i = 0; i<first.length; i++) {
		if(first[i]<min)
	}
}  
	

// Question 6

function allProperties(misterObject) {
	var numOfProps = 0;
	for(var prop in misterObject) {
		valOfProp = misterObject[prop]
		console.log(prop, valOfProp);
		numOfProps ++;
	}
	return numOfProps;
}

var superman = {
	name: "Superman", 
	"real name": "Clark Kent",
	height: 76

};

console.log(allProperties(superman));

// Question 7

function read(library) {
	for (var i = 0; i < library.length; i++) {
		var book = library[i];
		var title = book.title;
		var author = book.author;
		var readingStatus = book.readingStatus
		if (readingStatus === true) {
			console.log("I am reading" + title + "by " +(author));
		}
		else if (readingStatus === false) {
			console.log("I will read " + "'" + title +"'" + "by " +(author));
		}
	}
}
