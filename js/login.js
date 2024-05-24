let formEmail = document.getElementById("email");
let btnFormLogin = document.getElementById("lg-btn");

formEmail.addEventListener("change", ()=> {
  if (!validarEmail(formEmail.value)){
    formEmail.classList.remove("formValido");
    formEmail.classList.add("formInvalido");
    btnFormLogin.disabled = true;
  } else{
    formEmail.classList.remove("formInvalido");
    formEmail.classList.add("formValido");
    btnFormLogin.disabled = false;
  }
});

function validarEmail (email){
    for (let i = 0; i< email.length; i++ ){
        if (email[i] === '@'){
            return true;
        }
    }
    return false;
}