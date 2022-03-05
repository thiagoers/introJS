var button = document.querySelector('#adicionar-paciente')


button.addEventListener('click', (event) => {
    event.preventDefault()    
    var form = document.querySelector('#addForm')
    
    var paciente = obtemPacienteDoForm(form)

    var erros = validaCampos(paciente)

    if(erros.length > 0){
        exibeErros(erros)
        return
    }    
    
    addPacienteNaTabela(paciente)
    
    form.reset()
    
    var ul = document.querySelector("#mensagens-erros")
    ul.innerHTML = ""
})

function addPacienteNaTabela(paciente){
    var pacienteTr = buildTr(paciente)    
    
    var table = document.querySelector('#tabela-pacientes')
    table.appendChild(pacienteTr)
}

function exibeErros (erros) {
    var ul = document.querySelector("#mensagens-erros")
    ul.innerHTML = ""
    erros.forEach((erro) => {
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function validaCampos(paciente) {
    var erros = []

    if (paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco!")
    }

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0) {
        erros.push("Peso incorreto!")
    }

    if (!validaAltura(paciente.altura) || paciente.altura.length == 0) {
        erros.push("Altura incorreta!")
    }
    
    if(paciente.gordura.length == 0){
        erros.push("% de Gordura não pode ser em branco!")
    }

    return erros
}

function obtemPacienteDoForm (form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente
}

function buildTr (paciente){
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(buildTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(buildTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(buildTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(buildTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(buildTd(paciente.imc))

    return pacienteTr
}

function buildTd (dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}