// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.
const prompt = require('prompt-sync')()

let string = prompt("Entre com a string: ")
let palavras = string.toLowerCase().split(" ")

let unicas = []

for(let i = 0; i < palavras.length; i++){
    if(unicas.length < 1){
        unicas.push(palavras[i])
    }else{
        let encontrou = false
        for (let j = 0; j < unicas.length; j++) {
            if(palavras[i] === unicas[j]){
                encontrou = true
            }
        }
        if(!encontrou){
            unicas.push(palavras[i])
        }
    }
}

console.log(unicas)