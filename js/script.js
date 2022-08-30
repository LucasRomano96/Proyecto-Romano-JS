const mensaje = Swal.fire(
  "Bienvenidas, solicite un turno de lunes a sabados dentro de las 9hs y 20hs",
  "You clicked the button!",
  "success"
);
const mensaje2 = Swal.fire(
  "Para pedir un turno ingrese dia, horario, nombre, apellido y email por favor",
  "You clicked the button!",
  "success"
);

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


let nuevoMensaje = document.createElement("h2");
nuevoMensaje.innerHTML = "<h2>Gracias por elegirnos!</h2>";
document.body.append(nuevoMensaje);


const btnDia = document.getElementById("formulario");
btnDia.addEventListener("input", () => {
  console.log(btnDia.value);
});

const btnHorario = document.getElementById("validationServer02");
btnHorario.addEventListener("input", () => {
  console.log(btnHorario.value);
});

const btnNombre = document.getElementById("validationServer03");
btnNombre.addEventListener("input", () => {
  console.log(btnNombre.value);
});

const btnApellido = document.getElementById("validationServer04");
btnApellido.addEventListener("input", () => {
  console.log(btnApellido.value);
});

const btnEmail = document.getElementById("validationServer05");
btnEmail.addEventListener("input", () =>{
  console.log(btnEmail.value);
})

class Usuario{
  constructor(apellido, email, horario, nombre, dia){
    this.apellido = apellido;
    this.email = email;
    this.horario = horario;
    this.nombre = nombre;
    this.dia = dia;
  }
}
/* let usuario = new Usuario(btnApellido.value, btnEmail.value, btnHorario.value, btnNombre.value, btnDia.value);
 */
/* function formularioData() {
  if (btnApellido.value != "") {
    usuario.push(btnApellido.value)
    console.log(usuario[btnApellido].value);
  }
}
let usuario = []; */
/* usuario.push(btnApellido.value, btnEmail.value, btnHorario.value, btnNombre.value, btnDia.value); */

const reserva = document.getElementById("formularioPrincipal");
reserva.addEventListener("submit", (e) => {
  e.preventDefault();
  if (btnDia.value == diaInvalido) {
    btnDia.value = "";
    alert("Dia no valido, ingrese otro dia.");
  } else if (btnHorario.value <= 8 || btnHorario.value >= 22) {
    btnHorario.value = "";
    alert("Esa hora esta fuera de nuestro horario de atencion");
  } else{
    Swal.fire(`Gracias! Su turno ha sido reservado para el dia ${btnDia.value}, a las ${btnHorario.value}`);
  }
  verificarEmail(btnEmail.value);
  reset();
});


  function reset(){
    btnDia.value = "";
    btnApellido.value = "";
    btnHorario.value = "";
    btnNombre.value = "";
    btnEmail.value = "";
  }

async function verificarEmail(emailSolicitante){
  let API =  `https://disify.com/api/email/${emailSolicitante}`;
  const resp = await fetch(API);
  const dataJason = await resp.json();
  console.log(dataJason);
};


 

