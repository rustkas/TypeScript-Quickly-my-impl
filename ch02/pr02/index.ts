class Person {
  constructor(public firstName: string, public lastName: string, private age:number) {

  }
}

 const pers = new Person('John', 'Smith', 29)

 console.log(`${pers.firstName} ${pers.lastName}`)
//  console.log(`${pers.age}`)


class Gangsta {
  static totalBullets = 100

  short() {
    Gangsta.totalBullets--
    console.log(`Bullets left: ${Gangsta.totalBullets}`)
  }
}