interface Usuario {
    id: number,
    nome: string,
    email: string,
    senha?: string
}

interface CasoDeUso {
    executar(entrada: any): any
}

interface RegistrarUsuarioEntrada {
    usuario: Usuario,
    msg: string,
}

class RegistrarUsuario implements CasoDeUso {
    executar(entrada: RegistrarUsuarioEntrada) {
        console.log("Executando registrar usuario")
        console.log(entrada.usuario)
        console.log(entrada.msg)
    }
    
}

const casoDeUso: CasoDeUso = new RegistrarUsuario()

const user1: Usuario = {
    id: 1,
    nome: "Pedro",
    email: "pedro@user.com",
    senha: "Senha123",
} 

casoDeUso.executar({usuario: user1, msg: "Concluido"})

export {}