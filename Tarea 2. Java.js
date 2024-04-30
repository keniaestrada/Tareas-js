//User profile
/**Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
 */
let nombre;
nombre = prompt("what is your name?");
console.log(nombre);

let Age;
Age = prompt("how old are you?");
console.log(Age);

let movies;
movies= prompt("what are your favorite movies?")
console.log("my favoryte movies are", movies)

/**Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.*/
let number1
let number2
let number3
let number4
let number5
let number6
let number7
let number8
let number9
let number10
number1= prompt("write a number")
number2= prompt("other number") 
number3=prompt("other number") 
number4=prompt("other number") 
number5=prompt("other number")
number6=prompt("other number")
number7=prompt("other number")
number8=prompt("other number")
number9=prompt("other number")
number10=prompt("other number");
console.log(number1,number2,number3,number4,number5,number6,number7,number8,number9,number10);
let convierteANumero1= Number(number1);
let convierteANumero2= Number(number2);
let convierteANumero3= Number(number3);
let convierteANumero4= Number(number4);
let convierteANumero5= Number(number5);
let convierteANumero6= Number(number6);
let convierteANumero7= Number(number7);
let convierteANumero8= Number(number8);
let convierteANumero9= Number(number9);
let convierteANumero10= Number(number10);

const array= [convierteANumero1,convierteANumero2,convierteANumero3,convierteANumero5,convierteANumero4,convierteANumero6,convierteANumero7,convierteANumero8,convierteANumero9,convierteANumero10]
//No entiendo por que cundo ingreso el array dentro de Math.max me devuelve un NaN si todos son numeros 

console.log(Math.max(convierteANumero1,convierteANumero2,convierteANumero3,convierteANumero5,convierteANumero4,convierteANumero6,convierteANumero7,convierteANumero8,convierteANumero9,convierteANumero10));

/**Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".*/

function Alarm (Tim){
    window.alert(`${Tim}`)
};

console.log(setTimeout (Alarm, 10000,"Time for bed after 10 seconds")); 

/**Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.*/

Palabra = prompt("Escibe una frase")
console.log(Palabra)

function separarCadena1(cad){
    var separarCadena = cad.split("");
    const resultado = separarCadena.filter(signo => signo != "," );
    const resultado2 = resultado.filter(signo => signo != " " );
    const resultado3 = resultado2.filter(signo => signo != "." );
    var unirArreglo1 = resultado3.join("")
    return unirArreglo1
}
console.log(separarCadena1(Palabra))

function invierteCadena2(cad){
    var separarCadena = cad.split("");
    const resultado = separarCadena.filter(signo => signo != "," );
    const resultado2 = resultado.filter(signo => signo != " " );
    const resultado3 = resultado2.filter(signo => signo != "." );
    var invertirArreglo = resultado3.reverse()
    var unirArreglo2 = invertirArreglo.join("")
    return unirArreglo2
}
console.log(invierteCadena2(Palabra))
console.log(separarCadena1(Palabra)==invierteCadena2(Palabra))

/**Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/


number= prompt("Escrive un número entero")
function numero(n){
    var num= n>=1
    return num
}
console.log(numero(number))

/**Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...*/
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
