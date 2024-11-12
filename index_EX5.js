function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calcularFibonacci() {
    let n = parseInt(prompt("Digite o valor de N:"));
    let resultado = fibonacci(n);
    console.log("O " + n + "-ésimo termo da série Fibonacci é: " + resultado);
}
