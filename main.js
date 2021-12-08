function validation(){
    var valid = true;

    var formLabels = document.getElementsByTagName("label");
    var label = document.getElementById('label');
    var h4 = document.getElementById('h4');
    

    var firstName = document.regForm.firstName.value;
    

    if(firstName == ""){
        formLabels[0].innerHTML = "Titre: * [Required]";
        formLabels[0].style.color="red";
        valid = false;
    }
    else if(!isNaN(firstName)){
        formLabels[0].innerHTML = "Titre: * [Text Only]";
        formLabels[0].style.color="red";
        valid = false;
    }
    else if(firstName.length>=30){
        formLabels[0].innerHTML = "Titre: * [Max 30]";
        formLabels[0].style.color="red";
        valid = false;
    }
    else{
        formLabels[0].innerHTML = "Titre: * ";
        formLabels[0].style.color="black";
        valid = (valid) ? true : false ;
    }
    
    

    var lastName = document.regForm.lastName.value;
    if(lastName == ""){
        formLabels[1].innerHTML = "Auteur: * [Required]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else if(!isNaN(lastName)){
        formLabels[1].innerHTML = "Auteur: * [Text Only]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else{
        formLabels[1].innerHTML = "Auteur: * ";
        formLabels[1].style.color="black";
        valid = (valid) ? true : false ;
    }



    var prix = document.regForm.prix.value;
    if(prix == ""){
        formLabels[2].innerHTML = "Prix: * [Required]";
        formLabels[2].style.color="red";
        valid = false;
    }
    else if(isNaN(prix)){
        formLabels[2].innerHTML = "Prix: * [number Only]";
        formLabels[2].style.color="red";
        valid = false;
    }
    
    else{
        formLabels[2].innerHTML = "Prix: * ";
        formLabels[2].style.color="black";
        valid = (valid) ? true : false ;
    }



    var date = document.regForm.date.value;
    if(date == ""){
        formLabels[3].innerHTML = "Date De Publication: * [Required]";
        formLabels[3].style.color="red";
        valid = false;
    }
    
    else{
        formLabels[3].innerHTML = "Date De Publication: * ";
        formLabels[3].style.color="black";
        valid = (valid) ? true : false ;
    }
    var myLangue = document.getElementById('langue');
         
       if(myLangue.value == ""){
        label.innerHTML = "La Langue: *[Required] ";
        label.style.color="red";
        valid = false;
       }
       else{
           label.innerHTML  = "La langue *";
           label.style.color ="black";
           valid = (valid) ? true : false ;
       }


    var Roman1 = document.getElementById('Roman');
    var Essai2 = document.getElementById('Essai');
    var Bande3 = document.getElementById('Bande-Dessinée');


       if(!(Roman1.checked||Essai2.checked||Bande3.checked)){
        h4.innerHTML ="Le Type: *[Required]";
        h4.style.color ="red"
        valid = false ;
       }
       else{
        h4.innerHTML  = "Le Type *";
        h4.style.color ="black";
        valid = (valid) ? true : false ;
       }

        

    

    
    return valid;

}
    












































// var userInput = document.querySelector("[name='username']");
// var ageInput = document.querySelector("[name='age']");
// var googleNet = document.getElementById('google');
// var par = document.getElementById('para');
// var par3 =document.getElementById('para2')
// var userValid = false;
// var ageValid = false;
// var myArrFirstnam = [];
// var myArr = [];
// var myArrFirstnam = [];

// myArrFirstnam.puch(userInput)

// userInput



// document.forms[0].onsubmit = function(e){
    
//     if(userInput.value !=="" && userInput.value.length <=10){
//         userValid = true;
//     }
//     ifelse(ageInput.value !==""){
//         ageValid = true;
//     }
//     ifelse (userValid === false && ageValid === false){
//         e.preventDefault();

//     }
//     else{}
// };


// for
// document.links[0].onclick = function(event){
//     console.log(event);
//     event.preventDefault();
// };
// document.links[1].onclick = function(event){
//     console.log(event);
//     event.preventDefault();
// };



// JavaScript Array Map