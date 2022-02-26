var filtro = document.querySelector('#filtra-tabela')

filtro.addEventListener('input', function(){
    var valor = this.value
    var pacientes = document.querySelectorAll('.paciente')

    if(this.value.length > 0 ){
        for (paciente of pacientes) {
            var nome = paciente.querySelector('.info-nome').textContent
            var reg = new RegExp(this.value,'i')
            if (!reg.test(nome)) {
                paciente.classList.add('invisivel')
            } else {
                paciente.classList.remove('invisivel')
            }
        }        
    } else {
        for (paciente of pacientes){
            paciente.classList.remove('invisivel')
        }
    }
})