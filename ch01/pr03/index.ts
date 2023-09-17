const sym1 = Symbol("orderID")
const sym2 = Symbol("orderID")
  
console.log('sym1', sym1)
console.log('sym2', sym2)


const ord = Symbol('orderID')
const myOrder = { 
ord: "123"
}
console.log (myOrder['ord'])

function getName(): string | null {
  return 'Anatolii'
}
console.log ('get name', getName())

{
  const logger = () => {
    let doBreak = true
    while(true) {
      console.log('The server is up and running')
      if(doBreak) {
        return
      }
      
    }
  }
}