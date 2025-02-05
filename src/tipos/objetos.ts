type Usuario = { nome: string, email: string}

let usuario: Usuario = {
    nome: 'Pedro',
    email: 'pedro@senha.com'
}

console.log(usuario)
console.log(usuario.nome)
console.log(usuario.email)

usuario = {
    ...usuario, email:"mudei@user.com"
}

console.log(usuario)