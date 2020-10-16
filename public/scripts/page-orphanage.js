//creating the map
//usar Var ou let qnd há possibilidade de alteração mais tarde no código
const options = { // desabilitando opções de interação com o mapa
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map("mapid", options).setView([-22.8, -45.2], 14)

//creating and adding a tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    .addTo(map); /*o ; é facultativo */

//creating icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//creating and adding a marker
L.marker([-22.8, -45.2], { icon }) //como nomes são iguais neste caso icon equivale a icon(icon)
    .addTo(map)


// esqueci a porra 

function selectImage(event) {
    const button = event.currentTarget //pega o evento do clique no button da imagem
    console.log(button.children) //testar saida p console da pagina

    //remover  classes .active de todos os buttons (não sabemos qual que está em active)
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeClassActive)

    function removeClassActive(button) {
        button.classList.remove("active")
    }
   

    //selecionar o button selecionado
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container da imagem com a fonte do button selecionado
    imageContainer.src = image.src

    //adicionar a class active para o botao selecionado
    button.classList.add("active")

}