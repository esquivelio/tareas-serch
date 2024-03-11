const myFncCallBack = ( element, index , array ) =>
     `soy el indice ${index}, valor ${element} del arreglo ${array}`;

const numbers = [1,5,7]
const duplicateOriginal = numbers.map( myFncCallBack );
const duplicate = numbers.map( element => element *2 );

console.log( numbers );
console.log( duplicateOriginal );
console.log( duplicate );