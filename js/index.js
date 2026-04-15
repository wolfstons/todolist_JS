import Todos from "./Todos.js";

const pElem = document.querySelector(".todos");
const ipElem = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");


const todos = new Todos(pElem,ipElem,[]);

addBtn.addEventListener("click",()=>{
    todos.add();
});
