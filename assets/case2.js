// ALTO = VERTICAL
// LARGO = SON LOS LADOS
// ANCHO = PARTE FRONTAL DE LA MALETA

/*
Tamaño normal de las aerolineas para maletas
55 cm (alto) x 40 cm (largo) x 20 cm (ancho)

Tamaño que tiene Hildeberto 
60 cm (alto) x 40 cm (largo)x 20x cm.
*/

let height = 60;
let length = 40;
let width = 20;

const maxHeight = 55;
const maxLength = 40;
const maxWidth = 20;

let heightReduce = maxHeight / height;
let lengthReduce = maxLength / length;
let widthReduce = maxWidth / width;

let resultado = [heightReduce, lengthReduce, widthReduce];
let lessSmall = Math.min(...resultado);

// Metodo fixed: le paso como parametros los decimales que quiero que tenga
let newHeight = Number((height * lessSmall).toFixed(2));
let newLong = Number((length * lessSmall).toFixed(2));
let newWidth = Number((width * lessSmall).toFixed(2));

alert(
  `La nueva altura es ${newHeight}\n El nuevo largo es ${newLong}\n El nuevo ancho es ${newWidth}`
);
