function onReady(){

  let idVar = 0;
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
      complete: false,
      id: idVar
    });
    idVar++
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

      //*** Event handler for checked checkbox
      checkbox.addEventListener('click', event => {
        toDos[0].complete = true;
        console.log("toDos.complete");
      });

      const deleteBut = document.createElement('input');
      deleteBut.type = "button";
      deleteBut.value = "X";

      //Event Listener for delete button
      deleteBut.addEventListener('click', event => {
        deleteToDo(toDo.id);
        renderTheUI();
      });

      const title = document.createElement('span');
      title.textContent = toDo.title;

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBut);
    });
  }

  //Event Listener for submit click
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });


  //This will delete to-do
  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
  }


  //This will render inteface
  renderTheUI();
}

window.onload = function(){
  onReady();
};
