let sentence = "Hi this is the best world";
let words = sentence.split(" ");

let longestWord = "";
let maxLength = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
    }
}

console.log("Longest word:", longestWord); 
