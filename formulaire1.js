let form = document.getElementById("form");
let erreur = document.getElementById("erreur");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let age = document.getElementById("age");
let celibataire = document.getElementById("celibataire");
let marie = document.getElementById("marie");
let couple = document.getElementById("couple");
let gentil = document.getElementById("gentil");
let jovial = document.getElementById("jovial");
let ouvert = document.getElementById("ouvert");
let list = document.getElementById("list");


form.addEventListener("submit",(e)=>{ 

    let sms = []

    sms.push("<p>" +prenom.value + "</p>" + "<p>" + nom.value +
     "</p>" + "<p>"+ age.value + "</p>" + "<p>" + list.value +"</p>" )


     if(celibataire.checked === true){
         sms.push( "<p>"+ "Célibataire" +"</p>" )
     }

     if(couple.checked === true){
        sms.push( "<p>"+ "Couple" +"</p>")
    }

    if(marie.checked === true){
        sms.push( "<p>"+ "Marié(e)" +"</p>")
    }

    if(ouvert.checked === true){
        sms.push("<p>"+ "Ouvert" +"</p>")
    }

    if(jovial.checked === true){
       sms.push("<p>"+ "Jovial" +"</p>")
   }

   if(gentil.checked === true){
       sms.push("<p>"+ "gentil(le)" +"</p>")
   }

    if (prenom.value === "" && nom.value === "") {
        alert("une de ses cages est vide")
     }

    e.preventDefault();
    erreur.innerHTML = sms.join(" ")

})

