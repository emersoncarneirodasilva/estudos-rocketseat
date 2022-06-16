function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes("C")
    const fahrenheitExits = degree.toUpperCase().includes("F")

    // fluxo de erro
    if(!celciusExists && !fahrenheitExits) {
        throw new Error("Grau não identificado")
    }

    // fluxo de F para C
    let updateDegree = degree.toUpperCase().replace("F", "")
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    // fluxo de C para F
    if(celciusExists) {
        updateDegree = degree.toUpperCase().replace("C", "")
        formula = (celcius) => celcius * 9/5 + 32
        degreeSign = "F"
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree("10C"))
    console.log(transformDegree("50F"))
    transformDegree("50A")
} catch (error) {
    console.log(error.message)
}