class DesafioEstatico {

    nota: number = 1000

    static executar() {
        console.log(new DesafioEstatico().nota)
    }

}

DesafioEstatico.executar()