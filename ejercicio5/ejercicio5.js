let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//  1.-Write a command that prints out all of the people in the list.
console.log(people); // muestra: ["Maria", "Dani", "Luis", "Juan", "Camila"]


//   2.-Write the command to remove "Dani" from the array.
people.splice(1,1);
console.log(people); // muestra: ['Maria', 'Luis', 'Juan', 'Camila']


//   3.-Write the command to remove "Juan" from the array.
people.splice(2,1);
console.log(people); //muestra:  ['Maria', 'Luis', 'Camila']


//   4.-Write the command to move "Luis" to the front of the array.
let nombre = people.splice(1,1)[0];
people.splice(2,0,nombre);
console.log(people);  // muestra:  ['Maria', 'Camila', 'Luis']


//   5.-Write the command to add your name to the end of the array.
people.push("Daniel");  
console.log(people); //  muestra: ['Maria', 'Camila', 'Luis', 'Daniel']


//    6.-Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
for (let i = 0; i < people.length; i++) {   // muestra: Maria
    console.log(people[i]);
    if (people[i] === 'Maria') {
        break;
    }
}


//     7.-Write the command that gives the indexOf where "Maria" is located.
console.log(people.indexOf("Maria")); //  Muestra 0 por que esta en la posición número 1 

//     At the end of the exercise, there should be 4 people in the array.
console.log(people); 
//     Muestra: ['Maria', 'Camila', 'Luis', 'Daniel']
