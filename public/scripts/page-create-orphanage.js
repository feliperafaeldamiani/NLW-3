const map = L.map("mapid").setView([-22.8, -45.2], 14)

//creating and adding a tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    .addTo(map); /*o ; é facultativo */


const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

//create and add marker

/*//()=>{} analogo a function()
map.on('click',(event)=>{console.log(event)}) //mostrar no console os atributos gerados ao clicar no mapa
*/

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat; //guardar a posição do click no mapa
    document.querySelector('[name=lng]').value = lng;

    //remove previous icons
    marker && map.removeLayer(marker) //logica: se existe marker então remove da layer do mapa
    //add icon Layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//add campo de fotos
function addPhotoField(){
    
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    
    //pegar container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(2) //2 copia tudo
    
    //verificar se campo está vazio, caso afirmativo, não poder adicionar mais campo
    const input = newFieldContainer.children[0] //filho 0 é o input e filho 1 é o span
    if(input.value == ""){
        return //se vazio finaliza o codigo neste ponto, não executa proximas linhas da função
    }
    
    //limpeza do campo antes do clone
    input.value = "" 
    
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2 ){
        //limpar
        span.parentNode.children[0].value = ""
        return
    }
    //deletar campo
    span.parentNode.remove()
}

//Selecionar botao Sim ou Não
function toggleSelect (event){
    
    //retirar classe active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))
    
    //colocar class active no botao q foi clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    //atuaizar o input hidden com o nome do botao
    const input  = document.querySelector('[name="open_on_weekends"]')
    
    //atribiu o valor do  data-value atribuido a cada botao
    input.value = button.dataset.value
    
}