var button = document.querySelector('#adicionar-paciente')


button.addEventListener('click', (event) => {
    event.preventDefault()    
    var form = document.querySelector('#addForm')
    
    var patient = obtemPacienteDoForm(form)
    
    var patientTr = buildTr(patient)    

    var table = document.querySelector('#tabela-pacientes')
    table.appendChild(patientTr)

    form.reset()

})

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