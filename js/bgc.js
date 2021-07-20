const colors = ['deepplink', 'blue', 'pink', 'tomato', 'black', 'teal']
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
let color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;
