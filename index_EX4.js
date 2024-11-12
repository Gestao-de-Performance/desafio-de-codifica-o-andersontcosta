function parOuImpar() {
    let escolha = prompt("Escolha 'par' ou 'ímpar':").toLowerCase();
    let numeroUsuario = parseInt(prompt("Digite um número:"));
    let numeroComputador = Math.floor(Math.random() * 10) + 1;
    let soma = numeroUsuario + numeroComputador;
    let resultado = (soma % 2 === 0) ? 'par' : 'ímpar';
    if (escolha === resultado) {
        alert("Parabéns! A soma foi " + soma + " (" + resultado + ")");
    } else {
        alert("Que pena! A soma foi " + soma + " (" + resultado + ")");
    }
}
