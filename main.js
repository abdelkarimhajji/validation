function validation(){
    var valid = true;

    var formLabels = document.getElementsByTagName("label");

    var firstName = document.regForm.firstName.value;
    

    if(firstName == ""){
        formLabels[0].innerHTML = "First Name: * [Required]";
        formLabels[0].style.color="red";
        valid = false;
    }
    

    
    else if(!isNaN(firstName)){
        formLabels[0].innerHTML = "First Name: * [Text Only]";
        formLabels[0].style.color="red";
        valid = false;
    }
    

    else{
        formLabels[0].innerHTML = "First Name: * ";
        formLabels[0].style.color="black";
        valid = (valid) ? true : false ;
    }
    
    

    var lastName = document.regForm.lastName.value;
    if(lastName == ""){
        formLabels[1].innerHTML = "Last Name: * [Required]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else if(!isNaN(lastName)){
        formLabels[1].innerHTML = "Last Name: * [Text Only]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else{
        formLabels[1].innerHTML = "Last Name: * ";
        formLabels[1].style.color="black";
        valid = (valid) ? true : false ;
    }



    var prix = document.regForm.prix.value;
    if(prix == ""){
        formLabels[2].innerHTML = "Prix: * [Required]";
        formLabels[2].style.color="red";
        valid = false;
    }
    else if(prix.value.length <=10){
        formLabels[2].innerHTML = "Last Name: * [Text Only]";
        formLabels[2].style.color="red";
        valid = false;
    }
    else{
        formLabels[2].innerHTML = "Prix: * ";
        formLabels[2].style.color="black";
        valid = (valid) ? true : false ;
    }



    var date = document.regForm.date.value;
    if(prix == ""){
        formLabels[2].innerHTML = "Prix: * [Required]";
        formLabels[2].style.color="red";
        valid = false;
    }
    else if(!isNaN(date)){
        formLabels[1].innerHTML = "Last Name: * [Text Only]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else{
        formLabels[2].innerHTML = "Prix: * ";
        formLabels[2].style.color="black";
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