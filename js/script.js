let menu = document.querySelector("#hamburguerias")

fetch("js/json/bancoDados.json").then((response) => {
    response.json().then((dados) => {
        dados.restaurantes.map((restaurantes) => {
            menu.innerHTML += `<p>${restaurantes.id}</p> <p>${restaurantes.nome}</p> <p>${restaurantes.localizacao}</p>`
        })
    })
})