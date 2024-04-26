/**
 * Calcule la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
- `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.
 */

const Resistance =[Math.abs  (-1),5,6,3];
console.log(Resistance);
var suma=0;
for( var i=0;i< Resistance. length; i++){
    suma += Resistance[i];
}
console.log(suma);


const Resistence2 =[14,3.5,6];
console.log(Resistence2);
let suma2=0
for(let i=0;i< Resistence2. length; i++){
    suma2 += Resistence2[i];
}
console.log(suma2);



const Resistence3 =[8,15,100];
console.log(Resistence3);
let suma3=0
for(let i=0;i< Resistence3. length; i++){
    suma3 += Resistence3[i];
}
console.log(suma3);

/**Número dividido en mitades
 

Dado un número, devuelve el número dividido en sus mitades en una matriz.
 

Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` .*/
const n= 4
const n2=10

function numDiv(num) {
let res=[];
const halft =num/2;
res.push(halft);
res.push(halft);
return res;
}

console.log(numDiv(n2));
console.log(numDiv(n));

/**Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.
 

Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
*/
const menber1 = ["Esperanza", "Franco", "Nia"]
const menber2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']
const menber3 = ['Harry', 'Ron', 'Hermione']

function secretName(arr) {
    let res=[];
    arr.forEach((e)=> res.push(e.charAt(0)));
    return res.sort().join();
}
console.log(secretName(menber1))


const users =['mockIng99', 'J0eyPunch', 'glassedFer']

 function displayUsers (arr){
    const count= users.length;
    let res;
    if(count===1){
        res=`${arr[0]} is online`;}
         else if (count===2){
            res=`${arr[0]}, ${arr[1]} are online`;}
            else {
                res=`${arr[0]}, ${arr[1]} and ${count-2} more are online`;}
                return res;
         }
         
         console.log(displayUsers(users));

/** Array of Multiples
 

         Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
          
         
         Examples:
         - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
         - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.*/

const arrayMultiples= (a,b)=>{
    let res=[];
    let x=1; 
    for (let i=1;i<=b;i++){
        res.push(a*x);
        x++;
    }
    return res;
}
console.log(arrayMultiples(2,10));
console.log(arrayMultiples(17,6));

         function arrayMultiplos (integer, limit){
            let result= [];
            for (let i= integer;i<=limit; i += integer){
                result.push(i);
            }
            return result;
            
         }
         console.log(arrayMultiplos(17,6));
         console.log(arrayMultiplos(2,10));

/**Positive dominance in Array
          
         
         Write a function to determine if an array is positively dominant.
         An array is positively dominant when the majority of its elements are positive.
          
         
         Example:
         - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.*/

         const isPositiveDominant = (arr) => {
            let a = 0;
            let b = 0;
            for (let i = 1; i <= arr.length; i++) {
                if (arr[i - 1] > 0 && i > 1 && arr[i - 1] !== arr[i] 
                && arr[i + 1] !== arr[i - 1]) {
                  a += 1;
                  console.log("a: " + a);
                }
                if (arr[i] < 0 && arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1] && arr[i + 1] !== arr[i - 1]) {
                  b+= 1;
                  console.log("b: " + b);
                }
              }
              if (a > b) {
                return true;
              } else return false;
            };
            console.log(isPositiveDominant([-1, -3, -5, 4, 6767]));
          
         
/** Antipodal Average
          
         
         Given an array, return a shorter array following these steps:
         - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
         - Sum each number of the first part with the inverse numbers of the second part.
         - Divide each number of the resulting array by 2.
          
         
         Example:
         - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.*/

// Definir el arreglo
let arr = [1,2,3,5,22,6];

// Sumar el primer y último elemento
let resultado = arr[0] + arr[arr.length - 1];

console.log("La suma del primer y último elemento es:", resultado);

// Eliminar el primer elemento
arr.shift();

// Eliminar el último elemento
arr.pop();

console.log("Arreglo después de eliminar el primer y último elemento:", arr);
  
    // Sumar el primer y último elemento
let resultado2 = arr[0] + arr[arr.length - 1];

console.log("La suma del primer y último elemento es:", resultado2);

// Eliminar el primer elemento
arr.shift();

// Eliminar el último elemento
arr.pop();

console.log("Arreglo después de eliminar el primer y último elemento:", arr);

let resultado3 = arr[0] + arr[arr.length - 1];

console.log("La suma del primer y último elemento es:", resultado3);

function numDiv(num) {
    let res=[];
    const halft =num/2;
    res.push(halft);
    return res;
    }
    
    console.log(numDiv(resultado));
    console.log(numDiv(resultado2));
    console.log(numDiv(resultado3));
    var arregloConcatenado = numDiv(resultado).concat(numDiv(resultado2), numDiv(resultado3));

console.log("Arreglo concatenado:", arregloConcatenado);
