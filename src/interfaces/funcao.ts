interface OperacaoMatematicaOBJ {
  fn: (n1: number, n2: number) => number;
}

const somaObj: OperacaoMatematicaOBJ = {
  fn(n1, n2) {
    return n1 + n2;
  },
};

console.log(somaObj.fn(5, 5));

interface OperacaoMatematica {
  (n1: number, n2: number): number;
}

const soma: OperacaoMatematica = (a, b) => {
    return a + b
}
