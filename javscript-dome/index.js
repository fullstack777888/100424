console.log("hello world from the file")

var title = document.querySelector("h1");
// console.log(title)
title.innerHTML = "This is another title";



function say( heloo )
{
	for(var i = 0; i < 10; ++i)
		console.log(" say: " + heloo );
}

say("shalom")
say("goodbey")

// Write function to get two arguments
//  your name and age and should print to console “My name” + name + “, and my age:” + age.
// Call that function with your name and age
// Rewrite function to be arrow function.
// Call the second function.

//regular function
// function printNameAge1(name, age) {
//     console.log("my name is: " + name + " and my age is : " + age);
// }

// printNameAge1("Arja", 12)

// //arrow function
// const printNameAge2 = (name, age) => {
//     console.log("my name is: " + name + " and my age is : " + age);
// }

// printNameAge2("John", 18)
const x = 5

const nodel = document.getElementById("header6")
console.log(nodel)
nodel.innerHTML = "<button>press me </button> "