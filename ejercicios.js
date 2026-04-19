//Calculadora//

let num1 = 1;
let num2 = 2;
let operador = "="

if(typeof num1 || num2 !== "number") {
  console.log("Introduce un numero");
} else if (typeof operador == "suma" ){
  console.log(num1 + num2);
} else if (typeof operador == "resta"){
  console.log(num1 - num2);
} else if (typeof operador == "division"){
  console.log( num1 / num2);
} else if (typeof operador == "resto"){
  console.log(num1 % num2);
} else if (typeof operador == "multipicacion"){
  console.log(num1 * num2);
} else{
  console.log("Introduce un operador")
}


//Piedra, Papel o Tijera//

function Juego(userElection){
  userElection = userElection.toLowerCase();
  const Elections = ["piedra", "papel", "tijera"];
  const computerElection = Elections[Math.floor(Math.random() * 3)];

  if (userElection === computerElection){
    console.log(`Empate. Ambos jugadores eligieron ${userElection}`);
  } else if (((userElection === "piedra") && (computerElection === "papel")) || ((userElection === "papel") && (computerElection === "tijera")) || (userElection === "tijera" && (computerElection === "piedra"))){
    console.log(`Computador gana, ${computerElection} gana a ${userElection}`);
  } else if (((userElection === "papel") && (computerElection === "piedra")) || ((userElection === "tijera") && (computerElection === "papel")) || (userElection === "piedra" && (computerElection === "tijera"))){
    console.log(`Usuario gana, ${userElection} gana a ${computerElection}`);
  } else{
    console.log('Introduce una opcion valida');
  }
}

console.log("Bienvendo al juego de piedra, papel o tijera")

Juego("piedra")

//contador de vocales, letras y palabras//

function analizarTexto(oraciones){
  const textoLimpio = oraciones.toLowerCase().trim();

  let contadorLetras = 0;
  let contadorVocales = 0;

  const vocales = "aeiouáéíóú";

  for(let caracter of textoLimpio) {
    //verificar letras//
    if(caracter.match(/[a-zñáéíóú]/)){
      contadorLetras++;
      //verificar vocales//
      if(vocales.includes(caracter)){
        contadorVocales++;
      }
    }
  }

  const contadorPalabras = textoLimpio.split(/\s+/).length;

  console.log('El numero de letras, vocales y palabras es:')

  return {
    Letras : contadorLetras,
    Vocales : contadorVocales,
    Palabras : contadorPalabras
  }

}

console.log(analizarTexto("mi mama me mima, los chini chinitos estaban bailando."))


//Strings palindromo//

function palindromo(texto){
const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, "");
const alReves = textoLimpio.split("").reverse().join("")
if(textoLimpio === alReves){
  console.log(`${texto} es palindromo`)
}else{
  console.log(`${texto} no es palindromo`)
}
}

palindromo("Oso")


