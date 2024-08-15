/**
 * Function to play the Craps game.
 * Generates two random numbers between 1 and 6 to simulate dice rolls.
 * Calculates the sum of the two dice.
 * Determines the game outcome based on the sum and specific conditions.
 * Outputs the result to the web page using innerHTML.
 */
function playCraps() {
    // Generate two random numbers between 1 and 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    // Calculate the sum of the dice
    var sum = die1 + die2;
    // Get the element to display the result
    var resultElement = document.getElementById("gameResult");

    // Determine the game outcome
    if (sum === 7 || sum === 11) {
        // If sum is 7 or 11, player loses
        resultElement.innerHTML = `You rolled ${die1} and ${die2} (Total: ${sum}). CRAPS – you lose!`;
    } else if (die1 === die2 && die1 % 2 === 0) {
        // If the dice are doubles and even, player wins
        resultElement.innerHTML = `You rolled ${die1} and ${die2} (Total: ${sum}). You won!`;
    } else {
        // Otherwise, it's a push
        resultElement.innerHTML = `You rolled ${die1} and ${die2} (Total: ${sum}). You pushed!`;
    }
}

/**
 * Function to demonstrate the use of parameters and output results.
 * This is a placeholder function to showcase handling input and output in JavaScript.
 * @param {number} value - The input value to be processed.
 */
function exampleFunction(value) {
    // Process the input value (for demonstration purposes, just doubling it)
    var result = value * 2;
    // Output the result to the console
    console.log("The result is: " + result);
}
