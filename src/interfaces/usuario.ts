interface Usuario {
    id?: number,
    nome: string,
    email: string
    senha?: string
}

const usuarioLogado: Usuario = {
    id: 123,
    nome: "José",
    email: "jose@user.com"  
}

console.log(usuarioLogado)

const usuarioOpcional: Partial<Usuario> = {
    id: 321,
    nome: 'Marcos',
    senha: '654321'
}

console.log(usuarioOpcional)

const usuarioCompleto: Required<Usuario> = {
    id: 321,
    email: "ana@usr.com",
    nome: 'Marcos',
    senha: '654321'
}

console.log(usuarioCompleto)

// Partial serve pra portar os atributos como opcionais, montando o objeto com apenas partes dele
// Required serve pra tornar todos os atributos como obrigatorios, forçando um objeto completo.

export {}