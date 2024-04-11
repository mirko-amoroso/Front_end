// funzione bottone
const fatta = (nuova_task)=> {
    nuova_task.classList.toggle("classe_toggle");
}

const funzione_bottone = () => {
    let task_input = document.getElementById("task").value
    let nuova_task = document.createElement("a")
    nuova_task.addEventListener("onlick", fatta(nuova_task))
    nuova_task.innerHTML = task_input
    let list = document.getElementById("lista")
    list.appendChild(nuova_task)
    console.log(list)
}

let bottone_1 = document.getElementById('crea');
bottone_1.addEventListener("click", funzione_bottone);















// funzione bottone
//  const funzione_bottone = () => {
//      console.log("ciao")
//  }
