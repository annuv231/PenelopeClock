'use strict';
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
todoList.addEventListener('click', deleteComplete);
const filterOptions = document.querySelector('.filterTodos');
todoButton.addEventListener('click', addTodo => {
  //creating parent div element
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //creating list element
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  //adding area input value here to list
  todoItem.innerText = todoInput.value;

  //creating todoCheck button
  const todoCheck = document.createElement('button');
  todoCheck.classList.add('todo-check');
  todoCheck.innerHTML = '<i class="fa-solid fa-check"></i>';

  //creating todo Delete button
  const todoDelete = document.createElement('button');
  todoDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
  todoDelete.classList.add('todo-delete');

  //making them child-parent
  todoDiv.appendChild(todoItem);
  todoDiv.appendChild(todoCheck);
  todoDiv.appendChild(todoDelete);
  todoList.appendChild(todoDiv);

  //clearing input value;
  todoInput.value = '';
});
// function addTodo(event) {}

//adding delete and complete functinality

function deleteComplete(event) {
  //   console.log(event.target);
  const items = event.target;
  //delete feature
  if (items.classList[0] == 'todo-delete') {
    const itemParents = items.parentElement;
    itemParents.classList.add('falls');
    itemParents.addEventListener('transitionend', deleteElement => {
      itemParents.remove();
    });
    // itemParents.remove();
  }
  //adding completed feature
  if (items.classList[0] == 'todo-check') {
    const todo = items.parentElement;
    todo.classList.toggle('completed');
  }
}

//filter todos
filterOptions.addEventListener('click', filterTodos);
function filterTodos(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}
