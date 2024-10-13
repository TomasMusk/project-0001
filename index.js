"use strict";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingresa un número para la cuenta atrás: ', (answer) => {
    let num = parseInt(answer);
    if (isNaN(num)) {
        console.log('Por favor, ingresa un número válido.');
    }
    else {
        for (let i = num; i >= 0; i--) {
            console.log(i);
        }
    }
    rl.close();
});
