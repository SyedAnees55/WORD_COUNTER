//import the 'inquirer' module, which is a  commond line interface for node.js
import inquirer  from "inquirer";
//declare a constant 'answer' and assign it to the result  of inquirer.prompt fuction
const answer:{
    sentence:string
}=await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word "
    }
])
const words = answer.sentence.trim().split(" ")
//print the array of  words to the console
console.log(words);
//print the word count  of the sentence to the console
console.log(`your sentence word count is ${words.length}`);