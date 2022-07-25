"use strict";
const readline = require("readline");

const getRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getComputerChoice = () => {
  let random = getRange(0, 1);
  if (random < 1 / 3) return "paper";
  if (random > 1 / 3 && random < 2 / 3) return "scissors";
  if (random > 2 / 3 && random < 1) return "rock";
};

const designateWinner = (computer, player) => {
  let proba1 = player == "rock" && computer == "scissors";
  let proba2 = player == "paper" && computer == "rock";
  let proba3 = player == "scissors" && computer == "paper";
  if (proba1 || proba2 || proba3) {
    return "you win";
  }
  if(player=== computer){ return 'drawn game'};
  {
    return "computer wins";
  }
};

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question(
  "you are playing a paper rock scissors game against the computer, enter your choice among this (paper,rock, scissors):\n ",
  (answer) => {
    let computer = getComputerChoice();
    console.log(
      `the computer choice was : ${computer}\n ${designateWinner(
        computer,
        answer
      )}`
    );
    prompt.close();
  }
);
