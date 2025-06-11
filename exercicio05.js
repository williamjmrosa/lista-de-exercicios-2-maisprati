// 5. Debounce 
// Crie function debounce(fn, delay) que receba uma função fn e um delay 
// em  ms,  retornando  uma  nova  função  que  só  executa  fn  se  não  for 
// chamada novamente dentro do intervalo.

function debounce(fn, delay){
    let timerId

    return function(...args){
        clearTimeout(timerId)

        timerId = setTimeout(() =>{
            fn.apply(this,args)
        },delay)
    }
}