function onReady(){
  //Creates empty Array for to-dos
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  // This function will push user input to the toDos array
  function createNewToDo() {
    if(!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    console.log(toDos);
    renderTheUI();
  }

  // This function will take current state of Arry and render the UI
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  //Event Listener for submit click
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  //This will render inteface
  renderTheUI();
}

window.onload = function(){
  onReady();
};
