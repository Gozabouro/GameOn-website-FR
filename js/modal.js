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
const form = document.getElementById("form");

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
  if (prenom == null|| prenom.value.length < 2 ||!/^[A-Za-z\-\']+$/.test(prenom.value)){
    prenomInvalide.textContent = "Il vous faut renseigner un prénom valide";
    return false;
  } else{
    prenomInvalide.textContent = "";
    return true;
  }
}

//validation du nom

function validationNom(){
  if (nom == null || nom.value.length < 2 || !/^[A-Za-z\-\']+$/.test(nom.value)){
    nomInvalide.textContent = "Vous devez renseigner un nom valide";
    return false;
  }else{
    nomInvalide.textContent = "";
    return true;
  }
}

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

//validation de la date de naissance 
function validationDOB(){
  
  const DOBValue = DOB.value;
  const DOBDate = new Date(DOBValue);
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
//fonction pour la vérification générale de tous les champs 

function validationGenerale(e){
  e.preventDefault();
  //check validité de tous les champs du formulaire et de facto la validation du formulaire
  const  prenomValide = validationPrenom();
  const nomValide = validationNom(); 
  const emailValide = validationEmail();
  const DOBValide = validationDOB();
  const tournoisValides = validationTournois();
  const CGUValide = validationCGU();
  const formulaireValide = prenomValide && nomValide && emailValide && DOBValide && tournoisValides && CGUValide;
  console.log(formulaireValide);
  //affichage du message de validation (remplacer le contenu du formulaire par un message de validation)
  if (formulaireValide){
    form.style.display = "none";
    let modalSuccess = document.getElementById("validation-success");
    modalSuccess.style.display = "flex";
    return true;    
  } else {
    return false;

  }
}
//Ecouter l'évènement click sur le bouton submit, pour valider ou non le formulaire
const validation = document.querySelector(".btn-submit");
validation.addEventListener("click", validationGenerale);
// remet le formulaire à zéro après actualisation de la page
form.reset();