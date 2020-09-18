var taskInput=document.querySelector("#task");
var form=document.querySelector("#task-form");
var ul=document.querySelector(".collection");
var clearTask=document.querySelector(".clear-tasks");
loadEventListener();


//Event Load Function


function loadEventListener(){
	form.addEventListener("submit",addTask);

	ul.addEventListener("click",removeTask);

	clearTask.addEventListener("click",removeAllTask);
}

//Task Adding Function

function addTask(e){
	var taskValue=taskInput.value;
	if(taskValue===''){
		alert("Please,Add a task !!!");
	}
	else{
		var li=document.createElement("li");
		li.className="collection-item";
		li.appendChild(document.createTextNode(taskValue));
		var a=document.createElement("a");
		a.className="delete-item secondary-content";
		a.innerHTML='<i class="fa fa-remove"></i>';
		li.appendChild(a);
		ul.appendChild(li);
		taskInput.value="";
		e.preventDefault();
	}
}



//Task Removing Function

function removeTask(event){
	if(event.target.parentElement.classList.contains("delete-item")){
		if(confirm("Are You Sure???")){
			event.target.parentElement.parentElement.remove();
			event.preventDefault();
		}
	}
}

//Remove All Task At One Click Function

function removeAllTask(event){
	if(confirm("Are You Sure???")){
		ul.innerHTML="";
		event.preventDefault();
	}
}




