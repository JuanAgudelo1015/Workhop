const arrayEats = [];
const moneyHildebrando = 2500000;
const driverPayment = 300000;
const daysMacondo = 1;

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
let menuHotel = true;
let estado = true;
let diccionario = {};

while (menu) {
  let option = prompt(
    'Hildebrando Ingresa una opcion:\n\n1: Comprar algo de comer\n2: Jugar Piedra papel oh tijera\n3: Ir al Hotel\n4: Salir'
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
    case '2':
      // SI Hildebrando PIERDE PAGA
      // SI EL TAXISTA PIERDE NO COBRA
      // SI HAY EMPATA NO PAGA
      let optionHildebrando = parseInt(
        prompt('HILDEBRANDO Ingrese una opcion\n1:Piedra\n2:Papel\n3:Tijera')
      );
      // IS NAN = VERIFICA SI UN VALOR NO ES UN NUMERO
      // Verifico si la entrada no es un numero oh si es nula
      // 1 Piedra
      // 2 papel
      // 3 tijera
      if (
        optionHildebrando < 1 ||
        optionHildebrando > 3 ||
        isNaN(optionHildebrando)
      ) {
        alert('Ingresa una opcion valida');
        continue;
      } else {
        switch (optionHildebrando) {
          case 1:
            {
              let randomDriverNumber = Math.floor(Math.random() * 3) + 1;
              if (randomDriverNumber === 1) {
                alert('HUBO EMPATE\n NO PAGAS');
              } else if (randomDriverNumber === 2) {
                alert('HILDEBRANDO GANASTES!! NO PAGAS');
              } else if (randomDriverNumber === 3) {
                alert('HILDEBRANDO GANASTES DE NUEVO!! NO PAGAS');
              }
            }
            break;
          case 2:
            {
              let randomDriverNumber = Math.floor(Math.random() * 3) + 1;
              if (randomDriverNumber === 1) {
                let restanteDriver = moneyHildebrando - driverPayment;
                alert(`PERDISTE HILDEBRANDO\n Te quedan ${restanteDriver}`);
              } else if (randomDriverNumber === 2) {
                alert('HUBO EMPATE!! NO PAGAS');
              } else if (randomDriverNumber === 3) {
                alert(
                  `PERDISTE  DE NUEVO HILDEBRANDO\n Te quedan ${restanteDriver}`
                );
              }
            }
            break;
          case 3:
            {
              let restanteDriver = moneyHildebrando - driverPayment;
              let randomDriverNumber = Math.floor(Math.random() * 3) + 1;
              if (randomDriverNumber === 1) {
                alert(`PERDISTE HILDEBRANDO\n Te quedan ${restanteDriver}`);
              } else if (randomDriverNumber === 2) {
                alert('GANASTES HILDEBRANDO!!');
              } else if (randomDriverNumber === 3) {
                alert(`HUBO EMPATE! NO PAGAS`);
              }
            }
            break;
        }
      }

      break;
    case '3': {
      while (estado) {
        let menuHotel = parseInt(
          prompt(
            'Ingresa un patron de vestimenta\n1: Amarillo\n2: Verde\n3: Rojo\n4: Azul\n5: Salir del Hotel'
          )
        );
        switch (menuHotel) {
          case 1: {
            let questionFirst = confirm('DESEAS IR AH LA PISCINA');
            if (questionFirst) {
              let secondquestion = confirm('DESEAS ENTRAR AH LA PISCINA');
              if (secondquestion) {
                alert(
                  'TE ESTAS AHOGANDO HILDEBRANDO\n HAY DEMASIADO CLORO\nMORISTES'
                );
                let daysMacondos = daysMacondo + 1;
                let state = 'Muerto';
                let moneySpend = moneyHildebrando;
                alert(
                  `INFORMACION\nDias en macondo: ${daysMacondos}\nEstado: ${state}\nDinero Gastado: ${moneySpend}`
                );
              }
            }
            break;
          }
          case 2: {
            let questionGreen = confirm('¿DESEAS IR AH LA CAMINATA?');
            if (questionGreen) {
              alert('Estas es una hermosa caminata tomandote Fotos');
            } else {
              alert('Llegaste hasta el bosque y te perdistes');
              let daysMacondos = daysMacondo + 1;
              let state = 'Perdido';
              let moneySpend = moneyHildebrando;
              alert(
                `INFORMACION\nDias en macondo: ${daysMacondos}\nEstado: ${state}\nDinero Gastado: ${moneySpend}`
              );
            }
            break;
          }
          case 3: {
            alert(
              'Estuviste en la playa\nTomaste chirrinchi adulterado\nTe tuvistes que devolver de emergencia'
            );
            let daysMacondos = daysMacondo + 1;
            let state = 'Enfermo';
            alert(
              `INFORMACION\nDias en macondo: ${daysMacondos}\nEstado: ${state}\nDinero Gastado: ${moneySpend}`
            );
            break;
          }
          case 4: {
            let optionHotel = parseInt(
              prompt(
                'Ingrese una actividad ah realiazar dentro del hotel\n1:Jugar Bingo\n2: Bailar \n3: Ir al casino y apostar'
              )
            );
            if (optionHotel === 1) {
              let moneyBingo = Number(
                prompt('Ingrese el monto de dinero que gano Jugando bingo')
              );
            } else if (optionHotel === 2) {
              let optionGirl = prompt(
                'Elige una chica con la que quiere Bailar\n 1:Mariana\n 2: Valentina\n 3: Ciudada de Macondo'
              );
              alert(`La pasastes muy bien bailando con ${optionGirl}`);
            } else if (optionHotel === 3) {
              alert('PERDISTE LA APUESTA, SOLO QUEDASTE CON LOS PASAJES');
            }
            let daysMacondos = daysMacondo + 1;
            let state = 'Vivo';
            alert(
              `INFORMACION\nDias en macondo: ${daysMacondos}\nEstado: ${state}\nDinero Gastado: ${moneySpend}`
            );
            break;
          }
          case 5: {
            estado = false;
          }
        }
      }
      break;
    }
    case '4': {
      menu = false;
      break;
    }
    default:
      alert('Ingresa una opcion correcta');
  }
}
