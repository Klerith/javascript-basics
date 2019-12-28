

const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while( i < carros.length ) {
//     console.log( carros[i] );
//     // i = i + 1;
//     i++;
// }

console.warn('While')
// undefined
// null
// false
while( carros[i] ) {
    if ( i === 1 ){
        // break;
        i++;
        continue;
    }
    
    console.log( carros[i] );
    i++;
}


console.warn('Do While');
let j = 10;

do {
    console.log( carros[j]);
    j++;
} while( carros[j] );

