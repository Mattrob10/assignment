const form = document["add-item"]

// List Item
form.addEventListener("submit", function(event){
    event.preventDefault()
  
    createItem(form.input);
});

// Input buttons Start
function edit(e) {
  const saveBtn = document.createElement("button");
  saveBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  saveBtn.setAttribute("name", "save-btn");
  saveBtn.setAttribute("class", "saveBtn");
  saveBtn.setAttribute("onClick", "save(this)");

  const inputNew = document.createElement("input");  
  inputNew.setAttribute("name", "editItem");
  inputNew.setAttribute("class", "editItem");
  inputNew.setAttribute("value", e.parentNode.childNodes[0].nodeValue);
  console.log(e.parentNode.childNodes);

  e.parentNode.appendChild(saveBtn);
  e.parentNode.appendChild(inputNew);
  e.remove();
}
// stores date until page is refreshed
function save(e){

  const input = document.getElementsByName("editItem")[0];
  createItem(input);
  e.parentNode.remove();
}

// edit btn
function addEdit(e) {
  const editBtn = document.createElement("button");
  editBtn.innerHTML ='<i class="fa-solid fa-pen-to-square"></i>';
  editBtn.setAttribute("name", "edit-btn");
  editBtn.setAttribute("class", "editBtn");
  editBtn.setAttribute("onClick", "edit(this);");
  e.appendChild(editBtn);
}

// delete btn
function addDelete(e) {
  const delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  delBtn.setAttribute("name", "del-btn");
  delBtn.setAttribute("class", "delBtn");
  delBtn.setAttribute("onClick", "this.parentNode.parentNode.removeChild(this.parentNode);");
  e.appendChild(delBtn);
}

// Creates ITEMS 
function createItem(e){
  const item = e.value;
  e.value = "";

  const li = document.createElement("li");
  li.textContent = item;

  addEdit(li);
  addDelete(li);

  document.getElementsByName("item-list")[0].append(li);
}

function clearALL(){
  
}

// clear all btn
// function clearItem(e){
//   const clrBtn = document.createElement("button");
//   clrBtn.textContent = "🗑️";
//   clrBtn.setAttribute("name", "clr-btn");
//   clrBtn.setAttribute("class", "clrBtn");
//   clrBtn.setAttribute("onClick", );
//   e.appendChild(clrBtn);
// }


