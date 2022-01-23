import { Game } from "./Game.js";

const canvas = document.querySelector('canvas');
const content = canvas.getContext('2d');

content.canvas.style.background = '#fff';

const game = new Game();

game.start();

