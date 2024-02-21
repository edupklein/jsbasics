/**
 * window se refere a janela inteira do navegador, faz parte da hierarquia do BOM (Browser Object Model) e 
 * é o objeto raiz dessa hierarquia.
 * 
 * Por se tratar do objeto raiz da janela inteira do navegador, possui eventos e métodos para fazer diversas 
 * coisas referentes a janela, como: 
 * - Refresh da janela
 * - Mudar propriedades da janela
 * - Abrir uma nova aba
 * - Fechar uma aba
 * - Abrir uma nova janela (window.open)
 * - Fechar uma janela (window.close)
 * - Setar o foco atual do sistema para uma janela existente (window.focus)
 */
window.addEventListener("focus", event => {
    console.log("focus");
});
/**
 * document se refere apenas a área do documento, parte onde contém o HTML. O document é uma raiz do BOM 
 * e ele por si só também possui sua hierarquia, o DOM (Document Object Model)
 */
document.addEventListener("click", event => {
    console.log("click");
})
/**
 * Aqui, está retornando a data/hora atual chamando o método static da classe Date
 * Este método retorna os milissegundos passados desde 01/01/1970
 */
let date = Date.now();
console.log(date);
/**
 * Aqui, estamos instanciando um novo objeto Date, no qual retorna a data/hora já formatada humano-legível
 */
date = new Date();
console.log(date);
/**
 * Aqui, pegamos o objeto de Date já instanciado e chamamos um método pronto que retorna a data formatada para outro padrão
 * (no caso, o padrão 'pt-BR')
 */
console.log(date.toLocaleString("pt-BR"));