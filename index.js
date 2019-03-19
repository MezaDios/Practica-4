
document.getElementById("formPerfecto").onsubmit = (e) => {
    e.preventDefault()

    let numero = document.getElementById("valorPerfecto").valueAsNumber

    let divisores = new Array()
    let suma = 0

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i == 0) {
            divisores.push(i)
            suma += i
        }
    }

    if (suma == numero) {
        document.getElementById("resultadoPerfecto").innerHTML = `Sus divisores menores son: 
        ${divisores.join(',')} y la suma es ${suma} por lo tanto es perfecto`
    }
    else {
        document.getElementById("resultadoPerfecto").innerHTML = `Sus divisores menores son: 
        ${divisores.join(',')} y la suma es ${suma} por lo tanto NO es perfecto`
    }
}


document.getElementById("formPrimo").onsubmit = (e) => {
    e.preventDefault()

    let numero = document.getElementById("numeroPrimo").valueAsNumber

    let primos = new Array()

    for (let i = 0; i < numero; i++) {

        let divisores = new Array()

        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                divisores.push(i)
            }
        }

        if(divisores.length == 2 && i != 1){
            primos.push(i)
        }
    }

    document.getElementById("resultadoPrimo").innerHTML = `Los primos menores a ${numero} son: 
    ${primos.join(',')}`
}