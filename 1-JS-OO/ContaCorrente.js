import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;

  set cliente(novoValor) {
    if(novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  _saldo = 0;

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
  }

  depositar(valor) {
    if(valor <= 0) {
      return;
    }
    
    this._saldo += valor;
    console.log('Seu saldo depois de depositar: ', this._saldo);
  }

  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    } else {
      console.log("Você não tem saldo para fazer esse saque!")
    }
    console.log('Seu saldo depois de sacar: ', this._saldo);
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
};