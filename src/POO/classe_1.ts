class Curso {
  private _id: number | undefined;
  private _nome: string | undefined;

  get id() {
    return this._id;
  }

  set id(id: number | undefined) {
    if((id ?? 0) > 0) {
        this._id = id;
    }
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome: string | undefined) {
    this._nome = novoNome;
  }
}

const c1 = new Curso();
c1.id = 123
c1.nome = "alterado" 
console.log(c1);


export {}