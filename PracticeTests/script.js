function addFunction(){
    var ID = document.createElement("input"); 
        ID.setAttribute("name", "array[]"); 
        //ID.setAttribute("placeholder", "E-Mail ID"); 

    var form = document.getElementById("games");
    form.append(ID);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function randomGame(){
    var input = document.getElementsByName('array[]'); 
    var num = getRandomInt(input.length);
    
    document.getElementById("game").innerHTML = input[num].value;
}










function advanceSsn(){
    var ssnFields = document.getElementsByClassName("ssn");
    var currentField = document.activeElement;
    if(currentField.value.length === currentField.maxLength){
        if(currentField === ssnFields[0]){
            ssnFields[1].focus();
        }
        if(currentField === ssnFields[1]){
            ssnFields[2].focus();
        }
        if(currentField === ssnFields[2]){
            document.getElementById("submitBtn").focus();
        }
    }
}

function createEventListeners(){
    alert("called");
    var form = document.getElementsByTagName("form")[0];
    // if(form.addEventListener){
    //     form.addEventListener("submit", validateForm, false);
    // }else if(form.attachEvent){
    //     form.attachEvent("onsubmit", validateForm);
    // }
    var ssnFields = document.getElementsByClassName("ssn");
    for(var i = 0; i < ssnFields.length; i++){
        if(ssnFields[i].addEventListener){
            ssnFields[i].addEventListener("input", advanceSsn, false);
        }else if(ssnFields[i].attachEvent){
            ssnFields[i].attachEvent("oninput", advanceSsn);
        }
    }
}