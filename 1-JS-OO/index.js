class Cliente  {
  nome;
  cpf;
};

class ContaCorrente {
  agencia;
  #saldo = 0;

  depositar(valor) {
    if(valor <= 0) {
      return;
    }
    
    this.#saldo += valor;
    console.log('Seu saldo depois de depositar: ', this.#saldo);
  }

  sacar(valor) {
    if(this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    } else {
      console.log("Você não tem saldo para fazer esse saque!")
    }
    console.log('Seu saldo depois de sacar: ', this.#saldo);
  }
};

const cliente1 = new Cliente();
cliente1.nome = "Dyovana";
cliente1.cpf = 11122233309;

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.depositar(100);
conta1.sacar(500);

console.log(cliente1, conta1);