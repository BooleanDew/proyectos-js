// componentes DOM.
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let btnCrear = document.querySelector("#btnCrear");
let tasks = document.querySelector("#tasks");
let toask = document.querySelector("#toask");

let fecha = new Date()


btnCrear.addEventListener("click", (event) => {

    if (event.target.innerHTML === "Editar") {
        localStorage.setItem(nombre.value, JSON.stringify({"descripcion":descripcion.value,"estado":1}));
        location.reload();
    } else {
        if (localStorage.getItem(nombre.value)) {
            toask.style.setProperty("display", "block");
            toask.style.setProperty("opacity", "8");
            toask.innerHTML = `<i class="fa-solid fa-circle-info"></i> El nombre de la tarea ya existe.`;
            setTimeout(() => {
                toask.style.setProperty("opacity", "0.1");
                toask.style.setProperty("--webkit-transition", "opacity 2s");
                toask.style.setProperty("display", "none");
            }, 2500);
        } else {
            if ((nombre.value != "") && (descripcion.value != "")) {
                localStorage.setItem(nombre.value, JSON.stringify({"descripcion":descripcion.value,"estado":1}));
                location.reload();
            } else {
                toask.style.setProperty("display", "block");
                toask.style.setProperty("opacity", "8");
                toask.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> No se permiten campos vacios.`;
                setTimeout(() => {
                    toask.style.setProperty("opacity", "0.1");
                    toask.style.setProperty("--webkit-transition", "opacity 2s");
                    toask.style.setProperty("display", "none");
                }, 2500);
            }
        }

    }

});


for (let i = 0; i < localStorage.length; i++) {
   
    tasks.innerHTML += `<div class='task' onClick="editTask('${localStorage.key(i)}','${JSON.parse(localStorage.getItem(localStorage.key(i))).descripcion}')"><button onClick="delTask('${localStorage.key(i)}')" class="btnDelete">X</button><div class='title' id='titleTask'><i class="fa-regular fa-star"></i>${localStorage.key(i)}</div><p>${JSON.parse(localStorage.getItem(localStorage.key(i))).descripcion}</p><div class="fechaTask">${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}</div></div>`;
    if(JSON.parse(localStorage.getItem(localStorage.key(i))).estado == 1){
        document.querySelector(".task").style.setProperty("border-left","4px solid green")
    }
}

function delTask(id) {
    localStorage.removeItem(id)
    location.reload();
}

function editTask(nombreTask, descripcionTask) {
    btnCrear.innerHTML = "Editar";
    document.querySelector("#nombre").value = nombreTask;
    document.querySelector("#descripcion").value = descripcionTask;
}

