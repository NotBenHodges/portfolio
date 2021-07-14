let canvas = document.getElementById("screen");
let ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
