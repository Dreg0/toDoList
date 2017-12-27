// svg files
let removeSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <rect class="noFill" width="22px" height="22px"/> <g> <g> <path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/> </g> <g> <g> <path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/> </g> <g> <path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/> </g> <g> <path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/> </g> </g> </g> </svg>'
let completeSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" xml:space="preserve"> <rect y="0" class="noFill" width="22" height="22"/> <g> <path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/> </g> </svg>'



// let data= {
//  todo =[],
//  completed = []
// };


// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('add-activity').addEventListener('click', function(){
    let value = document.getElementById('toDo_item').value;
    if (value) {
        // data.todo.push(value);
        addItemTodo (value);
        document.getElementById('toDo_item').value ='';
    };
});

//Pressing enter after adding text in form
document.getElementById('toDo_item').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    let value = document.getElementById('toDo_item').value;
    if (key === 13) { // 13 is enter
      // code for enter
      addItemTodo (value);
        document.getElementById('toDo_item').value ='';
    }
});

function removeItem(){
    let item = this.parentNode.parentNode;
    let parent =item.parentNode;
    parent.removeChild(item);
}

function completeItem(){
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let target = (id === 'todo') ? document.getElementById('completed-tasks'):document.getElementById('todo')
    parent.appendChild(item);
    target.insertBefore(item, target.childNodes[0])
}

//adding new items into to do list
function addItemTodo(text){
    let list = document.getElementById('todo');

    let item = document.createElement('li');
    item.classList.add('toDo-list-tasks-items');
    item.innerText = text;
    
    let divButtons= document.createElement('div');
    divButtons.classList.add('toDo-list-tasks-buttonS');

    let remove = document.createElement('button');
    remove.classList.add('toDo-list-tasks-button');
    remove.classList.add('remove-task');
    remove.innerHTML =removeSvg

    //add click event for removing task
    remove.addEventListener('click',removeItem);
    
    let add = document.createElement('button');
    add.classList.add('toDo-list-tasks-button');
    add.classList.add('complete-task');
    add.innerHTML = completeSvg
    
    //add click event for completing task
    add.addEventListener('click',completeItem);

    divButtons.appendChild(remove);
    divButtons.appendChild(add);
    item.appendChild(divButtons);
    list.insertBefore(item, list.childNodes[0]);
}





