let addButton = document.querySelector('#add');
let input = document.querySelector('#newTask');
let tasks = document.querySelector('.tasks')
addButton.addEventListener('click', (evt) => {
    let value = input.value;
    input.value = '';
    if(value?.length == 0) {
        alert('Please add a task');
    } else {
        tasks.innerHTML += 
        `<div class="task">
            <span id="taskname">
                ${value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>`;
    }
    let deleteButtons = document.querySelectorAll('.delete');
    console.log('deleteButtons:'+deleteButtons.length);
    for(let i=0; i<deleteButtons?.length; i++) {
        deleteButtons[i].onclick = function(evt){
            console.log('delete clicked');
            this.parentNode.remove();
        };
    }
});
