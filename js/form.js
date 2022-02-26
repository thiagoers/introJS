var button = document.querySelector('#adicionar-paciente')


button.addEventListener('click', (event) => {
    event.preventDefault()    
    var form = document.querySelector('#addForm')
    
    var patient = obtemPacienteDoForm(form)

    var erros = validaCampos(patient)

    if(erros.length > 0){
        exibeErros(erros)
        return
    }    
    
    var patientTr = buildTr(patient)    
    
    var table = document.querySelector('#tabela-pacientes')
    table.appendChild(patientTr)
    
    form.reset()
    
    var ul = document.querySelector("#mensagens-erros")
    ul.innerHTML = ""
})

function exibeErros (erros) {
    var ul = document.querySelector("#mensagens-erros")
    ul.innerHTML = ""
    erros.forEach((erro) => {
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function validaCampos(patient) {
    var erros = []

    if (patient.name.length == 0) {
        erros.push("Nome não pode ser em branco!")
    }

    if (!validaPeso(patient.weight) || patient.weight.length == 0) {
        erros.push("Peso incorreto!")
    }

    if (!validaAltura(patient.height) || patient.height.length == 0) {
        erros.push("Altura incorreta!")
    }
    
    if(patient.fat.length == 0){
        erros.push("% de Gordura não pode ser em branco!")
    }

    return erros
}

function obtemPacienteDoForm (form){
    var patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return patient
}

function buildTr (patient){
    var patientTr = document.createElement('tr')
    patientTr.classList.add('paciente')

    patientTr.appendChild(buildTd(patient.name, "info-nome"))
    patientTr.appendChild(buildTd(patient.weight, 'info-peso'))
    patientTr.appendChild(buildTd(patient.height, 'info-altura'))
    patientTr.appendChild(buildTd(patient.fat, 'info-gordura'))
    patientTr.appendChild(buildTd(patient.imc))

    return patientTr
}

function buildTd (dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}