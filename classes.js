/**
 * Aqui, eu atribuí uma função a variável car, aonde essa função possui um atributo 'color'
 * note que, para a variável color ser um atributo, deve ter o 'this' na frente, isso indica
 * que é um atributo pertencente aquela function
 */
let car = function(){

    this.color = "Black";

    this.start = function() {
        console.log("Car started the engine");
    }
}
console.log(car);
/**
 * Aqui, ao invés de ter apenas uma function atribuída a variável car, eu instanciei um objeto
 * de car. Isso o transforma em um objeto, como se a function dele fosse uma classe e a variável 'color'
 * fosse um atributo
 */
let object = new car();
console.log(object);
/**
 * Assim que é utilizado a sintaxe 'this' para as variáveis, elas se tornam atributos e podem ser acessadas
 * de fora, como no exemplo abaixo.
 * 
 * Os métodos das classes são feitos desta forma, criando uma variável com 'this.variavel' e atribuindo valor
 * a ela que é uma função (como no exemplo this.start = function() {})
 */
console.log(object.color);
console.log(object.start());
/**
 * Esta maneira descrita acima, é a maneira antiga de se criarem classes no JavaScript
 * Existe uma maneira nova que possui a sintaxe já usada em outras linguagens (usando sintasse 'class')
 */
/**
 * Esta é a maneira atual e mais atualizada de criar funções
 * Note que os atributos ficam dentro do construtor
 */
class animal {

    constructor() {
        this.type = "Panda";
    }

    eat() {
        console.log("Eating");
        return "Return of the function 'eat'";
    }
}

object = new animal();
console.log(object);
console.log(object.type);
console.log(object.eat());