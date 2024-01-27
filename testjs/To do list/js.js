
document.querySelector("#push").onclick = function(){
    if(document.querySelector('input').value.length == 0){
        alert ("please enter a task");
    } else{
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('input').value};
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            `
        ;

        var task = document.querySelectorAll('.task');
        for(var i = 0; i < task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }


    }
}