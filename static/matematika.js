/* export const matematika = {
    add: '+',
    diff: '-',
    multi: '*',
    div: '/',
    mod: '%',    
};
*/

/* function add(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}
*/
//arba uzrasome kompaktiskesniu budu ir labiau personalizuojame:

/* const addFunc = (a, b) => a + b;
const diffFunc = (a, b) => a - b;
const multiFunc = (a, b) => a * b;
const divFunc = (a, b) => a / b;
const modFunc = (a, b) => a % b;
*/

//exporta nusikeliame zemiau, kad nemestu klaidos!!

/* export const matematika = {
    add: addFunc,
    diff: diffFunc,
    multi: multiFunc,
    div: divFunc,
    mod: modFunc,    
};

console.log(addFunc(7, 5));
*/


//BET kam man kurti objekta, kuriame bus raktai ir nuoroda i funkcija, kuria reikes
//executinti, jeigu mes vietoj to galime cia pat visa logika surasyti:

export const matematika = {
    add: (a, b) => a + b,
    diff: (a, b) => a - b,
    multi: (a, b) => a * b,
    div: (a, b) => a / b,
    mod: (a, b) => a % b,    
};

console.log(matematika.add(7, 5));
console.log(matematika.diff(7, 5));
console.log(matematika.multi(7, 5));
console.log(matematika.div(7, 5));
console.log(matematika.mod(7, 5));