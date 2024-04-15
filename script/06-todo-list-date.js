const todoList=[{}];
renderTodol();
function renderTodol(){
let todoListHTML='';
for(let i=1; i < todoList.length; i++){
        const todoObject= todoList[i];
        //const name=todoObject.name;
        //const duedate=todoObject.duedate;
        const {name,duedate}=todoObject;
        const html = `
        <div class="ddt"
        <div>${i}. | ${name}</div>
        <div> ${duedate}</div> 
        </div>
            <button onClick="
            todoList.splice(${i},1);
            renderTodol();
            "
            class="js-del">Delete</button>`;

        todoListHTML += html;
    }
    
    document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;
    }

function addTodo(){
const inputEl = document.querySelector('.js-name-input');
const name = inputEl.value;
const dateEl = document.querySelector('.js-duedate');
       const duedate=dateEl.value;
todoList.push({
              //name:name, 
             // date:date
            name, duedate
            });
inputEl.value='';
renderTodol();
}
    