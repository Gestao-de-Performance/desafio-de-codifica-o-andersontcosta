function media() {
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let soma = numeros.reduce((a, b) => a + b, 0);
    let media = soma / numeros.length;
    console.log("O resultado da média é: " + media);
}
