 // I could have taken a lot more time with this project, I wanted to move on to next exercise.  

//  fix li(first-child) to dislplay after clear and addTask

const input = document.querySelector("input"),
  btn = document.querySelector("button"),
  todoList = document.querySelector(".todo-list"),
  clear = document.querySelector(".clear");
  

  //  window.onload = function() {
  //     document.querySelector('.todo-list').style.display = "none";
  //  };

// Add List Item
const addTask = (e) => {
  e.preventDefault();
  const newLi = document.createElement("li")
  const delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if (input.value !== ""){
      newLi.textContent = input.value;
      newLi.appendChild(delBtn);
      todoList.appendChild(newLi);
      input.value = "";
  } else {
      alert("Please Enter Item For Mom's Shopping List");
  }

// delete function
  delBtn.addEventListener("click", function(){
    const del = confirm("Delete Task")
    if (del == true) {
      const parent = this.parentNode;
      parent.remove();
    }
  })
};

btn.addEventListener("click", addTask);

clear.addEventListener("click", () =>{
  todoList.innerHTML = "";
});