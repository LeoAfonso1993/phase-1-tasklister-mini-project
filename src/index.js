document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const txt = document.getElementById("new-task-description")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    newToDo(txt.value)
    form.reset()
  })
});

function newToDo(toDo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click", deleteItem) 
  btn.textContent = "x"
  btn.style.margin = "5px 2px 5px"
  btn.style.position = "relative"
  btn.style.bottom = "2px"
  p.textContent = toDo
  p.appendChild(btn)
  document.getElementById("tasks").appendChild(p)
  
}

function deleteItem(e){
  e.target.parentNode.remove()
}
