var table = document.querySelector('#tabela-pacientes')

table.addEventListener('dblclick', (event) => {
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function (){
        event.target.parentNode.remove()
    },1000)
})