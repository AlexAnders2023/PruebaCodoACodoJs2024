/*console.log("Hola a todos");
//esto es un comentario
console.log("La suma de 3+8 es: ", 3 + 8);
document.write("<h2 style=´color: red;´> Texto incorporado por js");
console.info("Hola a todos esta es una informacion");//esta linea muetsra informacion

/*comentario linea 1
ahora vemos varios ejemplos de console
comentario varias lineas */

/*console.warn("Hola a todos esta es una adverencia");
console.error("Hola a todos esto es un error");  */

//cambio de valor de una variable con js
/*
var n = 10;

document.write("<p>Hola la variable es: </p>",n);

var num = 20;

document.write("<p>Hola la variable es: </p>",num);

var nu = 18;

document.write("<p>Hola la variable es: </p>",nu);

var numero = 50;

document.write("<p>Hola la variable es: </p>",numero);
*/

//constantes:
/*
const PI= 3.141592; 
const IVA= 21; //la constante no cambia nunca

console.log(PI);

const IVA= 21; 
IVA= 10.5; 
console.log(IVA);
*/

/* esta es una prueba para la 
rama de git */
//----------------------------------------------------------------------------------------------------------------------------------------------
/*funcion if con una variable let se crea un objeto para poder  usarla con ddicha funcion.
let casa = new Object();
//propiedades

casa.habitaciones = 3;
casa.metros = 40;
casa.calle = "Av.Doctor Vera";
casa.numero = 2983;
casa.valor = 60000;
casa.enAlquiler=true;

if(casa.enAlquiler == false){
    document.write("<br> La vivienda esta en alquiler");
}else{
    document.write("<br> La vivienda NO SE ALQUILA");
}*/
//--------------------------------------------------------------------------------------------------------------------------------
//este meetodo conla funcion  anonima, llama a los datos de casa y direccion, se utiliza el if para veer si esta alquilda.
// y muestra por fuera del metodo la direccion de la casa y el precio de la misma.

let casa = new Object();
//propiedades

/*casa.habitaciones = 3;
casa.metros = 40;
casa.calle = "Av.Doctor Vera";
casa.numero = 2983;
casa.valor = 60000;
casa.enAlquiler = false;
//metodo
casa.mostrarDomicilio =  function(){
    document.write("<br> El domicilio de la casa es : ", casa.calle, " ",casa.numero);
}
if(casa.enAlquiler == true){
    document.write("<br> La vivienda esta en alquiler");
}else{
    document.write("<br> La vivienda NO SE ALQUILA");
}
casa.mostrarDomicilio();
document.write("<br> El precio de la vivienda es de: u$s ", casa.valor);*/
//------------------------------------------------------------------------------------------------------
//definimos un objeto Mascota con sus atributos:

/*let mascota = {
    especie: "canino",
    raza: "caniche",
    edad:5,
    color:"blanco",
    vacunaSextuple: true,
    enAdopcion: false,
    peso: 8,

    listar: function(){
        document.write("<br> Especie: ", this.especie , "<br> raza: ", this.raza , "<br> Edad: ", this.edad ,"<br> Color: ", this.color ,"<br> Vacuna: ", this.vacunaSextuple , "<br> en adopcion: ", this.enAdopcion , "<br> Peso: ", this.peso)
    },
    ladrar: function(){
        console.log("<br> guau-guau!!!")
    },
}
console.log(mascota);
console.log("la mascota es de especie", mascota.especie);
console.log(mascota.raza);
mascota.ladrar();*/
//-------------------------------------------------------------------------------------------------------------------------------
/*definimos con una clase definimos un objeto y sus parametros, y los vamos a utilizar en doa objetos distintosnlos cuales podemos
podemos modificar los parametros, como con JAVA*/
/* class Animal {
    constructor(especie, raza, edad, color, vacuna, enAdopcion, peso){
        this.esp = especie;
        this.raz = raza;
        this.eda = edad;
        this.col = color;
        this.vac = vacuna;
        this.ado = enAdopcion;
        this.pes = peso;
    }
    caminar(){
        console.log("estoy caminando");
    }
 }

 let mascota1 = new Animal("canino", "golden", 7, "chocolate,",true,true,10);
 let mascota2 = new Animal("felino","siames",4,"te con leche",false,true,4);

 console.log(mascota1);
 console.log(mascota2);
 /*ejemplo del objeto con el metodo caminar llamdo desde fuera con mascota.raz veo cual 
 es objeto que estoy usando en ese momento*/
/*console.log(mascota1.raz);
mascota2.caminar(); */
/*----------------------------------------------------------------------------------------------------*/
//1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”. 

console.log("Hello world");
//2.  Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write). 

document.write("Hello world <br>");

//3.   Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

console.log(3+5);

//document.write(3+5);
/*4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario” 

var nombreUsuario = prompt ("Ingrese su nombre:  ", "");   
document.write( " <br> Hola " + nombreUsuario); */

//5.  Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números. 
/*
var n1 = parseInt (prompt ("Ingrese el primer numero: "));
var n2 = parseInt (prompt ("Ingrese el segundo numero: "));
alert ("La suma es: " + (n1+n2));
document.write ("<br> La Suma es: ", (n1+n2)); */

//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor
/*
var nu1 = parseInt (prompt ("Ingrese el primer numero: "));
var nu2 = parseInt (prompt ("Ingrese el segundo numero: "));
if (nu1 > nu2){
 alert("El primer numero es el mayor: "+ nu1);
} else if (nu2 > nu1){
alert ("El segundo numero es el mayor: "+ nu2);
} else{
    alert("Los numeros son iguales.")
}
*/
//7.  Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. 
/*
var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));
var numero3 = parseInt(prompt("Ingrese el tercer número:"));

var mayor = numero1;

if (numero2 > mayor) {
    mayor = numero2;
}

if (numero3 > mayor) {
    mayor = numero3;
}

alert("El mayor de los tres números es: " + mayor);
*/
//8.    Escribe un programa que pida un número y diga si es divisible por 2 
/*
let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
    alert("El número es divisible por 2.");
} else {
    alert("El número no es divisible por 2.");
}
*/
//9.    Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.

// let frase ingresa la frase y let contador se inicializa  en 0, con un for se recorre la frase y el let i acumula las "a" que va encontrando
// con .toLowerCase la tarsfoma a minuscula si llegara a ingresar mayuscula y el operador === las compara con "a", y por ultimo se muestra el resultado con el "contador" por pantalla.
/*
let frase = prompt("Ingrese una frase:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === "a") {
        contador++;
    }
}

alert("La letra 'a' aparece " + contador + " veces en la frase.");
*/
//10.    Escribe un programa que pida una frase y escriba las vocales que aparecen 
/*
let frase = prompt("Ingrese una frase:"); //ingreso la frase por pantalla y la almacemos en la variable frase
let vocales = ""; //variable que va almacenar la vocales 

for (let i = 0; i < frase.length; i++) { //con el for recorremos lo que devuelve frase.length que nos da la longitud
    let letra = frase[i].toLowerCase(); //dentro de bucle convertimos a miniscula y se almacena en la variable letra
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") { //verificamos si la letra es una vocal con if, si es vocal se agrega a"vocales"
        if (!vocales.includes(letra)) {
            vocales += letra + " ";
        }
    }
}

alert("Las vocales que aparecen en la frase son: " + vocales); //finalmente despuesde recorrer la frase se muestran las vocales
// solo permite mostrar una vez la vocal si esta repetida no se cuenta.
*/
//11.    Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales 
/*
let frase = prompt("Ingrese una frase:");
let contadorVocales = 0;

for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contadorVocales++;
    }
}

alert("La frase contiene " + contadorVocales + " letras que son vocales.");
*/
//12.    Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales 
/*
let frase = prompt("Ingrese una frase:");
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase();
    switch (letra) {
        case "a":
            contadorA++;
            break;
        case "e":
            contadorE++;
            break;
        case "i":
            contadorI++;
            break;
        case "o":
            contadorO++;
            break;
        case "u":
            contadorU++;
            break;
        default:
            // No es una vocal, no hacemos nada
            break;
    }
}

alert("La vocal 'a' aparece " + contadorA + " veces.\n" +
      "La vocal 'e' aparece " + contadorE + " veces.\n" +
      "La vocal 'i' aparece " + contadorI + " veces.\n" +
      "La vocal 'o' aparece " + contadorO + " veces.\n" +
      "La vocal 'u' aparece " + contadorU + " veces.");
     */ 
//13.    Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) 
/*
let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
    alert("El número es divisible por 2.");
} else if (numero % 3 === 0) {
    alert("El número es divisible por 3.");
} else if (numero % 5 === 0) {
    alert("El número es divisible por 5.");
} else if (numero % 7 === 0) {
    alert("El número es divisible por 7.");
} else {
    alert("El número no es divisible por 2, 3, 5 ni 7.");
}
*/
//14.    Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible) 
/*
let numero = parseInt(prompt("Ingrese un número:"));
let divisibles = "";

if (numero % 2 === 0) {
    divisibles += "2, ";
}

if (numero % 3 === 0) {
    divisibles += "3, ";
}

if (numero % 5 === 0) {
    divisibles += "5, ";
}

if (numero % 7 === 0) {
    divisibles += "7, ";
}

if (divisibles !== "") {
    alert("El número es divisible por: " + divisibles.slice(0, -2) + ".");
} else {
    alert("El número no es divisible por 2, 3, 5 ni 7.");
}
*/
//15.    Escribir un programa que escriba en pantalla los divisores de un número dado 
/*
let numero = parseInt(prompt("Ingrese un número:"));

let divisores = "Los divisores de " + numero + " son: ";

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores += i + ", ";
    }
}

alert(divisores.slice(0, -2));
*/
let numero = parseInt(prompt("Ingrese un número:"));

let divisores = "Los divisores de " + numero + " son: ";
let primerDivisor = true;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        if (!primerDivisor) {
            divisores += ", ";
        }
        divisores += i;
        primerDivisor = false;
    }
}

alert(divisores);
//16.    Escribir un programa que escriba en pantalla los divisores comunes de dos números dados 
