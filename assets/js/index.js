import { Game } from "./Game.js";

const canvas = document.querySelector('canvas');
const content = canvas.getContext('2d');

const game = new Game();

game.start();

