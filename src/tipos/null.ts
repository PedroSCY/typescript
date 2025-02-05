type User = {
    nome: string,
    email: string
}

const users: User[] = [
    {nome: 'João', email:"joao@user.com"},
    {nome: 'Luiz', email:"luiz@user.com"},
    {nome: 'Maria', email:"maria@user.com"},
    {nome: 'Bia', email:"bia@user.com"},
    {nome: 'Leo', email:"leo@user.com"},
    {nome: 'Pedro', email:"pedro@user.com"},
]

function buscarPorEmail(email: string): User | null {
    return users.find(u => u.email === email) ?? null
}

console.log(buscarPorEmail("leo@user.com"))
console.log(buscarPorEmail("teste@user.com"))