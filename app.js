function onReady(){
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    //Get text
    let title = newToDoText.value;

    //Create list item with text
    let newLi = document.createElement("li");

    //Creates an input for list item
    let checkbox = document.createElement("input");

    //makes Delete button
    let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", event => {
      toDoList.removeChild(newLi);
    })

    deleteButton.textContent = "X";

    //makes input checkbox type
    checkbox.type = "checkbox";

    //makes text title of list item
    newLi.textContent = title;

    //attaches checkbox to list item
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteButton);

    //Attaches li to todo toDoList
    toDoList.appendChild(newLi);

    //Creates empty input for next todo item
    newToDoText.value = "";

  });
}


window.onload = function(){
  onReady();
};
