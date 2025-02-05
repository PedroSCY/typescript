type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}

const clientes: Cliente[] = [
  {
    nome: "João",
    email: "joao@user.com",
    contas: [{ numero: 101, saldo: 100, movimentar }],
  },
  {
    nome: "Luiz",
    email: "luiz@user.com",
    contas: [{ numero: 201, saldo: 0, movimentar }],
  },
];

function movimentarConta(numConta: number, valor: number) {
  const conta = clientes.map((cliente) => {
    return cliente.contas.find(cc => cc.numero === numConta)
  }).filter( c => c )[0];
  conta?.movimentar(valor)
}
function consultarSaldo(numConta: number): number | null {
    const conta = clientes.map((cliente) => {
      return cliente.contas.find(cc => cc.numero === numConta)
    }).filter( c => c )[0];
    return conta?.saldo ?? null
  }

console.log(consultarSaldo(101))
movimentarConta(101, 100)
console.log(consultarSaldo(101))

