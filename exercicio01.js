const prompt = require('prompt-sync')()

// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function eBissexto(ano){
    return (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)
}

function dataValida(dia,mes,ano){
    let eValido = true
    if(dia < 1 || mes < 1 || mes > 12 || ano < 1){
        eValido = false
    }
    diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if(eBissexto(ano)){
       diasNoMes[2] = 29 
    }

    if(dia > diasNoMes[mes]){
        eValido = false
    }

    if(eValido == false){
        console.log("Data Invalida")
    }else{
        console.log("A data ",dia,"/",mes,"/",ano," é valida")
    }

}

let entrada = prompt('Entre com uma data nesse formato(DD/MM/AAAA): ')

let data = entrada.split('/')

dataValida(Number(data[0]),Number(data[1]),Number(data[2]))

