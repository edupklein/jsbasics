let color = "yellow";

/**
 * Comparação de estado usando if/else if
 */
if(color === "green") {
    
    console.log("Proceed forward.");

} else if(color === "yellow") {

    console.log("Proceed with caution.");

} else if(color === "red") {

    console.log("Stop.");

}

/**
 * Comparação de estado usando switch
 */
switch(color) {
    case "green":
        console.log("Proceed forward.");
        break;

    case "yellow":
        console.log("Proceed with caution.");
        break;

    case "red":
        console.log("Stop.");
        break;

    default:
        console.log("Invalid");
}

let n = 5;

for(let i = 0; i <= 10; i++) {
// Instrução 'continue' seria equivalente a um 'exit perform cycle'
    if(i == 5) {
        continue;
    }
// Instrução 'break' seria equivalente a um 'exit perform'
    if(i == 8) {
        break;
    }
    /**
     * O nome desta sintaxe ${} se chama Template String
     * Para utilizá-la, é necessário começar e terminar a String com o caractere crase `
     * O que ficar dentro do ${} pode ser um código javascript
     */
    console.log(`${i} X ${n} = ${i * n}`);
    /**
     * O equivalente a linha de cima, sem usar o Template String, ficaria assim, fazendo uma
     * concatenação de Strings, a desvantagem disso é que não é possível quebrar o código com ENTER, 
     * é necessário deixar tudo corrido numa linha só
     */
    console.log(i + " X " + n + " = " + (i * n));
}
