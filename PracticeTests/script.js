//Test Maker

let x = 0;

function AddAnotherChoose(id, qAt, btnID){
    var questionA = document.getElementById(id);
    
    var newQAT = qAt+1;
    var awnser = document.createElement("input");
    awnser.setAttribute("name", "awnser"+id+newQAT+"[]");

    var btn = document.getElementById(btnID);
    btn.setAttribute("onclick", "AddAnotherChoose("+id+", "+newQAT+", '"+btnID+"')");

    var amount = document.getElementsByName("qAmount"+id)[0];
    amount.setAttribute("value", ""+newQAT+"");

    questionA.append(awnser);
}

function AddMultipeChoise(){
    var card = document.createElement("div"); 
    card.setAttribute("class", "card");
    /*card.setAttribute("style", "width: 18rem;");*/

    var cb = document.createElement("div");
    cb.setAttribute("class", "card-body");
    cb.setAttribute("id", x);

    var title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerHTML = "Multiple Choise Question: ";

    var titleInput = document.createElement("input");
    titleInput.setAttribute("name", "question"+x);

    var awnser = document.createElement("input");
    awnser.setAttribute("name", "awnser"+x+"0[]");
    var awnser2 = document.createElement("input");
    awnser2.setAttribute("name", "awnser"+x+"1[]");

    var correctTitle = document.createElement("h6");
    correctTitle.innerHTML = "Correct Anwser: ";

    var correct = document.createElement("input");
    correct.setAttribute("name", "correct"+x);
    
    var target = document.createElement("div");
    target.setAttribute("id", "btnStyle");
    
    var createAnother = document.createElement("a");
    createAnother.setAttribute("onclick", "AddAnotherChoose("+x+", 1, 'btn"+x+"')");
    createAnother.setAttribute("id", 'btn'+x);
    createAnother.innerHTML = "Add Another Question"
    
    target.append(createAnother);
    
    var type = document.createElement("input");
    type.setAttribute("type", "hidden");
    type.setAttribute("name", "qType"+x);
    type.setAttribute("value", "Multi");
    cb.append(type);

    var amount = document.createElement("input");
    amount.setAttribute("type", "hidden");
    amount.setAttribute("name", "qAmount"+x);
    amount.setAttribute("value", "1");
    cb.append(amount);

    cb.append(title);
    cb.append(titleInput);
    cb.append(correctTitle);
    cb.append(correct);
    cb.append(target);
    cb.append(awnser);
    cb.append(awnser2);
    

    card.append(cb);

    x += 1;
    document.getElementById("submit").value = x;

    var area = document.getElementById("testMaker");
    area.append(card);
}

function AddOpenEnded(){
    var card = document.createElement("div"); 
    card.setAttribute("class", "card");
    /*card.setAttribute("style", "width: 18rem;");*/

    var cb = document.createElement("div");
    cb.setAttribute("class", "card-body");
    cb.setAttribute("id", x);

    var title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerHTML = "Open Ended Question: ";

    var titleInput = document.createElement("input");
    titleInput.setAttribute("name", "question"+x);

    var note = document.createElement("h6");
    note.innerHTML = "You have to compare what you put here yourself after you take the test... but to display along side enter below:"

    var tview = document.createElement("textarea");
    tview.setAttribute("name", "desired"+x)

    var type = document.createElement("input");
    type.setAttribute("type", "hidden");
    type.setAttribute("name", "qType"+x);
    type.setAttribute("value", "Open");
    cb.append(type);

    cb.append(title);
    cb.append(titleInput);
    cb.append(note);
    cb.append(tview)

    card.append(cb);

    x += 1;
    document.getElementById("submit").value = x;
    
    var area = document.getElementById("testMaker");
    area.append(card);
}




//Karas Assingment 
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




// Skylers Help
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
