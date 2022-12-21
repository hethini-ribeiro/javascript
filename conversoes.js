//conversao implicita

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
console.log(numero + numeroString);


// conversao explicita
console.log(numero + Number(numeroString));

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
console.log("O telefone é " + telefone.toString()); 

let largura = "10";
let altura = "5";
// teremos a conversão de String para números realizado usando o + antes das variáveis
console.log( + largura * + altura); 