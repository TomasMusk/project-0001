const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeroaleatorio = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99


let juegoactivo = true;

let intentos =0;    //Contador de intentos    //Contador de intentos      


function preguntar() {
  rl.question("Ingresa un número para adivina ente 0 y 100: ", (answer : any) => {
    let num = parseInt(answer);
    intentos ++; //Incrementa el contador de intentos          
    
    

    if (num === numeroaleatorio) {
      console.log("¡Adivinaste el número!");
      console.log("Numero de intentos: " + intentos); //Imprime el numero de intentos
      
      rl.close(); // Cierra la interfaz aquí

    } else {
      console.log("No adivinaste el número");

      if (num > numeroaleatorio) {
        console.log("El número es menor");
      } else if (num < numeroaleatorio) {
        console.log("El número es mayor");
      }

      // Llama de nuevo a la función para seguir preguntando
      preguntar();  

    }
  });
}

// Inicia el juego
preguntar();
