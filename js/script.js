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
});

/* localStorage.setItem('nombreUsuario'); */

/*  let nombreUsuario = document.getElementById('validationServer03');

  let btnLogin = document.getElementById('btn-login');

  btnLogin.addEventListener('click', ()=>{
    localStorage.setItem('validationServer03', nombreUsuario.value);
  })

  localStorage.setItem('nombreUsuario');
 */

  function reset(){
    btnDia.value = "";
    btnApellido.value = "";
    btnHorario.value = "";
    btnNombre.value = "";
  }

  let URLDireccion ='https://emailvalidation.abstractapi.com/v1/?api_key=22e90ff2ee88435390dc584c82e2ec30&email=lucasromano96@gmail.com';
  
  console.log(fetch('https://emailvalidation.abstractapi.com/v1/?api_key=22e90ff2ee88435390dc584c82e2ec30&email=lucasromano96@gmail.com'));

  fetch(URLDireccion)