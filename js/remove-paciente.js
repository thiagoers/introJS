var table = document.querySelector('#tabela-pacientes')

table.addEventListener('dblclick', (event) => {
    event.target.parentNode.remove()
})