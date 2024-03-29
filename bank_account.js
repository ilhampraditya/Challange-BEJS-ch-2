class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
    document.getElementById("saldo").textContent = this.saldo;
  }

  deposit(nominalDeposit) {
    document.getElementById("alertInformation").textContent =
      "Deposit sedang diproses, harap tunggu...";
    setTimeout(() => {
      let nominal = this.saldo;
      nominal += nominalDeposit;
      document.getElementById("saldo").textContent = nominal;

      this.saldo = nominal;
      document.getElementById("alertInformation").textContent = "";
    }, 3000);
  }

  withdraw(nominalWithdraw) {
    document.getElementById("alertInformation").textContent =
      "Penarikan sedang diproses, harap tunggu...";
    setTimeout(() => {
      let nominal = this.saldo;
      if (nominal < nominalWithdraw) {
        alert("Saldo tidak mencukupi penarikan");
      } else {
        nominal -= nominalWithdraw;
        document.getElementById("saldo").textContent = nominal;
      }

      this.saldo = nominal;
      document.getElementById("alertInformation").textContent = "";
    }, 3000);
  }
}
