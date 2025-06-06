// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.
let produtos = [
  { nome: 'Notebook Gamer', preco: 4500 },
  { nome: 'Samsung Galaxy S24', preco: 8200 },
  { nome: 'Teclado Mecânico RGB', preco: 350 },
  { nome: 'Mouse Sem Fio', preco: 120 },
  { nome: 'Monitor 27" 4K', preco: 1800 },
  { nome: 'Cadeira Gamer', preco: 950 },
];

function nomeProdutosPorPreco(prods){
    let ordenado = prods.sort((produto1,produto2) => produto1.preco - produto2.preco).map(produto => produto.nome)

    return ordenado
}

console.log("Produtos Original\n",produtos)

let novoArray = nomeProdutosPorPreco(produtos)

console.log("Produtos Ordenados\n",novoArray)