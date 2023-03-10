let getRandomNumber = size =>{
    return Math.floor(Math.random() * size);
}


// e: evento del click del user /  target: la coord. donde está el tesoro
//aplico teorema de pitágoras para obtener distancia de donde hizo click el user hasta donde está el tesoro

let getDistance = (e, Nemo) => {             
    let diffX = e.offsetX  - Nemo.x;
    let diffY = e.offsetY - Nemo.y;
    
    return Math.sqrt((diffX * diffX) + (diffY * diffY));

}

let pistas = distance =>{
    if (distance < 30){
        return "Hirviendo!";
    }else if (distance < 40){ 
        return "Muy caliente!";
    }else if(distance < 60){
        return "Caliente";
    }else if (distance < 100){
        return "Tibio...";
    }else if (distance < 180){
        return "Frío";
    }else if (distance < 360){
        return "Muy frío";
    }else {
        return "Congelado!";
    }
}