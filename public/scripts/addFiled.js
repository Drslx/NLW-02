// Script usado no front-end para adicionar novo horario

// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField) // Quando clicar no botao

function cloneField() { // Executar uma acao
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // Duplicar campos

    const fields = newFieldContainer.querySelectorAll('input') // Limpar os campos

    fields.forEach(function(field) { // Para  cada campo, limpar
        field.value = ""  // Pega o field do momento e limpa ele
    } )

// Colocar na pagina um novo campo
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
