const arrayEats = [];
const moneyHildebrando = 2500000;

let foodFirst = {
  comida: 'Almojabana con gaseosa',
  price: 15000,
};
let foodTwo = {
  comida: 'Subway',
  price: 23000,
};
arrayEats.push(foodFirst, foodTwo);

let menu = true;
let diccionario = {};
while (menu) {
  let option = prompt(
    '1:Comprar algo de comer\n2: Jugar Piedra papel oh tijera\n6: Salir'
  );
  switch (option) {
    case '1': {
      // Declaro la variable para luego llamarla despues
      let availabilityFood = 'Los Productos son';
      arrayEats.forEach((a, b) => {
        availabilityFood =
          availabilityFood + `\n${b + 1}:${a.comida}\n El precio es ${a.price}`;
      });
      alert(`${availabilityFood}`);
      let optionFood = Number(
        prompt(
          'Ingrese\n 1:Para comprar Almojabana con gaseosa\n2:Para comprar Subway'
        )
      );
      if (optionFood === 1) {
        let firstFood = arrayEats[0];
        let restante = moneyHildebrando - firstFood.price;
        alert(`Hildebrando te quedan ${restante}`);
      } else if (optionFood === 2) {
        let secondFood = arrayEats[1];
        let restante = moneyHildebrando - secondFood.price;
        alert(`Hildebrando te quedan ${restante}`);
      }
      break;
    }
    case '2': {
      // SI Hildebrando GANA PAGA
      // SI EL TAXISTA PIERDE NO COBRA
      // SI HAY EMPATA NO PAGA
       let option = prompt("Ingrese una opcion\n1:Piedra\n2:Papel\n3:Tijera");
      let op
      break;
    }
    case '6': {
      menu = false;
      break;
    }
    default:
      alert('Ingresa una opcion correcta');
  }
}
let claveString = Number.toString(secondDecimalKey);