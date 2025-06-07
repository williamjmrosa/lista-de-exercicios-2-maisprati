// 8. Agrupamento por Propriedade 
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde 
// cada chave é um cliente e o valor é a soma de todos os seus total.

vendas = [
 { cliente: 'William', total: 4500 },
 { cliente: 'Pedro', total: 500 },
 { cliente: 'Lucas', total: 2600 },
 { cliente: 'Felipe', total: 3100 },
 { cliente: 'Rodrigo', total: 300 },
 { cliente: 'Clara', total: 900 },
 { cliente: 'Luis', total: 1400 },
 { cliente: 'Rodrigo', total: 1300 },
 { cliente: 'William', total: 9000 },
];

function totalVendasPorCliente(vends){
    let totais = vends.reduce((acumulador,venda) =>{
        

    acumulador[venda.cliente] = acumulador[venda.cliente] ? acumulador[venda.cliente] + venda.total : venda.total

        return acumulador
    },{})

    return totais
}

let novoVendas = totalVendasPorCliente(vendas)

console.log(novoVendas)