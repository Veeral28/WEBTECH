let sentence = "hello world it is me";
let words = sentence.split(" ");

for (let i=0; i < words.length ; i++){
    words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let capitalizedSentence = words.join(" ");

console.log(capitalizedSentence); 
