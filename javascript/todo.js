'use strict';
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
function addTodo(event) {
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
}
