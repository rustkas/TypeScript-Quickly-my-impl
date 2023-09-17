"use strict";
const sym1 = Symbol("orderID");
const sym2 = Symbol("orderID");
console.log('sym1', sym1);
console.log('sym2', sym2);
const ord = Symbol('orderID');
const myOrder = {
    ord: "123"
};
console.log(myOrder['ord']);
function getName() {
    return 'Anatolii';
}
console.log('get name', getName());
