const mensaje = alert('Bienvendidas, los dias y horarios del salon de belleza son de Lunes a Sabado, desde las 9hs hasta 21hs.');
const mensaje2 = alert('Para pedir un turno ingrese dia, horario, nombre y apellido por favor.');

function turnos(dia, horario, nombre, apellido){
    this.dia = dia;
    this.horario = horario;
    this.nombre = nombre;
    this.apellido = apellido;
    
}

const horariosInvalidos = [21.15, 21.30, 21.45, 22.00, 22.15, 22.30, 22.45, 23.00, 23.15, 23.30, 23.45, 1.00, 1.15, 1.30, 1.45, 2.00, 2.15, 2.30, 2.45, 3.00, 3.15, 3.30, 3.45, 4.00, 4.15, 4.30, 4.45, 5.00, 5.15, 5.30, 5.45, 6.00, 6.15, 6.30, 6.45, 7.00, 7.15, 7.30, 7.45];
console.log(horariosInvalidos);
horariosInvalidos.push(8.00, 8.15, 8.30, 8.45);
console.log(horariosInvalidos);

function horariosOut(){
    if(horarioTurnos == horariosInvalidos){
        alert('Esa hora esta fuera de nuestro horario de atencion');
    }
}
let diaTurnos = prompt('Ingrese un dia');
let horarioTurnos = prompt('Ingrese en que horario');
let nombreTurnos = prompt('Ingrese su nombre');
let apellidoTurnos = prompt('Ingrese su apellido');

const turnoUsuario = new turnos(diaTurnos, horarioTurnos, nombreTurnos, apellidoTurnos);

console.log(turnoUsuario);




