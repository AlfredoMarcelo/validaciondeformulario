const formulario = document.querySelector("#formulario");
const card = document.querySelector("#card");
const cvc = document.querySelector("#cvc");
const amount = document.querySelector("#amount");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const postalCode = document.querySelector("#postalCode");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  let form = e.target;
  console.log(form.tarjeta.value)

  const data = new FormData(formulario);



  if (!data.get("tarjeta").trim()) {
    console.log("sin número de tarjeta ");

    invalido(card);

    return;
  }  else {
    valido(card);
  }

  if (!data.get("numero").trim()) {
    console.log("sin número de cvc");
    invalido(cvc);
    return;
  } else {
    valido(cvc);
  }

  if (!data.get("monto").trim()) {
    console.log("sin monto ingresado ");
    invalido(amount);
    return;
  } else {
    valido(amount);
  }

  if (!data.get("nombre").trim()) {
    console.log("sin nombre");
    invalido(firstName);
    return;
  } else {
    valido(firstName);
  }

  if (!data.get("apellido").trim()) {
    console.log("sin apellido");
    invalido(lastName);
    return;
  } else {
    valido(lastName);
  }

  if (!data.get("ciudad").trim()) {
    console.log("sin ciudad ");
    invalido(city);
    return;
  } else {
    valido(city);
  }

  if (!data.get("pais").trim()) {
    console.log("sin país");
    invalido(state);
    return;
  } else {
    valido(state);
  }

  if (!data.get("codigoPostal").trim()) {
    console.log("sin número postal");
    invalido(postalCode);
    return;
  } else {
    valido(postalCode);
  }

  console.log("campo completado");
});

const valido = (valid) => {
  valid.classList.remove("is-invalid");
  valid.classList.add("is-valid");
};

const invalido = (invalid) => {
  invalid.classList.add("is-invalid");
  invalid.classList.remove("is-valid");
};

const tarjetaInvalida = (tarjetaInvalida) => {
  tarjetaInvalida.classList.add("is-invalid");
  tarjetaInvalida.classList.remove("is-valid");
};

/* const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('procesandodatos....')
    validarDatos();
})

const validarDatos = ()=>{
    const card = document.querySelector('#card');
    const cvc = document.querySelector('#cvc');
    const amount = document.querySelector('#amount');
    const firstName = document.querySelector('#firstName');

    if(card.value == "alfredo"){
        console.log('eres un papi ctm')
    } else {
        console.log('no eres un papi')
    }
} */
