function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM Element - Formulaire
const prenom = document.getElementById("first");
const prenomInvalide = document.getElementById("prenomInvalide");
const nom = document.getElementById("last"); 
const nomInvalide = document.getElementById("nomInvalide");
const email = document.getElementById("email");
const emailInvalide = document.getElementById("emailInvalide"); 
const DOB = document.getElementById("birthdate");
const DOBInvalide = document.getElementById("DateInvalide");
const tournois = document.getElementById("quantity");
const tournoisInvalide = document.getElementById("tournoisInvalide");
const CGU = document.getElementById("checkbox1");
const CGUInvalide = document.getElementById("conditionsInvalide");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event 
const closeButton = document.querySelector(".close"); 
const closeButtonSuccess = document.querySelector(".btn-close");
closeButton.addEventListener('click', closeModal);
closeButtonSuccess.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form 
function closeModal() {                     
  modalbg.style.display = 'none';
}

// validation du prénom 
function validationPrenom(){
  if (prenom == null|| prenom.value.length < 2){
    prenomInvalide.textContent = "Il vous faut renseigner un prénom valide";
    return true;
  } else{
    prenomInvalide.textContent = "";
    return false;
  }
}

let prenomValide = validationPrenom();

//validation du nom

function validationNom(){
  if (nom == null || nom.value.length < 2){
    nomInvalide.textContent = "Vous devez renseigner un nom valide";
    return false;
  }else{
    nomInvalide.textContent = "";
    return true;
  }
}
let nomValide = validationNom();

//validation de l'email
function validationEmail(){
  if (email == null || !/^[\w.-]+@([\w-]+\.)+[\w-]{2,10}$/.test(email.value)){
    emailInvalide.textContent = "Il vous faut renseigner une adresse email valide";
    return false;
  }else{
    emailInvalide.textContent = "";
    return true;
  }
}
let emailValide = validationEmail();

//validation de la date de naissance 
function validationDOB(){
  
  let DOBValue = DOB.value;
  let DOBDate = new Date(DOBValue);
  let DOBYear = DOBDate.getFullYear();
    
  if(DOBValue === "" || !/(19\d\d|20[0-3])(-\d\d){2}/ || DOBYear < 1920 || DOBYear >= 2021){
    DOBInvalide.textContent = "Il vous faut renseigner une date de naissance valide";
    return false;
  } else{
    DOBInvalide.textContent = "";
    DOB.className = 'text-control';
    return true;
  }
}
console.log(DOB == "empty string")

let DOBValide = validationDOB();

//validation des tournois

function validationTournois(){
  if (tournois.value === "" ){
    tournoisInvalide.textContent = "Il vous faut renseigner un nombre de tournois";
    return false;
  }else{
    tournoisInvalide.textContent = "";
    return true;
  } 
}
let tournoisValides = validationTournois();



//validation des CGU 
function validationCGU () {
  if (CGU.checked){
    CGUInvalide.textContent = "";
    return true;
  }else{
    CGUInvalide.textContent = "Il vous faut accepter les conditions d'utilisation";
    return false;
  } 
}
let CGUValide = validationCGU();