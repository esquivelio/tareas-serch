/**
 *              Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]

 * 
 * 
 */

const numeros = [3, 6, 12, 5, 100, 1 ]; 

function comparacion( a, b ){
    if( a < b ){
        return -1;        
    } else if( a > b ) { 
        return 1; // intercambia las posiciones
    } else {
        return 0;
    } 
}

function compare ( a, b){
    return a-b;
}
console.log( numeros.sort( comparacion )); // [1, 3, 5, 6, 12, 100]