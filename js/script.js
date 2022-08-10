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
  4.45, 5.0, 5.15, 5.3, 5.45, 6.0, 6.15, 6.3, 6.45, 7.0, 7.15, 7.3, 7.45,
];

console.log(horariosInvalidos);
horariosInvalidos.push(8.0, 8.15, 8.3, 8.45);
console.log(horariosInvalidos);

let diaInvalido = "Domingo";



/* let diaTurnos = prompt("Ingrese un dia"); */
/*  let horarioTurnos = prompt("Ingrese en que horario");

for (const horario of horariosInvalidos) {
  if (horarioTurnos == horario) {
    alert("Esa hora esta fuera de nuestro horario de atencion");
    horarioTurnos = prompt("Ingrese en que horario");
  }
}

let nombreTurnos = prompt("Ingrese su nombre");
let apellidoTurnos = prompt("Ingrese su apellido"); */

/* const turnoUsuario = new turnos(
  diaTurnos,
  horarioTurnos,
  nombreTurnos,
  apellidoTurnos);  */

/* alert("Listo! Tu turno quedo agendado, Gracias!"); */

let nuevoMensaje = document.createElement("h2");
nuevoMensaje.innerHTML = "<h2>Gracias por elegirnos!</h2>";
document.body.append(nuevoMensaje);

/* console.log(turnoUsuario); */

const btnDia = document.getElementById("formulario");
btnDia.addEventListener('input', () => {
  console.log(btnDia.value);
});

const btnHorario = document.getElementById("validationServer02");
btnHorario.addEventListener('input', () => {
  console.log(btnHorario.value);
});

const btnNombre = document.getElementById("validationServer03");
btnNombre.addEventListener('input', () => {
  console.log(btnNombre.value);
});

const btnApellido = document.getElementById("validationServer04");
btnApellido.addEventListener('input', () => {
  console.log(btnApellido.value);
});

const reserva = document.getElementById("formularioPrincipal");
reserva.addEventListener('submit', (e) => {
  e.preventDefault();
  if (btnDia.value == diaInvalido) {
    btnDia.value = "";
    alert("Dia no valido, ingrese otro dia.")
  }else if(btnHorario.value <= 8 || btnHorario.value >= 22){
    btnHorario.value = "";
    alert("Esa hora esta fuera de nuestro horario de atencion");
  }
});

/* function horarioFueraDeServicio(hora){
  for (const horario of horariosInvalidos) {
    if (hora == horario) 
      alert("Esa hora esta fuera de nuestro horario de atencion");
    }return true;
  } 
 */

  /* localStorage.setItem('nombreUsuario'); */

  let nombreUsuario = document.getElementById('validationServer03');

  let btnLogin = document.getElementById('btn-login');

  btnLogin.addEventListener('click', ()=>{
    localStorage.setItem('validationServer03', nombreUsuario.value);
  })

  localStorage.setItem('nombreUsuario');