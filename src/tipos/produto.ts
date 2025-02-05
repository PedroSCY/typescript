type Produto = { 
    nome: string,
    preco: number,
    desconto: number,
    precoComDesconto: () => number
}

const produtoUm: Produto = {
    nome: "Celular",
    preco: 1000,
    desconto: 0.1,
    precoComDesconto() {
        return this.preco * (1- this.desconto)
    },
}

console.log(produtoUm)
console.log(produtoUm.precoComDesconto())

