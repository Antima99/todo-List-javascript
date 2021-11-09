
//selectors

var todoInput = document.querySelector('.todo-input');
var btn = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');

console.log(todoInput);
//eventListeners

btn.addEventListener('click', addTodo );
todoList.addEventListener('click' , delCheckbtn);


// functions

function delCheckbtn(e) {
   const item = e.target;
   // todo delete
   if (item.classList[0] === "del-Btn"){
       const todo = item.parentElement;
       //animation 
       todo.classList.add("fall");
       todo.addEventListener('transitionend',function(){
        todo.remove();
        }
      );}
    //checkmark
      if (item.classList[0] === "done-Btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
  
   }

function addTodo(event){
//prevent from refreshing the page
event.preventDefault();
// Todo DIV
var todoDiv = document.createElement('div');
todoDiv.classList.add("todo");

var newTodo = document.createElement('li');
newTodo.innerText=todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);


//button (1)

var doneBtn =document.createElement('button');
doneBtn.innerHTML = '<i class="fas fa-check""></i>' 
doneBtn.classList.add("done-Btn");
todoDiv.appendChild(doneBtn);

//button (2)
var delBtn =document.createElement('button');
delBtn.innerHTML = '<i class="fas fa-trash""></i>' 
delBtn.classList.add('del-Btn');
todoDiv.appendChild(delBtn);

//append to list
todoList.appendChild(todoDiv);
//clear todo input value
  todoInput.value="";
}