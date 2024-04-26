//Array
const products = ["Sopa", "Pure", "cafe"];
console.log(products);
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);

const products2 = ["Sopa", 20.0, "Pure", 2.0];
console.log(products2);

const matrix = [[0,1],[2,3],[4,5]];
console.log(matrix);
console.log(matrix[2][1]); //Exterior 2 e interior 1 = 5
console.log(matrix[1][0]);

//Bucles
// FOR
for(let i=0;i<=2; i++){
    console.log(products[i]);
} // se imprimen los productos en la posicion 0, 1 y 2 inicia desde 0 y para en 2

console.log(products.length); //cantidad de elemntos o longitud

for(let i=0;i< products.length; i++){
    console.log(products[i]);
} // se imprimen los productos en la posicion 0, 1 y 2 inicia desde 0 y para en 2

// WHILE
// DO WHILE
/**let count =0;
while (count<=2) {
    console.log(count);
    count++;
}

/**do { count++;
console.log(`count is: ${count}`)
} while (count <=100);
// ejercicios 
//https://www.w3schools.com/js/js_array_methods.asp */

//forEACH
//products2.forEach((element, index) => console.log(element, index));
// me indica su posicion y sus elementos

//products2.forEach(e => console.log(e));
// me indica su posicion y sus elementos

function foo(x){
    console.log(`El item actual es: ${x}`);
}

products2.forEach((element,index)=> console.log(element, index));

products2.forEach(e => foo(e));

