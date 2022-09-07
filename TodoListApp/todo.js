const addToDoButton = document.querySelector("#addTask");
const ToDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");

addToDoButton.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  ToDoContainer.appendChild(paragraph);
  inputField.value = " ";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", () => {
    paragraph.remove();
  });
});
