// 9. Conversão Entre Formatos 
// Escreva duas funções: 
// ○  paresParaObjeto(pares) recebe um array de pares [ [chave, 
// valor], ... ] e retorna o objeto equivalente. 
// ○  objetoParaPares(obj)  faz  o  inverso,  retornando  um  array  de 
// pares.

let array = [
    ['carro','Camaro'],
    ['cidade','Canoas'],
    ['estado','RS'],
    ['ativo', true],
    ['idade', 26],
    ['nome','William José']
]

console.log("Array Original",array)

function paresParaObjeto(pares){
    
    return Object.fromEntries(pares)
}

function objetoParaPares(objetos){
    return Object.entries(objetos)
}

let objetoConvertido = paresParaObjeto(array)

console.log("Conversão para Objeto",objetoConvertido)

let arrayConvertido = objetoParaPares(objetoConvertido)

console.log("Conversão para Array",arrayConvertido)