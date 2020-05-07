const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


//day 1

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");

console.log(loginInput);

let login = localStorage.getItem('gloDelivery');

function toggleModalAuth() {
  modalAuth.classList.toggle("is-open");
}

buttonAuth.addEventListener ('click', toggleModalAuth);
closeAuth.addEventListener ('click', toggleModalAuth);


function autorised() {
  
  function logOut() {
    login = '';
    localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    loginInput.classList.remove("label-auth-error");
    checkAuth();
  }

  console.log("авторизован");  


  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut);
}

function notAutorised() {
  console.log("Не авторизован");  

  function logIn(event) {
    
    event.preventDefault();
    login = loginInput.value;
    
    if (login) { //если логин не пустой
      localStorage.setItem('gloDelivery', login);

      toggleModalAuth();
      buttonAuth.removeEventListener ('click', toggleModalAuth);
      closeAuth.removeEventListener ('click', toggleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else {
        alert("Вы не ввели логин. Введите логин и повторите попытку.");
        loginInput.classList.add("label-auth-error");
      }
  
  }


  buttonAuth.addEventListener ('click', toggleModalAuth);
  closeAuth.addEventListener ('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}


function checkAuth(){
  if (login) {
    autorised();
  } else {
    notAutorised();
  }
}

checkAuth();
