let getRandomNumber = size =>{
    return Math.floor(Math.random)() * size;
}


// e: evento del click del user /  target: la coord. donde está el tesoro
//aplico teorema de pitágoras para obtener distancia de donde hizo click el user hasta donde está el tesoro

let getDistance = (e, target) => {             
    let diffX = e.offsetX  - target.x;
    let diffY = e.offsetY - target.y;
    
    return Math.sqrt((diffX * diffX) + (diffY * diffY));

}