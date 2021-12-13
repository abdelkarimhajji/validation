    

var selectedRow = null;
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
    else if(lastName.length>=30){
        formLabels[1].innerHTML = "Titre: * [Max 30]";
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


       if(Roman1.checked||Essai2.checked||Bande3.checked){
        h4.innerHTML ="Le Type: *";
        h4.style.color ="black"
        valid = false ;
       }
       else if(!(getSelectedByValue)){
        h4.innerHTML ="Le Type: *";
        h4.style.color ="red"
       }
       else{
        h4.innerHTML  = "Le Type *";
        h4.style.color ="black";
        valid = (valid) ? true : false ;
       }
       var getSelectedByValue = document.querySelector(
        'input[name="Roman"]:checked');

       var myTable = document.getElementById("table");
       var row = myTable.insertRow(-1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       var cell7 = row.insertCell(6);
       

       cell1.innerHTML =firstName;
       cell2.innerHTML =lastName;
       cell3.innerHTML =prix;
       cell4.innerHTML =date;
       cell5.innerHTML =myLangue.value;
       cell6.innerHTML =getSelectedByValue.value;
       cell7.innerHTML = '<input type="submit" value="Edit" onclick="editRow(this)" id="btn">' + '<input type="submit" onclick="deleteRow(this)"  value="Delete" id="btn">';
      

    return valid;

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}
function editRow(td) {
    var  type = document.getElementsByClassName("radio");
   var selectedRow = td.parentElement.parentElement.rowIndex;
    var row = table.rows[selectedRow];
    if(td.value == "Edit"){
    document.getElementById("th1").value = row.cells[0].innerHTML;
    document.getElementById("th2").value = row.cells[1].innerHTML;
    document.getElementById("th3").value = row.cells[2].innerHTML;
    document.getElementById("th4").value = row.cells[3].innerHTML;
    document.getElementById("langue").value = row.cells[4].innerHTML;

    for(var i=0;i<type.length;i++){
        if(row.cells[5].innerHTML==type[i].value){
            type[i].checked = true;
        }
    }
    td.value="Save"
    document.getElementById("submit").setAttribute("disabled","true");
}
else{
            row.cells[0].innerHTML = document.getElementById("th1").value;
            row.cells[1].innerHTML = document.getElementById("th2").value;
            row.cells[2].innerHTML =  document.getElementById("th3").value;
            row.cells[3].innerHTML = document.getElementById("th4").value;
            row.cells[4].innerHTML = document.getElementById("langue").value;
            for(var i=0;i<type.length;i++){
                if(type[i].checked){
                    row.cells[5].innerHTML = type[i].value;
                }
            }
            td.value = "Edit";
            document.getElementById("submit").removeAttribute("disabled")
}
    
    }




    

    
    

    function edit_row(r){
        var i = r.parentNode.parentNode.rowIndex;
        var row = table.rows[i];
        if(r.value == "Edit"){
            title.value = row.cells[0].innerHTML;
            author.value = row.cells[1].innerHTML;
            price.value = row.cells[2].innerHTML;
            pub.value = row.cells[3].innerHTML;
            lang.value = row.cells[4].innerHTML;

            // Type
            for(var i=0;i<type.length;i++){
                if(row.cells[5].innerHTML==type[i].value){
                    type[i].checked = true;
                }
            }
            r.value="Save"
            document.getElementById("submit_btn").setAttribute("disabled","true");
        }
        else{
            row.cells[0].innerHTML = title.value;
            row.cells[1].innerHTML = author.value;
            row.cells[2].innerHTML = price.value;
            row.cells[3].innerHTML = pub.value;
            row.cells[4].innerHTML = lang.options[lang.selectedIndex].value;
            for(var i=0;i<type.length;i++){
                if(type[i].checked){
                    row.cells[5] = type[i].value;
                }
            }
            r.value = "Edit";
            document.getElementById("submit_btn").removeAttribute("disabled")
        }
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



/*JavaScript Array Map*/