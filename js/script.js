const mensaje = alert("Bienvendidas, los dias y horarios del salon de belleza son de Lunes a Sabado, desde las 9hs hasta 21hs.");
const mensaje2 = alert("Para pedir un turno ingrese dia, horario, nombre y apellido por favor.");

function turnos(dia, horario, nombre, apellido) {
  this.dia = dia;
  this.horario = horario;
  this.nombre = nombre;
  this.apellido = apellido;
}

const horariosInvalidos = [
  21.15, 21.3, 21.45, 22.0, 22.15, 22.3, 22.45, 23.0, 23.15, 23.3, 23.45, 1.0,
  1.15, 1.3, 1.45, 2.0, 2.15, 2.3, 2.45, 3.0, 3.15, 3.3, 3.45, 4.0, 4.15, 4.3,
  4.45, 5.0, 5.15, 5.3, 5.45, 6.0, 6.15, 6.3, 6.45, 7.0, 7.15, 7.3, 7.45,];

console.log(horariosInvalidos);
horariosInvalidos.push(8.0, 8.15, 8.3, 8.45);
console.log(horariosInvalidos);

let diaTurnos = prompt("Ingrese un dia");
let horarioTurnos = prompt("Ingrese en que horario");

for (const horario of horariosInvalidos) {
  if (horarioTurnos == horario) {
    alert("Esa hora esta fuera de nuestro horario de atencion");
    horarioTurnos = prompt("Ingrese en que horario");
  }
}

let nombreTurnos = prompt("Ingrese su nombre");
let apellidoTurnos = prompt("Ingrese su apellido");

const turnoUsuario = new turnos(
  diaTurnos,
  horarioTurnos,
  nombreTurnos,
  apellidoTurnos);

alert("Listo! Tu turno quedo agendado, Gracias!");

let nuevoMensaje = document.createElement('h2');
nuevoMensaje.innerHTML = '<h2>Gracias por elegirnos!</h2>';
document.body.append(nuevoMensaje);

console.log(turnoUsuario);
