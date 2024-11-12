// Exercício 1
function exercicio1() {
    let a = 199.3;
    let b = 120;
    let resultado = a + b;
    console.log("Exercício 1 - A soma é: " + resultado);
}

// Exercício 2
function exercicio2() {
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let soma = numeros.reduce((a, b) => a + b, 0);
    let media = soma / numeros.length;
    console.log("Exercício 2 - A média é: " + media);
}

// Exercício 3
function exercicio3() {
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    let primos = numeros.filter(numero => {
        if (numero < 2) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
    });
    console.log("Exercício 3 - Números primos: " + primos);
}

// Exercício 4
function exercicio4() {
    let escolha = prompt("Escolha 'par' ou 'ímpar':").toLowerCase();
    let numeroUsuario = parseInt(prompt("Digite um número:"));
    let numeroComputador = Math.floor(Math.random() * 10) + 1;
    let soma = numeroUsuario + numeroComputador;
    let resultado = (soma % 2 === 0) ? 'par' : 'ímpar';
    if (escolha === resultado) {
        alert("Exercício 4 - Você ganhou! A soma foi " + soma + " (" + resultado + ")");
    } else {
        alert("Exercício 4 - Você perdeu! A soma foi " + soma + " (" + resultado + ")");
    }
}

// Exercício 5
function exercicio5() {
    let n = parseInt(prompt("Digite o valor de N:"));
    let resultado = fibonacci(n);
    console.log("Exercício 5 - O " + n + "-ésimo termo da série Fibonacci é: " + resultado);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
