let todoItems = [];

function addItems() {
    const input = document.querySelector("#input");
    const inputValue = input.value;
    if (inputValue == ''){
        alert("Please input items");
    } else {
        todoItems.push(inputValue);
        
    }
    console.log(todoItems);
    updateList();
}   




function updateList(){
    const list = document.querySelector("#list");
    list.innerHTML = '';

    input.value = '';
    for (let i = 0; i < todoItems.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<span>${todoItems[i]}</span><button onclick ="removeItem(${i})">delete</button>`
        list.appendChild(div);
    }
}

function removeItem(index){
    todoItems.splice(index, 1);
    const list = document.querySelector("#list");
    list.innerHTML = '';

    input.value = '';
    for (let i = 0; i < todoItems.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<span>${todoItems[i]}</span><button onclick ="removeItem(${i})">delete</button>`
        list.appendChild(div);
    }
}

function deleteAllItems(){
    const list = document.querySelector("#list");
    list.innerHTML = '';
    todoItems = [];
}

function sort(){
    todoItems.sort();
    const list = document.querySelector("#list");
    list.innerHTML = '';

    input.value = '';
    for (let i = 0; i < todoItems.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<span>${todoItems[i]}</span><button onclick ="removeItem()" id="index${i}">delete</button>`
        list.appendChild(div);
    }
}