var pacientes = document.querySelectorAll('.paciente')

for (paciente of pacientes) {

    var peso = paciente.querySelector('.info-peso').textContent
    var altura = paciente.querySelector('.info-altura').textContent

    var tdImc = paciente.querySelector('.info-imc')

    var truePeso = true
    var trueAltura = true

    if (peso <= 0 || peso > 200) {
        truePeso =  false
        tdImc.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido')
    }

    if (altura <= 0 || altura >= 3) {
        trueAltura = false
        tdImc.textContent = 'Altura Inválida!'
        paciente.classList.add('paciente-invalido')
    }

    if ( truePeso && trueAltura){
        var imc = calculaIMC(peso, altura)      
        tdImc.textContent = imc   
    } 
}

function calculaIMC (peso, altura){
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}