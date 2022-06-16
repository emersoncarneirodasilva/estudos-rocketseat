let familia = {
    receitas: [2200, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450, 2000]
}

function soma(array) {
    let total = 0

    for (let valor of array) {
        total += valor
    }
    return total
}

function calculoBalanco() {
    const calculoReceitas = soma(familia.receitas)
    const calculoDespesas = soma(familia.despesas)

    const total = calculoReceitas - calculoDespesas

    const estaOk = total >= 0

    let balanco = "Negativo"

    if (estaOk) {
        balanco = "Positivo"
    }

    console.log(`Seu saldo é ${balanco}: R$ ${total.toFixed(2)}`)
}

calculoBalanco()