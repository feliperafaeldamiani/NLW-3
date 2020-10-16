
//creating the map
//usar Var ou let qnd há possibilidade de alteração mais tarde no código
const map = L.map("mapid").setView([-22.8, -45.2],14); 

//creating and adding a tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map); /*o ; é facultativo */

//creating icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,69],
    popupAnchor: [170,2]
})

//creating popup layer
const popup = L.popup({
    closeButton: false,
    ClassName: 'map-popup',
    minWidht:240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg">')

//creating and adding a marker
L.marker([-22.8, -45.2], {icon}) //icon equivale a icon: icon qnd a variavel tem msm nome da propriedade, 
    .addTo(map)
    .bindPopup(popup)
