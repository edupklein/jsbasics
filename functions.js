/**
 * Declaração de função de maneira 'normal', com nome
 */
function operationFunction(x1, x2, operator) {
    /**
     * Função 'eval' em js recebe uma string e retorna o resultado a operação
     * da String
     */
    return eval(`${x1} ${operator} ${x2}`);
}

let result = operationFunction(1, 2, "+");

console.log(result);

/**
 * Declaração de uma função sem nome, passando diretamente os parâmetros e já atribuindo
 * o resultado a uma variável
 */
result = (function(x1, x2, operator) {
    /**
     * Função 'eval' em js recebe uma string e retorna o resultado a operação
     * da String
     */
    return eval(`${x1} ${operator} ${x2}`);
})(1, 2, "+")

console.log(result);

/**
 * Declaração de uma função utilizando o Arrow Function
 */
let operationArrowFuntion = (x1, x2, operator) => {
    /**
     * Função 'eval' em js recebe uma string e retorna o resultado a operação
     * da String
     */
    return eval(`${x1} ${operator} ${x2}`);
}
result = operationArrowFuntion(1, 2, "+");
console.log(result);