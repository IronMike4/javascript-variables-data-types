/* This is the fortuneTeller.js file that asks for user input then displays some output based on the input.
I tried to a combination of let and const to declare variables based on the required user input.
I had to do a bit of research on how to display the output in the format that I wanted it. The following sites helped me achieve this:
 - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
 - https://www.w3schools.com/html/html_paragraphs.asp
For more information about this please visit https://github.com/IronMike4/javascript-variables-data-types */

// Getting the user input
const motherFirstName = prompt("Enter your mother's first name:");
const streetName = prompt("Enter the name of the street you grew up on:");
const favouriteColor = prompt("Enter your favorite color as a child:");
const currentAge = Number(prompt("Enter your current age:"));
let userNumberInput = Number(prompt("Enter a number between 1 and 10:"));

// Working out the fortune telling
const yearsToMeetBestFriend = userNumberInput;
const friendName = motherFirstName + " " + streetName;
const yearsToMarriage = currentAge + userNumberInput;
const numberOfChildren = currentAge % userNumberInput;
const numberOfYearsToDyeHair = Math.round(currentAge / userNumberInput);

// Concatinating the string
const fortuneMessage = `In ${yearsToMeetBestFriend} years you are going to meet your friend named ${friendName}.\nYou will get married in ${yearsToMarriage} years and have ${numberOfChildren} children.\nIn ${numberOfYearsToDyeHair} years you are going to dye your hair ${favouriteColor}.`;

// Outputing the fortune message
console.log(fortuneMessage);

// Displaying the fortune message on the page
document.body.innerHTML = `<h2>Your Fortune:</h2><pre>${fortuneMessage}</pre>`;
