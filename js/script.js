let usuario;

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

const reserva = document.getElementById("formularioPrincipal");
reserva.addEventListener("submit", (e) => {
  e.preventDefault();
  usuario = new Usuario(btnApellido.value, btnEmail.value, btnHorario.value, btnNombre.value, btnDia.value);
  console.log(usuario);
  verificarEmail(btnEmail.value);  
  if (cambiarEmail(btnEmail.value) == false) {
    btnEmail.value = "";
  }
  let day = new Date(elDate.value ).getUTCDay();
  elDate.setCustomValidity('');
    if( day == 0 ){
       elDate.setCustomValidity('Domingos no disponibles, por favor seleccione otro día');
    } else {
       elDate.setCustomValidity('');
    }
    if(!elForm.checkValidity()) {elSubmit.click()};
  setTimeout(() => {
    if (btnEmail.value !="") {
      Swal.fire(`Gracias! Su turno ha sido reservado para el dia ${btnDia.value}, a las ${btnHorario.value}`);
      reset();
    }
  },1700)
  localStorage.setItem('nombreUsuario', nombreUsuario.value);
  localStorage.setItem('apellidoUsuario',apellidoUsuario.value);
  localStorage.setItem('diaUsuario',diaUsuario.value);
  localStorage.setItem('horarioUsuario',horarioUsuario.value);
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

function cambiarEmail(emailSolicitante) {
  fetch(`https://disify.com/api/email/${emailSolicitante}`)
  .then((response) => response.json())
  .then ((data) => {
    if (data.dns == false) {
      btnEmail.value = "";
      alert("Ha introducido un email incorrecto");
      return false;
    }
  })
};

let nombreUsuario = document.getElementById("validationServer03");
let apellidoUsuario = document.getElementById("validationServer04");
let diaUsuario = document.getElementById("formulario");
let horarioUsuario = document.getElementById("validationServer02");

let elDate = document.getElementById('formulario');
let elForm = document.getElementById('formularioPrincipal');
let elSubmit = document.getElementById('btn-login');

/* function sinDomingos(){
  let day = new Date(elDate.value ).getUTCDay();
  elDate.setCustomValidity('');
    if( day == 0 ){
       elDate.setCustomValidity('Domingos no disponibles, por favor seleccione otro día');
    } else {
       elDate.setCustomValidity('');
    }
    if(!elForm.checkValidity()) {elSubmit.click()};
} */
function obtenerfechafinf1(){
  sinDomingos();
}

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



 

