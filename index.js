//html elements

let root = document.getElementById("root");
let elements = document.createElement("div")
let h1 = document.createElement("h1");
let p = document.createElement("p");
let label = document.createElement("label")
let guessField = document.createElement("input");
let submitButton = document.createElement("input");
root.appendChild(elements);
elements.append(h1, p, label, guessField, submitButton);

h1.innerText = "Number Guessing Game"; 
p.innerText = "Pick a number between 1-10.";
label.innerText = "Enter a guess: ";
submitButton.type = "submit";
elements.id = "elements"
submitButton.id = "submitButton";
guessField.id = "guessField";


//end

let answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

submitButton.onclick = () => {

    let guess = guessField.value
    guesses += 1;
    if (guess == answer){
        alert(`CONGRATULATIONS! ${answer} is the number! It took you ${guesses} guesses.`);
        guesses = 0;
        answer = Math.floor(Math.random() * 10 + 1);
    }
    else if(guess < answer){
        alert("Too small!");
        guessField.value = '';
    }
    else{
        alert("Too large!");
        guessField.value = '';
    };
};

//"Enter" keystroke acts as a submit button
guessField.addEventListener("keypress", (event) =>{
    if (event.key === "Enter") {
        event.preventDefault();
        submitButton.click();
        guessField.value = '';
    }
});

