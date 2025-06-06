function debounce(fn, delay){
    let timerId

    return function(...args){
        clearTimeout(timerId)

        timerId = setTimeout(() =>{
            fn.apply(this,args)
        },delay)
    }
}

function ver(texto){
    console.log("A função foi chamada com: ",texto)
}

const funcaoDebounce = debounce(ver, 300)

funcaoDebounce("Teste 1")
funcaoDebounce("Teste 1 2")
funcaoDebounce("Teste 1 2 3")