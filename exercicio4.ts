interface Produto {
  nome: string;
  preco: number;
}

function obterPrimeiro<T>(lista: T[]): T {
  return lista[0];
}

const primeiroNome = obterPrimeiro<string>(["Ana", "Bruno", "Carlos"]);
const primeiroNumero = obterPrimeiro<number>([10, 20, 30]);
const primeiroProduto = obterPrimeiro<Produto>([
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 80 },
]);

console.log(primeiroNome);
console.log(primeiroNumero);
console.log(primeiroProduto);