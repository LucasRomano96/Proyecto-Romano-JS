const color = 'Negro';

for(let i = 2; i >= 0; i--){
    let opcion = prompt('Ingrese un color. Tenes '+ (i+1) + ' intentos.');
    if(opcion == color){
        alert('Ganaste');
        break;
    } else{
        opcion = prompt('Perdiste, te quedan '+ i);
    }
    
}







