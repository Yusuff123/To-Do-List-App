

const input =  document.querySelector("#add");
const btn =  document.querySelector("#btn");
const list =  document.querySelector("#list");

// Event Listeners

btn.addEventListener('click', btnClick);
list.addEventListener('click', listClick);

// Functions

function btnClick(){
    var txt = input.value;

    if(txt===""){
        alert("You must write something");
    }
    else{
        li=document.createElement("li");
        li.classList.add("element-group-list-item");
        li.innerHTML=txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value="";
    }
}

function listClick(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
}
