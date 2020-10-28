//querySelectorAll = seleciona todos que tem a classe desejada transformando em um array
var pacientes = document.querySelectorAll(".pacientes");

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];

    //utiliza pacientes para buscar elementos filhos
    var peso = paciente.querySelector('.informacao-peso').textContent;
    var altura = paciente.querySelector('.informacao-altura').textContent;
    var imc = paciente.querySelector('.informacao-imc')

    if (peso > 1000 || peso < 0) {
        imc.innerHTML = `Erro 404` //manipulando css do tr

        paciente.classList.add("pacineteInvalido") //criando uma classe css

    } else if (altura > 10 || altura < 0) {
        imc.innerHTML = `Erro 404`
        paciente.classList.add("pacineteInvalido")
    } else {
        var calculo = calcula_imc(peso, altura);
        //resultado de cada elemento do array 
        imc.innerHTML = calculo;
    }
}



function calcula_imc(peso, altura) {
    var calculo = 0
    calculo = peso / (altura ** 2);

    // toFixed = numeros de casa depois da virgula
    return calculo.toFixed(2)
}