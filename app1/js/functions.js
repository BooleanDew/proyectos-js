let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let btnCrear = document.querySelector("#btnCrear");
let tasks = document.querySelector("#tasks");

btnCrear.addEventListener("click", () => {

    localStorage.setItem(nombre.value, descripcion.value);
    location.reload();
});


for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i))
    tasks.innerHTML += `<div class='task'><button onClick="delTask('${localStorage.key(i)}')" class="btnDelete">X</button><div class='title' id='titleTask'><i class="fa-regular fa-star"></i>${localStorage.key(i)}</div><p>${localStorage.getItem(localStorage.key(i))}</p></div>`;
}

function delTask(id) {
    localStorage.removeItem(id)
    location.reload();
}


