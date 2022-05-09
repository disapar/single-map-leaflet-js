import './style.css'
const coord = [-35.003422,-59.2860854]


var verde = L.icon({
  iconUrl: `https://img.freepik.com/foto-gratis/joven-mujer-caucasica-feliz-desnuda_144627-1275.jpg?w=2000`,
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [20, 50], // size of the shadow
  iconAnchor:   [40, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-23, -50] // point from which the popup should open relative to the iconAnchor
});
var map = L.map('map').setView(coord, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var A =  L.marker(coord,  {icon: verde},{draggable:false}).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();