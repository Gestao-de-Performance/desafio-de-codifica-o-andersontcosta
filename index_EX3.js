function numerosPrimos() {
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    let primos = numeros.filter(numero => {
        if (numero < 2) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
    });
    console.log("Os seguintes números são primos: " + primos);
}
