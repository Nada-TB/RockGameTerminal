# Paper Scissors Rock Game Application

A simple command-line Paper Scissors Rock game implemented using Node.js. This game allows users to play against the computer, with the computer's choice being randomly generated. The game evaluates the player's input and displays the outcome of each round.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction

This project is a console-based Paper Scissors Rock game developed with Node.js. It features a command-line interface where the player inputs their choice, and the computer's choice is generated randomly. The game then determines the winner based on the classic rules of Paper Scissors Rock.

## Demo

Since this project is a command-line application, a live demo is not applicable. However, you can test the functionality by running the code locally.

## Requirements

- Node.js (version 12.x or higher)

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Nada-TB/command-line-Paper-Scissors-Rock-game.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repo-name
    ```

3. **Ensure Node.js is installed on your system.** You can download it from [Node.js official site](https://nodejs.org/).

## Usage

1. **Run the game:**

    ```bash
    node app.js
    ```

2. **Enter your choice when prompted** (choose between "paper", "rock", or "scissors").

3. **View the outcome** of the game and the computer's choice displayed in the terminal.

## Features

- **Random Computer Choice:** The computer selects its move randomly among "paper", "rock", and "scissors".
- **Game Outcome Determination:** The game evaluates the player’s choice against the computer's choice and displays the result (win, lose, or draw).
- **Command-Line Interface:** The game interacts with the user through a terminal interface.

## Technologies Used

- **JavaScript (Node.js):** For implementing the game logic and user interaction.
- **Readline Module:** For handling user input from the command line.

## Project Structure

```plaintext
your-repo-name/
├── app.js                # Main application file that runs the game logic
└── README.md             # Project documentation
```

## Challenges and Learnings

1. **Challenge:** Implementing Random Choice Generation
   - **Action:** Used a random number generator to simulate the computer's choice.
   - **Result:** Ensured fair gameplay with unpredictable computer behavior.

2. **Challenge:** Determining the Winner
   - **Action:** Implemented logic to compare player and computer choices.
   - **Result:** Accurately identified the winner or if the game is a draw based on game rules.

3. **Challenge:** Handling User Input
   - **Action:** Utilized the Readline module for command-line input handling.
   - **Result:** Created a responsive user interaction within the console environment.

## Future Improvements

- **Enhanced User Interface:** Create a graphical user interface (GUI) for a more engaging experience.
- **Multiplayer Mode:** Allow players to compete against each other in addition to playing against the computer.
- **Advanced Game Rules:** Implement additional game variations or rules to extend gameplay options.

## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

