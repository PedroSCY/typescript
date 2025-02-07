interface Entidade {
    id: string
}

interface Vendavel {
    preco: number,
    desconto?: number
}

interface EntidadeComDatas extends Entidade {
    criadoEm?: Date,
    atualizadoEm: Date,
    excluidoEm?: Date
}

interface Usuario extends EntidadeComDatas {
    nome: string,
    email: string,
    senha?: string
}


const u1: Usuario = {
    id: "01",
    nome: "Pedro",
    email: "pedro@user.com",
    senha: "Senha123",
    criadoEm: new Date(),
    atualizadoEm: new Date() 
}

interface Produto extends EntidadeComDatas,Vendavel {
    nome: string
}

const p1: Produto = {
    id: "01",
    nome: "TV",
    preco: 1450,
    criadoEm: new Date(),
    atualizadoEm: new Date()
}

console.log(u1)
console.log(p1)


export {}