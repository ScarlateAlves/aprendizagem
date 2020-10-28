//adicionar paciente com evento
var botao = document.getElementById("adicionar");

botao.addEventListener("click", function(event) {
    event.preventDefault(); //faz o que mando, previne comportamento padrao

    var formulario = document.getElementById('formulario')

    var paciente = obterPacienteFormulario(formulario) //fazendo chamada de funcao com um objeto e guardando na variavel paciente

    var pacienteTr = criaTh(paciente) //monta e cria th e tr

    var tabelaPaciente = document.querySelector("#tabale-paciente"); //chamei tabela do html

    tabelaPaciente.appendChild(pacienteTr) //adiciona paciente dentro da tabela do html

});


function obterPacienteFormulario(formulario) {
    //criando objeto
    var paciente = {
        //pegar o valor da teg é só colocar o .value
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcula_imc(formulario.peso.value, formulario.altura.value)
    }
    return paciente
}

//criar elemeto de tabela que nem esta no html 
function criaTh(paciente) {
    var pacienteTr = document.createElement('tr')
    var nomeTh = document.createElement('th')
    var pesoTh = document.createElement('th')
    var alturaTh = document.createElement('th')
    var gorduraTh = document.createElement('th')
    var imcTh = document.createElement('th')

    //atribuindo a variavel nomeTr para nome que foi escrito no add
    nomeTh.textContent = paciente.nome;
    pesoTh.textContent = paciente.peso;
    alturaTh.textContent = paciente.altura;
    gorduraTh.textContent = paciente;
    imcTh.textContent = paciente.imc

    //add elemento nomeTh em pacineteTr
    pacienteTr.appendChild(nomeTh);
    pacienteTr.appendChild(pesoTh);
    pacienteTr.appendChild(alturaTh);
    pacienteTr.appendChild(gorduraTh);
    pacienteTr.appendChild(imcTh);

    return pacienteTr
}