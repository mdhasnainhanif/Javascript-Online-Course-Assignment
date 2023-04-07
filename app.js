// Question no 1

// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// var user1 = prompt("Enter First Number");
// var user2 = prompt("Enter Second Number");

// if (user1 > user2) {
//   console.log(user1, "Is Greater then", user2);
// } else if (user2 > user1) {
//   console.log(user2, "Is Greater then", user1);
// }

// Question no 2

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// var userInput = +prompt("Enter a + or - value")

// if(userInput < 0){
//     alert("The sign is -")
// }else if(userInput > 0){
//     alert("The sign is +")
// }else if(userInput === ""){
//     alert("Please Enter a Valid Number")
// }
// else{
//     alert("Please Enter a Valid Number")
// }

// Question 3

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let num1 = +prompt("Enter a 1st Number");
// let num2 = +prompt("Enter a 2nd Number");
// let num3 = +prompt("Enter a 3rd Number");
// let num4 = +prompt("Enter a 4th Number");
// let num5 = +prompt("Enter a 5th Number");

// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//   console.log(num1);
// } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//   console.log(num2);
// } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//   console.log(num3);
// } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//   console.log(num4);
// } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//   console.log(num5);
// }


// Question no 4

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//     if(i % 2 === 0){
//         console.log(i ,"is Even")
//     }
//     else if(i % 2 != 0){
//         console.log(i ,"is Odd")
//     }
// }



// Question no 5


var marks = +prompt("Write your Marks" )

if(marks < 60){
    console.log("You are Fail");
}else if(marks <= 70){
    console.log("Grade D")
}else if(marks <= 80){
    console.log("Grade C")
}else if(marks <= 90){
    console.log("Grade B")
}else if(marks <= 100){
    console.log("Grade A")
}else{
    console.log("Please Enter Number Less then 100")
}




// Question no 6


for(i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    }else if(i % 5 === 0){
        console.log("Buzz")
    }
}



// Question no 7


for (let i = 0; i <= 5; i++) {
    let line = ""
    for(let j = 1; j <= i; j++){
        line += '*'
    }
    console.log(line)
}