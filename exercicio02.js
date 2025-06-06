const prompt = require('prompt-sync')()

// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

function jogoAdivinhacao(){
    numRandom = Math.floor(Math.random() * 100) + 1

    let entrada
    let tentativas = 0
    console.log("Tente adivinhar um numero aleatorio entre 1 e 100")
    do{
        entrada = Number(prompt('Tente adivinhar o numero: '))

        if(isNaN(entrada) || entrada < 1 || entrada > 100){
            console.log('Entrada Invalida tente novamente')
        }else if(entrada < numRandom){
            console.log('Tentativa(s)',++tentativas,'Valor Mais alto')
        }else if(entrada > numRandom){
            console.log('Tentativas(s)',++tentativas,'Valor Mais baixo')
        }else{
            console.log('Tentativas',tentativas,'Acertou')
        }

    }while(numRandom != entrada)
}

jogoAdivinhacao()