
document.querySelector('.red-player-score').addEventListener('click', function () {
    decrementScore('red-player');
});

function decrementScore(className) {
    const scoreElement = document.querySelector(`.${className}`);
    let score = parseInt(scoreElement.textContent) || 0;
    if (score > 0) {
        score--;
        scoreElement.textContent = score;
    }

    // Check for score difference after decrementing
    checkScoreDifference();
}
    // Function to check the score difference and determine the winner



// Timer related functions
let initialTime = 6; // Set initial time to 2 minutes (120 seconds)
  let paused = true;
  let intervalId;
  const counterElement = document.getElementById('counter');
  const secondsButtonsContainer = document.getElementById('seconds-buttons');
  let pausedAt = Date.now(); // Initialize pausedAt with the current time

  // Function to update the timer counter
  // Function to update the timer counter
// Add a variable to keep track of whether the countdown is manually paused
let manuallyPaused = true;



// Function to manually pause the countdown
function pauseCountdown() {
    manuallyPaused = true;
    clearInterval(intervalId);
    showHideSecondsButtons(true); // Show the buttons when paused
}

// Function to manually resume the countdown
// function resumeCountdown() {
//     manuallyPaused = false;
//     paused = false;
//     pausedAt = Date.now();
//     showHideSecondsButtons(false); // Hide the buttons when resumed
// }


  // Function to toggle the timer
  function toggleTimer() {
    if (paused) {
        pausedAt = Date.now();
        intervalId = setInterval(updateCounter, 1000);
    } else {
        clearInterval(intervalId);
        // Calculate the time elapsed since the timer was paused
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor((currentTime - pausedAt) / 1000);
        initialTime -= elapsedSeconds;
    }

    paused = !paused;
}

  

// Function to show/hide the seconds buttons
function showHideSecondsButtons(show) {
    secondsButtonsContainer.style.display = show ? 'flex' : 'none';
}

// Round-related functions
// Define the initial round number
let currentRound = 1;

// Function to increment the round number
function incrementRound() {
    currentRound++;
    document.getElementById('roundNumber').textContent = currentRound;
}

// Function to decrement the round number
function decrementRound() {
    if (currentRound > 1) {
        currentRound--;
        document.getElementById('roundNumber').textContent = currentRound;
    }
}


// Function to increment the number
function incrementNumber() {
    const numberElement = document.getElementById('number');
    let number = parseInt(numberElement.textContent) || 0;
    number++;
    numberElement.textContent = number;
}

// Functions related to red player
function addToRedPlayer(value) {
            const redPlayerElement = document.querySelector('.red-player-score');
            let redPlayerScore = parseInt(redPlayerElement.textContent) || 0;
            redPlayerScore += value;
            redPlayerElement.textContent = redPlayerScore;

            // Check for score difference after updating red player score
            checkScoreDifference();
}

function incrementScore(scoreClassName) {
        const scoreElement = document.querySelector(`.${scoreClassName}`);
        let score = parseInt(scoreElement.textContent) || 0;
        score++;
        scoreElement.textContent = score;

        // Check for score difference after incrementing
        checkScoreDifference();
    }

    // Function to decrement the score
    function decrementScore(scoreClassName) {
        const scoreElement = document.querySelector(`.${scoreClassName}`);
        let score = parseInt(scoreElement.textContent) || 0;
        if (score > 0) {
            score--;
            scoreElement.textContent = score;
        }

        // Check for score difference after decrementing
        checkScoreDifference();
    }


// Functions related to blue player


document.querySelector('.red-player-score').addEventListener('click', function () {
    decrementScore('red-player');
});

// Functions related to red player
function addToRedPlayer(value) {
    const redPlayerElement = document.querySelector('.red-player-score');
    let redPlayerScore = parseInt(redPlayerElement.textContent) || 0;
    redPlayerScore += value;
    redPlayerElement.textContent = redPlayerScore;

    // Check for score difference after updating red player score
    checkScoreDifference();
}

// Functions related to blue player
function addToBluePlayer(value) {
    const bluePlayerElement = document.querySelector('.blue-player-score');
    let bluePlayerScore = parseInt(bluePlayerElement.textContent) || 0;
    bluePlayerScore += value;
    bluePlayerElement.textContent = bluePlayerScore;

    // Check for score difference after updating blue player score
    checkScoreDifference();
}






// Function to check the score difference and determine the winner



document.querySelector('.red-player-score').addEventListener('click', function () {
    decrementScore('red-player');
});

// Functions related to red player
function addToRedPlayer(value) {
    const redPlayerElement = document.querySelector('.red-player-score');
    let redPlayerScore = parseInt(redPlayerElement.textContent) || 0;
    redPlayerScore += value;
    redPlayerElement.textContent = redPlayerScore;

    // Check for score difference after updating red player score
    checkScoreDifference();
}

// Functions related to blue player
function addToBluePlayer(value) {
    const bluePlayerElement = document.querySelector('.blue-player-score');
    let bluePlayerScore = parseInt(bluePlayerElement.textContent) || 0;
    bluePlayerScore += value;
    bluePlayerElement.textContent = bluePlayerScore;

    // Check for score difference after updating blue player score
    checkScoreDifference();
}

// Function to check the score difference and determine the winner
function checkScoreDifference() {
    const scoreRed = parseInt(document.querySelector('.red-player-score').textContent) || 0;
    const scoreBlue = parseInt(document.querySelector('.blue-player-score').textContent) || 0;

    const scoreDifference = Math.abs(scoreRed - scoreBlue);

    if (scoreDifference >= 12) {
        const winner = scoreRed > scoreBlue ? "red" : "blue";

        const winnerAnnouncement = document.getElementById('winner-announcement');
        const winnerTextElement = document.getElementById('winner-text');
        winnerTextElement.textContent = `${winner} wins by 12 points difference!`;

        const backgroundColor = winner === "red" ? 'red' : 'blue';
        winnerAnnouncement.style.backgroundColor = backgroundColor;

        winnerAnnouncement.style.display = 'flex';

        clearInterval(intervalId);

        // Switch to 30-second phase
        initialTime = 60;
        pausedAt = Date.now();
        intervalId = setInterval(updateCounter, 1000);

        // Reset scores and gamjum counts to 0 after 30 seconds
        setTimeout(() => {
            document.querySelector('.red-player-score').textContent = 0;
            document.querySelector('.blue-player-score').textContent = 0;
            document.querySelector('.gamScoreRED').textContent = 0;
            document.querySelector('.gamScoreRED2').textContent = 0;
        }, 30000); // 30000 milliseconds (30 seconds)
    }
}


// function checkScoreDifference() {
//     const scoreRed = parseInt(document.querySelector('.red-player-score').textContent) || 0;
//     const scoreBlue = parseInt(document.querySelector('.blue-player-score').textContent) || 0;

//     const scoreDifference = Math.abs(scoreRed - scoreBlue);

//     if (scoreDifference >= 12) {
//         const winner = scoreRed > scoreBlue ? "red" : "blue";

//         const winnerAnnouncement = document.getElementById('winner-announcement');
//         const winnerTextElement = document.getElementById('winner-text');
//         winnerTextElement.textContent = `${winner} wins by 12 points difference!`;

//         const backgroundColor = winner === "red" ? 'red' : 'blue';
//         winnerAnnouncement.style.backgroundColor = backgroundColor;

//         winnerAnnouncement.style.display = 'flex';

//         clearInterval(intervalId);

//         // Switch to 30-second phase
//         initialTime = 60;
//         pausedAt = Date.now();
//         intervalId = setInterval(updateCounter, 1000);

//         // Reset scores and gamjum counts to 0 after 30 seconds
//         setTimeout(() => {
//             document.querySelector('.red-player-score').textContent = 0;
//             document.querySelector('.blue-player-score').textContent = 0;
//             document.querySelector('.gamScoreRED').textContent = 0;
//             document.querySelector('.gamScoreRED2').textContent = 0;
//         }, 30000); // 30000 milliseconds (30 seconds)
//     }
// }

// // Determine the winner based on the score difference
// let winner;
// if (Math.abs(scoreRed - scoreBlue) > 12) {
//     winner = scoreRed > scoreBlue ? "red" : "blue";

//     // Display winner announcement
//     const winnerAnnouncement = document.getElementById('winner-announcement');
//     const winnerTextElement = document.getElementById('winner-text');
//     winnerTextElement.textContent = `${winner} winner!`;

//     // Set the background color based on the winner
//     const backgroundColor = winner === "red" ? 'red' : 'blue';
//     winnerAnnouncement.style.backgroundColor = backgroundColor;

//     // Show the announcement
//     winnerAnnouncement.style.display = 'flex';

//     // Stop the countdown
//     clearInterval(intervalId);
// }


function closeWinnerPopup() {
    const winnerAnnouncement = document.getElementById('winner-announcement');
    winnerAnnouncement.style.display = 'none';
}

function updateCounter() {
    const counterElement = document.getElementById('counter');

    if (!paused) {
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor((currentTime - pausedAt) / 1000);
        let remainingTime = initialTime - elapsedSeconds;

        if (remainingTime <= 0) {
            // Switch between 30 seconds and 2 minutes
            initialTime = (initialTime === 120) ? 60 : 120;

            // Increment the round score when 30 seconds end
            if (initialTime === 60) {
                incrementRoundScore();
            }

            // Restart the countdown
            pausedAt = Date.now();

            // Reset scores and gamjum counts to 0 after 30 seconds
            setTimeout(() => {
                document.querySelector('.red-player-score').textContent = 0;
                document.querySelector('.blue-player-score').textContent = 0;
                document.querySelector('.gamScoreRED').textContent = 0;
                document.querySelector('.gamScoreRED2').textContent = 0;
            }, 30000); // 30000 milliseconds (30 seconds)
        } else {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            // Apply styles based on initial time
            if (initialTime === 120) {
                counterElement.style.color = 'black';
                counterElement.style.backgroundColor = 'yellow';
            } else {
                counterElement.style.color = 'white';
                counterElement.style.backgroundColor = 'black';
            }

            const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            counterElement.textContent = formattedTime;

            // Pause the countdown when it reaches exactly 2:00 remaining time
            if (minutes === 2 && seconds === 0) {
                paused = true;
                clearInterval(intervalId);
            }
        }
    } else {
        // Apply styles for paused state
        counterElement.style.color = 'white';
        counterElement.style.backgroundColor = 'black';
    }
}


function incrementRoundScore() {
    const roundNumberElement = document.getElementById('roundNumber');
    currentRound++;
    roundNumberElement.textContent = currentRound;
}

// Define the initial match number
let currentMatchNumber = 1;

// Function to increment the match number
function incrementMatchNumber() {
    currentMatchNumber++;
    document.getElementById('number').textContent = currentMatchNumber;
}

// Function to decrement the match number
function decrementMatchNumber() {
    if (currentMatchNumber > 1) {
        currentMatchNumber--;
        document.getElementById('number').textContent = currentMatchNumber;
    }
}
// Function to update the scores
function updateScore(scoreClassName, increment) {
    const scoreElement = document.querySelector(`.${scoreClassName}`);
    let score = parseInt(scoreElement.textContent) || 0;

    // Check if the score is for gamjum
    const isGamjum = scoreClassName === 'gamScoreRED' || scoreClassName === 'gamScoreRED2';

    // Update the score
    score += increment;
    scoreElement.textContent = score;

    // Update the respective player's score if it's a gamjum
    if (isGamjum) {
        if (scoreClassName === 'gamScoreRED') {
            const redPlayerElement = document.querySelector('.red-player-score .redScore');
            let redPlayerScore = parseInt(redPlayerElement.textContent) || 0;
            redPlayerScore += increment;
            redPlayerElement.textContent = redPlayerScore;
        } else if (scoreClassName === 'gamScoreRED2') {
            addToBluePlayer(increment);
        }
    }
}

// Function to increment the score
function incrementScore(scoreClassName) {
    updateScore(scoreClassName, 1);
}

// Function to decrement the score
function decrementScore(scoreClassName) {
    updateScore(scoreClassName, -1);
}
//nb
// Function to decrement the countdown timer
function decrementCountdown() {
    if (initialTime > 0) {
        initialTime--; // Decrease timer by 1 second
        updateCounter(); // Update the counter immediately
    }
}

// Function to increment the countdown timer
function incrementCountdown() {
    initialTime++; // Increase timer by 1 second
    updateCounter(); // Update the counter immediately
}


// Function to decrement the countdown timer
function decrementCountdown() {
    if (paused) {
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor((currentTime - pausedAt) / 1000);
        initialTime -= elapsedSeconds;
        updateCounter(); // Update the counter immediately
    } else {
        initialTime--; // Decrease timer by 1 second
        updateCounter(); // Update the counter immediately
    }
}

// Function to increment the countdown timer
function incrementCountdown() {
    if (paused) {
        const currentTime = Date.now<=120();
        const elapsedSeconds = Math.floor((currentTime - pausedAt) / 1000);
        initialTime += elapsedSeconds;
        updateCounter(); // Update the counter immediately

        
    } else {
        initialTime++; // Increase timer by 1 second
        updateCounter(); // Update the counter immediately
    }
}


// nnn

// Define variables to track the number of rounds won by each player
let redRoundsWon = 0;
let blueRoundsWon = 0;

// Function to update the rounds won by each player and check for the winner
function updateRoundWinner(winner) {
    if (winner === 'red') {
        redRoundsWon++;
    } else if (winner === 'blue') {
        blueRoundsWon++;
    }

    // Check if any player has won two rounds
    if (redRoundsWon === 2 || blueRoundsWon === 2) {
        // Determine the winner
        let gameWinner = redRoundsWon === 2 ? 'Red' : 'Blue';

        // Display the winner alert
        alert(`${gameWinner} wins the game!`);

        // Reset round counters for the next game
        redRoundsWon = 0;
        blueRoundsWon = 0;
    }
}




//ggg
// Function to increment the score for the red player
function incrementScore(scoreClassName) {
    // Update the score for the red player
    updateScore(scoreClassName, 1);
}

// Function to decrement the score for the red player
function decrementScore(scoreClassName) {
    // Ensure the score doesn't go below 0
    const scoreElement = document.querySelector(`.${scoreClassName}`);
    let score = parseInt(scoreElement.textContent) || 0;
    if (score > 0) {
        updateScore(scoreClassName, -1);
    }
}

// Function to update the scores
function updateScore(scoreClassName, increment) {
    const scoreElement = document.querySelector(`.${scoreClassName}`);
    let score = parseInt(scoreElement.textContent) || 0;

    // Check if the score is for gamjum
    const isGamjum = scoreClassName.includes('gamScoreRED');

    // Update the score
    score += increment;
    scoreElement.textContent = score;

    // Update the respective player's score if it's a gamjum
    if (isGamjum) {
        const redPlayerElement = document.querySelector('.red-player-score .redScore');
        let redPlayerScore = parseInt(redPlayerElement.textContent) || 0;
        redPlayerScore += increment;
        redPlayerElement.textContent = redPlayerScore;
        // Check if the red player wins when the score reaches 5
        if (score === 5) {
            displayWinnerPopup('red');
        }
    } else {
        // This is for the blue player
        const bluePlayerElement = document.querySelector('.blue-player-score .blueScore');
        let bluePlayerScore = parseInt(bluePlayerElement.textContent) || 0;
        bluePlayerScore += increment;
        bluePlayerElement.textContent = bluePlayerScore;
        // Check if the blue player wins when the score reaches 5
        if (score === 5) {
            displayWinnerPopup('blue');
        }
    }

    // Check for score difference after updating scores
    checkScoreDifference();
}

// Function to display winner popup
function displayWinnerPopup(winner) {
    const winnerAnnouncement = document.getElementById('winner-announcement');
    const winnerTextElement = document.getElementById('winner-text');
    winnerTextElement.textContent = `${winner.toUpperCase()} WINS BY GAMJUMS!`;

    // Set background color based on the winner
    const backgroundColor = winner === 'red' ? 'blue' : 'blue';
    
    winnerAnnouncement.style.backgroundColor = backgroundColor;

    // Show the winner announcement
    winnerAnnouncement.style.display = 'flex';

    // Stop the countdown
    clearInterval(intervalId);
}




// Function to display winner popup
// Function to display winner popup
function displayWinnerPopup(winner) {
    const winnerAnnouncement = document.getElementById('winner-announcement');
    const winnerTextElement = document.getElementById('winner-text');
    
    // Set the winner text
    winnerTextElement.textContent = `${winner.toUpperCase()} WINS BY GAMJUMS!`;

    // Set background color based on the winner
    const backgroundColor = winner === 'red' ? 'red' : 'blue';
    winnerAnnouncement.style.backgroundColor = backgroundColor;

    // Show the winner announcement
    winnerAnnouncement.style.display = 'flex';

    // Stop the countdown
    clearInterval(intervalId);
}

/////

// Function to check the score difference and determine the winner or display score difference popup
// function checkScoreDifference() {
//     const scoreRed = parseInt(document.querySelector('.red-player-score').textContent) || 0;
//     const scoreBlue = parseInt(document.querySelector('.blue-player-score').textContent) || 0;

//     const winner = scoreRed > scoreBlue ? "red" : (scoreBlue > scoreRed ? "blue" : "tie");

//     if (winner === "tie") {
//         // Handle tie scenario
//         // For example: Display a tie message or take any other action
//     } else {
//         // Declare the winner
//         displayWinnerPopup(winner);
//     }
// }


// Function to compare points and determine the winner at a specific time
function checkScoreAtSpecificTime() {
    const scoreRed = parseInt(document.querySelector('.red-player-score').textContent) || 0;
    const scoreBlue = parseInt(document.querySelector('.blue-player-score').textContent) || 0;

    if (initialTime === 61) { // Check if the timer is at 00:01 remaining
        const winner = scoreRed > scoreBlue ? "red" : (scoreBlue > scoreRed ? "blue" : "tie");

        if (winner === "tie") {
            // Handle tie scenario
            // For example: Display a tie message or take any other action
            displayTiePopup(); // You need to implement this function
        } else {
            // Declare the winner
            displayWinnerPopup(winner);
        }
    }
}



// Modify the updateCounter function to call checkScoreDifference
// Function to update the timer counter
function updateCounter() {
    const counterElement = document.getElementById('counter');

    if (!paused) {
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor((currentTime - pausedAt) / 1000);
        let remainingTime = initialTime - elapsedSeconds;

        // Declare scoreRed and scoreBlue variables
        let scoreRed, scoreBlue;

        if (remainingTime <= 0) {
            // Check score difference and declare winner when timer reaches 00:00
            checkScoreDifference();
        } else {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            // Update the score at 00:01
            if (minutes === 0 && seconds === 1) {
                // Get the current scores
                scoreRed = parseInt(document.querySelector('.red-player-score').textContent) || 0;
                scoreBlue = parseInt(document.querySelector('.blue-player-score').textContent) || 0;

                // Compare scores and declare winner
                const winner = scoreRed > scoreBlue ? "red" : (scoreBlue > scoreRed ? "blue" : "tie");

                if (winner === "tie") {
                    // Handle tie scenario
                    // For example: Display a tie message or take any other action
                } else {
                    // Declare the winner
                    displayWinnerPopup(winner);
                }
            }

            // Apply styles based on initial time
            if (initialTime === 120) {
                counterElement.style.color = 'black';
                counterElement.style.backgroundColor = 'yellow';
            } else {
                counterElement.style.color = 'white';
                counterElement.style.backgroundColor = 'black';
            }

            const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            counterElement.textContent = formattedTime;

            // Pause the countdown when it reaches exactly 2:00 remaining time
            if (minutes === 2 && seconds === 0) {
                paused = true;
                clearInterval(intervalId);
                // Check score difference and declare winner when timer reaches 2:00
                checkScoreDifference();
            }
        }
    } else {
        // Apply styles for paused state
        counterElement.style.color = 'white';
        counterElement.style.backgroundColor = 'black';
    }
}






// function updateCounter() {
//     const counterElement = document.getElementById('counter');

//     if (!paused) {
//         const currentTime = Date.now();
//         const elapsedSeconds = Math.floor((currentTime - pausedAt) / 1000);
//         let remainingTime = initialTime - elapsedSeconds;

//         // Declare scoreRed and scoreBlue variables
//         let scoreRed, scoreBlue;

//         if (remainingTime <= 0) {
//             // Check score difference and declare winner when timer reaches 00:00
//             checkScoreDifference();
//         } else {
//             const minutes = Math.floor(remainingTime / 60);
//             const seconds = remainingTime % 60;

//             // Update the score at 00:01
//             if (minutes === 0 && seconds === 1) {
//                 // Get the current scores
//                 scoreRed = parseInt(document.querySelector('.red-player-score').textContent) || 0;
//                 scoreBlue = parseInt(document.querySelector('.blue-player-score').textContent) || 0;

//                 // Compare scores and declare winner
//                 const winner = scoreRed > scoreBlue ? "red" : (scoreBlue > scoreRed ? "blue" : "tie");

//                 if (winner === "tie") {
//                     // Handle tie scenario
//                     // For example: Display a tie message or take any other action
//                 } else {
//                     // Declare the winner
//                     displayWinnerPopup(winner);
//                 }
//             }

//             // Apply styles based on initial time
//             if (initialTime === 120) {
//                 counterElement.style.color = 'black';
//                 counterElement.style.backgroundColor = 'yellow';
//             } else {
//                 counterElement.style.color = 'white';
//                 counterElement.style.backgroundColor = 'black';
//             }

//             const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//             counterElement.textContent = formattedTime;

//             // Pause the countdown when it reaches exactly 2:00 remaining time
//             if (minutes === 2 && seconds === 0) {
//                 paused = true;
//                 clearInterval(intervalId);
//                 // Check score difference and declare winner when timer reaches 2:00
//                 checkScoreDifference();
//             }
//         }
//     } else {
//         // Apply styles for paused state
//         counterElement.style.color = 'white';
//         counterElement.style.backgroundColor = 'black';
//     }
// }


// Function to increment the round number
function incrementRound() {
    const roundNumberElement = document.getElementById('roundNumber');
    let currentRound = parseInt(roundNumberElement.textContent) || 1;
    currentRound++;
    roundNumberElement.textContent = currentRound;
}

// Function to display winner popup
function displayWinnerPopup(winner) {
    const winnerAnnouncement = document.getElementById('winner-announcement');
    const winnerTextElement = document.getElementById('winner-text');

    // Set the winner text
    winnerTextElement.textContent = `${winner === "No one" ? "No one" : winner.toUpperCase()} wins the round!`;

    // Set background color based on the winner
    const backgroundColor = winner === 'red' ? 'red' : 'blue';
    winnerAnnouncement.style.backgroundColor = backgroundColor;

    // Show the winner announcement
    winnerAnnouncement.style.display = 'flex';

    // Stop the countdown
    clearInterval(intervalId);

    // Increment the round number
    incrementRound();
}

// Function to display score difference popup
function displayScoreDifferencePopup(winner) {
    const scoreDifferenceAnnouncement = document.getElementById('score-difference-announcement');
    const scoreDifferenceTextElement = document.getElementById('score-difference-text');

    // Set the score difference text
    scoreDifferenceTextElement.textContent = `${winner.toUpperCase()} wins by 12 points difference!`;

    // Set background color based on the winner
    const backgroundColor = winner === 'red' ? 'red' : 'blue';
    scoreDifferenceAnnouncement.style.backgroundColor = backgroundColor;

    // Show the score difference announcement
    scoreDifferenceAnnouncement.style.display = 'flex';

    // Stop the countdown
    clearInterval(intervalId);
}

// Function to close the winner popup
function closeWinnerPopup() {
    const winnerAnnouncement = document.getElementById('winner-announcement');
    winnerAnnouncement.style.display = 'none';
}

// Function to close the score difference popup
function closeScoreDifferencePopup() {
    const scoreDifferenceAnnouncement = document.getElementById('score-difference-announcement');
    scoreDifferenceAnnouncement.style.display = 'none';
}

// Function to manually pause the countdown
function pauseCountdown() {
    paused = true;
    clearInterval(intervalId);
    // Show/hide buttons or perform other actions as needed
}

// Function to manually resume the countdown
function resumeCountdown() {
    paused = false;
    pausedAt = Date.now();
    intervalId = setInterval(updateCounter, 1000);
    // Show/hide buttons or perform other actions as needed
}

// Function to toggle the timer
function toggleTimer() {
    paused ? resumeCountdown() : pauseCountdown();
}

