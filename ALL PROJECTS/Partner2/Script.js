function customizePage() {
    let userName = document.getElementById('userName').value;
    let userMessage = document.getElementById('userMessage').value;
    let backgroundColor = document.getElementById('backgroundColor').value;

    document.querySelector('h1').textContent = 'Hello ' + userName + '!';
    document.querySelector('p').textContent = userMessage;
    document.body.style.backgroundColor = backgroundColor;
}

function addTodoItem() {
    const todoItem = document.getElementById('todoItem').value;
    if (todoItem) {
        const listItem = document.createElement('li');
        listItem.textContent = todoItem;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.style.marginLeft = '50px';
        removeButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(removeButton);
        document.getElementById('todoList').appendChild(listItem);
        document.getElementById('todoItem').value = '';
    }
}