var todoList = document.getElementById("todolist");

function addItems(){
 var todo_inp = document.getElementById("todo-inp");

 // create li tag
 var li = document.createElement("LI");
 var liText = document.createTextNode(todo_inp.value);
 li.appendChild(liText)
 

// create delete button
var btn3 = document.createElement("BUTTON");
var btnText = document.createTextNode("Delete");
btn3.appendChild(btnText)
btn3.setAttribute("onclick", "delitem(this)")

// create edit button
var btn4 = document.createElement("BUTTON");
var btn4Text = document.createTextNode(" Edit ");
btn4.appendChild(btn4Text);
btn4.setAttribute("onclick","edititem(this)")

li.appendChild(btn4);
li.appendChild(btn3)
li.style.fontSize = "30px";
btn4.style.padding = "10px"
btn3.style.padding = "10px"
btn3.style.margin = "15px"
btn4.style.margin = "15px";
btn3.style.border ="none"
btn4.style.border ="none"
todoList.appendChild(li)
todo_inp.value = "";
 console.log(li)
}

function delitem(e){
 var editvalue = e.parentNode.remove();
}

function edititem(e){
    var a = e.parentNode.firstChild.nodeValue;
    var b = prompt("enter new value", a);
    e.parentNode.firstChild.nodeValue = b

    console.log(e.parentNode.firstChild.nodeValue);
}

function deleteAll(){
 todoList.innerHTML = "";
}


