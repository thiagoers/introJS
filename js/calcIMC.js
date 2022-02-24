var pacientes = document.querySelectorAll('.paciente')

for (paciente of pacientes) {

    var peso = paciente.querySelector('.info-peso').textContent
    var altura = paciente.querySelector('.info-altura').textContent

    var tdImc = paciente.querySelector('.info-imc')

    var truePeso = validaPeso(peso)
    var trueAltura = validaAltura(altura)

    if (!truePeso) {
        truePeso =  false
        tdImc.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido')
    }

    if (!trueAltura) {
        trueAltura = false
        tdImc.textContent = 'Altura Inválida!'
        paciente.classList.add('paciente-invalido')
    }

    if ( truePeso && trueAltura){
        var imc = calculaIMC(peso, altura)      
        tdImc.textContent = imc   
    } 
}

function validaPeso (peso){
    if (peso > 0 && peso <= 200){
        return true
    } else {
        return false
    }
}

function validaAltura (altura){
    if (altura > 0 && altura < 3){
        return true
    } else {
        return false
    }
}

function calculaIMC (peso, altura){
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}