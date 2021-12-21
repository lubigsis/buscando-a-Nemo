const WIDTH = 533;
const HEIGHT = 400; 


/*genero ubicación aleatoria de Nemo*/
let Nemo = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};

/*para ver dónde hizo click el usuario, es decir, la coordenada del user */
let elementoMapHTML = document.getElementById('mapJS');
let distanciaRefHTML = document.getElementById('distanceJS');
let cantidadClicks = 0;

elementoMapHTML.addEventListener('click', function (e){
    cantidadClicks++;
    let distance = getDistance(e, Nemo);
    let distanciaPista = pistas(distance);
    distanciaRefHTML.innerHTML = distanciaPista;

    if(distance < 20){
        alert('Great, you have found Nemo in ' + cantidadClicks + ' clicks!');
        location.reload();
    }
})