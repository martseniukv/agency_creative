function getUserInput() {

    let attempts = 10;
    let lastUserInput;

    for (let i = 0; i < attempts; i++) {

        let userInput = +prompt("Enter a number grater than 100");
        lastUserInput = userInput;

        if (userInput == null || Number.isNaN(userInput)) {
            console.log("Please enter valid number");
        }

        if (userInput > 100) {
           console.log("The last entered value is " + userInput);
           return;
        }
    }

    console.log(`Limit of ${attempts} iterations reached. Last number entered: ${lastUserInput}`);
}

getUserInput();