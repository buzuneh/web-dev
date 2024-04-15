const todoList=[];
renderTodol();
function renderTodol(){
let todoListHTML='';
for(let i=0; i < todoList.length; i++){
        const todo = todoList[i];
        const html = `
        <p>
        ${todo} 
        <button onClick="
        todoList.splice(${i},1);
        renderTodol();
        "
        class="js-del">Delete</button>
        </p>`;

        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;
    }
function addTodo(){
const inputEl = document.querySelector('.js-name-input');
const name = inputEl.value;
todoList.push(name);
inputEl.value='';
renderTodol();
}