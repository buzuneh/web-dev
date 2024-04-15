const todoList=[{}];
renderTodol();
function renderTodol(){
let todoListHTML='';
todoList.forEach((todoObject,index) => {
    const {name, duedate}=todoObject;
    const html = `
    <div class="ddt"
    <div>${index}. | ${name}</div>
    <div> ${duedate}</div> 
    </div>
        <button 
        class="js-del js-delet-button">Delete</button>`;

    todoListHTML += html;

});    
    document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;
    document.querySelectorAll('.js-delet-button').forEach((deleteButton, index) =>{
        deleteButton.addEventListener('click', ()=>{
            todoList.splice(index,1);
            renderTodol();

        });

    });
    }
document.querySelector('.js-add-todo-button').addEventListener('click',
()=> {

    addTodo();
})
function addTodo(){
const inputEl = document.querySelector('.js-name-input');
const name= inputEl.value;
const dateEl=document.querySelector('.js-duedate');
       const duedate=dateEl.value;
todoList.push({
              //name:name, 
             // date:date
            name, duedate
            });
inputEl.value='';
renderTodol();
}
    