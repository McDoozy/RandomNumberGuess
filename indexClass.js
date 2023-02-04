class RandomNumberGame{
    constructor(){
        this.root = document.getElementById("root");
        this.elements = document.createElement("div");
        this.h1 = document.createElement("h1");
        this.p = document.createElement("p");
        this.label = document.createElement("label")
        this.guessField = document.createElement("input");
        this.submitButton = document.createElement("input");

        this.answer = Math.floor(Math.random() * 10 + 1);
        this.guesses = 0;
        
    };

    setElements(){
        this.root.appendChild(this.elements);
        this.elements.append(this.h1, this.p, this.label, this.guessField, this.submitButton);
    };

    setText(){
        this.h1.innerText = "Number Guessing Game"; 
        this.p.innerText = "Pick a number between 1-10.";
        this.label.innerText = "Enter a guess: ";
    };

    setId(){
        this.elements.id = "elements"
        this.submitButton.id = "submitButton";
        this.guessField.id = "guessField";
    };

    setType(){
        this.submitButton.type = "submit";
    }
    
    RNG(){
        this.submitButton.onclick = () => {

            this.guess = this.guessField.value
            this.guesses += 1;

            if (this.guess == this.answer){
                alert(`CONGRATULATIONS! ${this.answer} is the number! It took you ${this.guesses} guesses.`);
                this.guesses = 0;
                this.answer = Math.floor(Math.random() * 10 + 1);
            }
            else if(this.guess < this.answer){
                alert("Too small!");
                this.guessField.value = '';
            }
            else{
                alert("Too large!");
                this.guessField.value = '';
            };
        };
    }
}

let game = new RandomNumberGame();

game.setElements();
game.setText();
game.setId();
game.setType();