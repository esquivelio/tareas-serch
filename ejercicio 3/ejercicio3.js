/**
 *      Exercise #3 (sugerencia reduce() )
        Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
        Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 *  */ 



        let array= [1,2,3,4];
        let suma= array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
        let producto= array.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
        console.log(suma); // muestra un valor de 10
        console.log(producto); // muestra un valor de 24 