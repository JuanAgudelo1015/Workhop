const arrayEats = []

let hildebrandoPayment = 2500000
let foodFirst = {
  comida: "Almojabana con gaseosa",
  price: 15.000
}
let foodTwo = {
  comida: "Subway",
  price: 23000
}

arrayEats.push(foodFirst, foodTwo)
while (true) {
  let option = prompt("1:Comprar algo de comer\n6: Salir ")
  switch (option) {
    case '6': {
      break;
    }
    case '1': {
      let disponibiliFood;
      arrayEats.forEach((a,b)=> {
        disponibiliFood = disponibiliFood + `\n${b + 1}${a.comida}\n`;
      })
      const productChoice = prompt(`Lista de productos: ${disponibiliFood}`)
    }
  }
}