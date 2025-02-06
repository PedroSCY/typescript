//readonly faz com que o atributo não possa ser alterado

class Curso {
  private _nome: string | undefined;

  constructor( readonly id: number, public nome?: string) {
    if(id < 1 ) throw new Error("Id inválido")
  }
}

const c1 = new Curso(123);
console.log(c1);

const c2 = new Curso(321, "Outro Curso");
console.log(c2);

export {}