const input = document.querySelector('input[type="text"]');
const userInput = document.querySelector("#inputUsuario");
const lista = document.querySelector("#lista");
let idCounter = 0;
const stats = document.querySelector("#stats");

userInput.addEventListener("submit", (event) => {
  event.preventDefault();
  agregatarea();
});

let agregatarea = () => {
  idCounter++;
  let newValue = input.value;
  if (newValue.trim() == "") {
    alert("Por favor ingrese una tarea válida.");
    return;
  }
  lista.innerHTML += `
    <div class="contenedor-tarea" id="${idCounter}">
            <label>
                <input type="checkbox">
                tarea ${newValue}
            </label>
            <img src="./assets/tacho.png" alt="eliminar" class="btnEliminar"
            class="btnEliminar">
        </div>`;

  input.value = "";
  updateStats();
};
lista.addEventListener("click", (event) => {
  if (event.srcElement.nodeName === "IMG") {
    deleteTask(event.srcElement.parentNode.id);
  } else if (event.srcElement.nodeName === "INPUT") {
    updateStats();
  }
});
let updateStats = () => {
  let divs = lista.querySelectorAll("div");
  let check = lista.querySelectorAll('input[type="checkbox"]:checked');
  stats.innerHTML = `tareas:${divs.length} completadas:${check.length}`;
  console.log(divs.length);
};
deleteTask = (id) => {
  let taskdelete = document.getElementById(id);
  lista.removeChild(taskdelete);
  updateStats();
};
