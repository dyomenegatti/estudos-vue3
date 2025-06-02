import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Dyovana", 11122233309);
const cliente2 = new Cliente("Marco", 11122233310);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
// conta1.sacar(500);

const conta2 = new ContaCorrente(cliente2, 1001);
conta2.agencia = 1001;

conta1.transferir(200, conta2);



console.log(conta1, conta2);
console.log(ContaCorrente.numeroDeContas);