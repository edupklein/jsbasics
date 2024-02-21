/**
 * Esta é a definição de um array em js
 * Neste exemplo, já está sendo inicializado com valores.
 * 
 * Notar que:
 * - Não é que nem um array em Java ou C que precisa ser criado tipando o número de ocorrências
 * - Esse array pode ser descrito semelhante a um ArrayList em java (tipo um List)
 * - Diferentemente de Java, ele não precisa ter só 1 tipo (List só de String ou só de Int)
 * - Ou seja, pode ser um array com múltiplos objetos diferentes dentro dele
 */
let stuff = ["Kicks SV CVT 2019", 2018, true, new Date(), function(){console.log("function in position 4")}];
console.log(stuff);
/**
 * É possível também chamar um método da classe que está na posição em questão diretamente, como demonstrado abaixo
 */
console.log(stuff[3].getFullYear());
/**
 * É possível também chamar a própria função que está dentro do array, usando a sintaxe abaixo
 * (a posição 4 é a function(){} e a sintaxe abaixo já permite executá-la)
 */
console.log(stuff[4]());
/**
 * Todo array possui o método forEach que recebe uma função como parâmetro
 * Essa função vai receber 2 valores: 1º -> value; 2º -> index
 * Dentro dessa função, é possível passar o que deve fazer ao percorrer o laço
 */
stuff.forEach((value, index) => {
    console.log(`index: ${index}, value: ${value}`);
});