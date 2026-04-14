export default class Todos {
    #pElem
    #ipElem
    #list = [];

    constructor(pElem, ipElem,list){
        this.#pElem = pElem;
        this.#ipElem = ipElem;
        this.#list = list;
    }
        viewTodos(){
        this.#pElem.innerHTML = "";
        this.#list.forEach((todo, index) => {
            const box = document.createElement("div");
            box.className = "todo-box";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "todo-checkbox";

            const span = document.createElement("span");
            span.className = "todo-text";
            span.textContent = todo;

            const btn = document.createElement("button");
            btn.className = "remove-btn";
            btn.textContent = "×";
            btn.dataset.idx = index;

            btn.addEventListener("click", () => {
                this.removeTodo(index);
            });

            box.append(checkbox, span, btn);
            this.#pElem.appendChild(box);
        });
    }
    viewInput(){
        this.#ipElem.value = "";
        this.#ipElem.focus();
    }
    removeTodo(index){
        this.#list.splice(index,1);
        this.viewTodos();
    }

    addTodo(todo){
        if(!todo || !todo.trim()) return;
        this.#list.push(todo.trim());
        this.viewTodos();
        this.viewInput();
    }
    
    add(){
        const val = this.#ipElem.value;
        this.addTodo(val);
    }
}