const phrase = 'Taxi me puede llevar al hotel mariposas amarillas'
//Que solo se habla con la vocal "i"

//Convertir la frase para que todas sus vocales sean "i"

// separara por letras
const phraseSplit = phrase.split("");
// console.log(phraseSplit)
let message = ""

// creando un arreglo de vocales
const vowels = ["a","e","i","o","u"];

phraseSplit.forEach((element) =>{
  if (vowels.includes(element)){
    message += "i";
    console.log(phrase)
    console.log(message)
    return
  }
  message += element
  console.log(phrase);
  console.log(message)
})

// if(array).includes(element){
//   message += "i"
// }
// else{
//   message += elemento
// }