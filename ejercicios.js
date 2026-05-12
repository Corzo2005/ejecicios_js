//Calculadora//

let num1 = 1;
let num2 = 2;
let operador = "="

if(typeof num1 !== "number" || typeof num2 !== "number") {
  console.log("Introduce un numero");
} else if (operador == "suma" ){
  console.log(num1 + num2);
} else if (operador == "resta"){
  console.log(num1 - num2);
} else if (operador == "division"){
  console.log( num1 / num2);
} else if (operador == "resto"){
  console.log(num1 % num2);
} else if (operador == "multiplicacion"){
  console.log(num1 * num2);
} else{
  console.log("Introduce un operador")
}


//Piedra, Papel o Tijera//

function juego(userElection){
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

juego("piedra")

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

//battle royale//

class Personaje{
  constructor(nombre, vida, dano, defensa, velocidad){
    this.nombre = nombre;
    this.vida = vida;
    this.dano = dano;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar(objetivo) {
    let dano = Math.floor(Math.random() * this.dano + 1);
    let defensaObjetivo = Math.floor(Math.random() * objetivo.defensa + 1);
    let danoTotal = dano - defensaObjetivo >= 0 ? dano - defensaObjetivo : 0; 
    objetivo.vida -= danoTotal;
    console.log(`${this.nombre} ha infligido ${dano} puntos de dano a ${objetivo.nombre} con los punos, le quedan ${objetivo.vida} puntos de vida a ${objetivo.nombre}`) 
    if (objetivo.vida <= 0){
      console.log(`${objetivo.nombre} ha muerto a manos de ${this.nombre}`);
    }
  }
}

class Guerrero extends Personaje{
  constructor(nombre, vida, dano, defensa, velocidad, armas){
    super(nombre, vida, dano, defensa, velocidad);
    this.armas = armas
  }

  ataque_especial(objetivo) {
    let arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    let dano = Math.floor(Math.random() * arma.dano + 1);
    let defensaObjetivo = Math.floor(Math.random() * objetivo.defensa + 1);
    let danoTotal = dano - defensaObjetivo >= 0 ? dano - defensaObjetivo : 0; 
    objetivo.vida -= danoTotal;
    console.log(`${this.nombre} ha infligido ${dano} puntos de dano a ${objetivo.nombre} con ${arma.nombre}, le quedan ${objetivo.vida} puntos de vida a ${objetivo.nombre}`) 
    if (objetivo.vida <= 0){
      console.log(`${objetivo.nombre} ha muerto a manos de ${this.nombre}`);
    }
  }

  saludar(){
    console.log(`Hola, soy el Guerrero ${this.nombre}`)
  }
}

class Mago extends Personaje{
  constructor(nombre, vida, dano, defensa, velocidad, hechizos){
    super(nombre, vida, dano, defensa, velocidad);
    this.hechizos = hechizos
  }

  ataque_especial(objetivo) {
    let hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    let dano = Math.floor(Math.random() * hechizo.dano + 1);
    let defensaObjetivo = Math.floor(Math.random() * objetivo.defensa + 1);
    let danoTotal = dano - defensaObjetivo >= 0 ? dano - defensaObjetivo : 0; 
    objetivo.vida -= danoTotal;
    console.log(`${this.nombre} ha infligido ${dano} puntos de dano a ${objetivo.nombre} con ${hechizo.nombre}, le quedan ${objetivo.vida} puntos de vida a ${objetivo.nombre}`) 
    if (objetivo.vida <= 0){
      console.log(`${objetivo.nombre} ha muerto a manos de ${this.nombre}`);
    }
  }

  saludar(){
    console.log(`Hola, soy el Mago ${this.nombre}`)
  }
}

class Arquero extends Personaje{
  constructor(nombre, vida, dano, defensa, velocidad, flechas){
    super(nombre, vida, dano, defensa, velocidad);
    this.flechas = flechas
  }

  ataque_especial(objetivo) {
    let flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    let dano = Math.floor(Math.random() * flecha.dano + 1);
    let defensaObjetivo = Math.floor(Math.random() * objetivo.defensa + 1);
    let danoTotal = dano - defensaObjetivo >= 0 ? dano - defensaObjetivo : 0; 
    objetivo.vida -= danoTotal;
    console.log(`${this.nombre} ha infligido ${dano} puntos de dano a ${objetivo.nombre} con ${flecha.nombre}, le quedan ${objetivo.vida} puntos de vida a ${objetivo.nombre}`) 
    if (objetivo.vida <= 0){
      console.log(`${objetivo.nombre} ha muerto a manos de ${this.nombre}`);
    }
  }

  saludar(){
    console.log(`Hola, soy el Arquero ${this.nombre}`)
  }

}

class Juego {
  constructor(personajes) {
    this.personajes = personajes;
  }

  obtenerVivos() {
    return this.personajes.filter(p => p.vida > 0);
  }

  iniciar() {
    this.personajes.forEach(p => p.saludar());

    while (this.obtenerVivos().length > 1) {
      console.log("\n--- INICIANDO RONDA ---");
      
      let turnoRonda = this.obtenerVivos()
        .map(p => ({ 
          obj: p, 
          vel: this.generar_numero_aleatorio(p.velocidad, 1) 
        }))
        .sort((a, b) => b.vel - a.vel);

      for (let turno of turnoRonda) {
        let atacante = turno.obj;
        
        if (atacante.vida <= 0) continue;

        let victimas = this.obtenerVivos().filter(p => p !== atacante);
        if (victimas.length === 0) break;

        let objetivo = victimas[this.generar_numero_aleatorio(victimas.length)];

        if (this.generar_numero_aleatorio(3) === 0) {
          atacante.atacar(objetivo);
        } else {
          atacante.ataque_especial(objetivo);
        }
      }
    }

    let ganador = this.obtenerVivos()[0];
    console.log(`\nEL JUEGO HA TERMINADO. EL GANADOR ES: ${ganador.nombre}`);
  }

  generar_numero_aleatorio(multiplicador, min = 0) {
    return Math.floor(Math.random() * multiplicador) + min;
  }
}

let listaPersonajes = [
  new Guerrero("Thor", 100, 20, 10, 5, [{nombre: "Mjolnir", dano: 30}, {nombre: "Gungnir", dano: 25}, {nombre: "Tacleada", dano: 27}]),
  new Guerrero("Goku", 120, 25, 15, 8, [{nombre: "Kamehameha", dano: 35}, {nombre: "Masenko", dano: 30}, {nombre: "Galick Gun", dano: 40}]),
  new Mago("Merlin", 80, 15, 5, 7, [{nombre: "Bola de fuego", dano: 25}, {nombre: "Rayo", dano: 20}, {nombre: "Hechizo de hielo", dano: 22}]),
  new Mago("Harry", 70, 20, 10, 9, [{nombre: "Expelliarmus", dano: 30}, {nombre: "Expecto Patronum", dano: 25}, {nombre: "Avada Kedavra", dano: 50}]),
  new Arquero("Legolas", 90, 18, 8, 10, [{nombre: "Flecha de fuego", dano: 28}, {nombre: "Flecha de hielo", dano: 22}, {nombre: "Flecha de viento", dano: 30}])
];

let juego = new Juego(listaPersonajes);
juego.iniciar();