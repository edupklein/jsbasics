/**
 * Atribuição de variável e exibição em tela. Atentar que a variável é global, devido a declaração 'var'
 */
var helloWorld = "Hello World";
console.log(helloWorld);

/**
 * Se quiser usar um popup de alerta, usar o método alert, conform exemplo abaixo:
 * 
 * alert(helloWorld);
 */

// Atribuição da constante b (nunca irá mudar o valor)
const b = 20;

/**
 * Está jogando para o log o resultado da expressão do number 10 igual ao number 20
 * 
 * @returns false
 */
console.log("number 10 == number 20: " + (numberA() == b));
/**
 * Está jogando para o log o resultado da expressão da string "20" igual ao number 20
 * 
 * OBS.: Retorna true, pois a expressão com '==' apenas compara valor e não tipo de variável, e, neste caso,
 * o valor de ambas é 20, independente do tipo (se for number ou string)
 * 
 * @returns true
 */
console.log("string '20' == number 20: " + (stringA() == b));
/**
 * Está jogando para o log o resultado da expressão da string "20" igual ao number 20, porém compara também o tipo de variável
 * 
 * OBS.: Retorna false, pois a expressão com '===' compara o valor e também o tipo, e, neste caso, apesar dos valores serem iguais,
 * os tipos são diferentes (number é diferente de string)
 * 
 * @returns false
 */
console.log("string '20' === number 20: " + (stringA() === b));
/**
 * Retorna para o log o resultado da expressão comparando se algum (valor ou tipo) forem diferentes
 * 
 * OBS.: Retorna true pois, apesar dos valores serem 'iguais', os tipos são diferentes, portanto é true (há diferença)
 * 
 * @returns true
 */
console.log("string '20' !== number 20: " + (stringA() !== b));

/**
 * Retorna para o log o resultado da expressão comparando se o valor é diferente
 * 
 * OBS.: Retorna false pois os valores são iguais e não está comparando os tipos, então é falso que são diferentes
 * 
 * @returns false
 */
console.log("string '20' != number 20: " + (stringA() != b));

/**
 * Retorna para o log o resultado da expressão comparando se o valor é diferente
 * 
 * OBS.: Retorna true pois os valores são iguais e não está comparando os tipos, então é true que são iguais
 * 
 * @returns true
 */
console.log("string '20' == number 20 && typeof b == 'number': " + (stringA() == b && typeof b == 'number'));

/**
 * Função que retorna número da variável a (number de valor 10)
 * Atentar que a cláusula 'let' cria a variável 'a', mas a torna disponível apenas no 
 * escopo da function. Quando a function finalizar, a variável não existirá mais
 * 
 * @returns number = 10
 */
function numberA() {
    let a = 10;
    return a;
}

/**
 * Função que retorna string da variável a (string de valor "20")
 * Atentar que a cláusula 'let' cria a variável 'a', mas a torna disponível apenas no 
 * escopo da function. Quando a function finalizar, a variável não existirá mais
 * 
 * @returns string = "20"
 */
function stringA() {
    let a = "20";
    return a;
}