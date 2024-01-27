document.querySelector('#push').onclick =  function(){
        if(document.querySelector('input').value.length == 0){
            alert("please enter a task"); 
        } else{ 

          
            document.querySelector('#tasks').innerHTML += `      
                <div class="task"> 
                    <span id="taskname">
                        ${document.querySelector('input').value } 
                    </span>
                    <button class="delete">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `; 

        //cross line
        var task = document.querySelectorAll(".task");
        for(var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        
        //delete new tasks
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        
        //text disappear after add new task
        document.querySelector("#newtask input").value = "";

    }
}  
 