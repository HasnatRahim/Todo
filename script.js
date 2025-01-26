const main = document.getElementById("main");
const taskContainer = document.getElementById("task-container");
const heading = document.getElementById("heading");
const addForm = document.getElementById("form");
const submitBtn = document.querySelector("button[type='submit']");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector("#clear-btn");
const doneBtn = document.querySelector(".done");
// let tasks = JSON.parse(localStorage.getItem("task")) || []




// tasks.forEach(function (task){
// console.log(task.txt);

// });
function headFill() {
  let headingValue = localStorage.getItem("projectName");
  if (!headingValue) {
    const headingPrompt = prompt("Your New Project Name");
    if (headingPrompt && headingPrompt.trim() !== "") {
      headingValue = headingPrompt.toUpperCase();
      heading.innerHTML = headingValue.trim();
      localStorage.setItem("projectName", headingValue);
    } else {
      heading.innerHTML = "Refresh! I Asked Something.";
      main.style.display = "none";
    }
  } else {
    heading.innerHTML = headingValue.trim();
  }
}

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const addInput = document.getElementById("add-inp").value.trim();
  const tempHtml = `<div class="list-wrapper" id="list-wrapper1"><span class="text-sec">${addInput}</span><span class="btn-sec"
    ><button class="done-btn"><img class="img" src="icon/single-tick.svg" /></button>
    <button class="delete">
      <img src="icon/cross.svg" alt="Delete" /></button
  ></span>
  </div>`;
  taskContainer.insertAdjacentHTML("beforeend", tempHtml);
  document.getElementById("add-inp").value = "";
  // let newTask = {
  //   txt: addInput,
  //   isDone: false
  // }
  // tasks.push(newTask)
  saveTask()
});

function checkHeading() {
  if (!heading.innerHTML) {
    headFill();
  }
}

taskContainer.addEventListener("click", function (e) {
  let eDiv = e.target.closest(".list-wrapper");
  if (eDiv) {
    if (e.target.closest(".done-btn")) {
      eDiv.classList.toggle("done");
      const img = e.target.closest(".done-btn").querySelector(".img");
      if (img) {
        img.src = "icon/double-tick.svg";
        if(img.src = eDiv.classList.contains("done")){
          img.src = "icon/double-tick.svg";
        }
        else{
          img.src = "icon/single-tick.svg";
        }
      }
    }
    if (e.target.closest(".delete")) {
      eDiv.remove();
    }
  }
  saveTask()
});

function clearAll() {
  taskContainer.innerHTML = "";
  setTimeout(() => {
    headFill();
  }, 100);
  localStorage.clear();
}


function saveTask(){
  localStorage.setItem("tasks", taskContainer.innerHTML)
}
function displayTask(){
  taskContainer.innerHTML = localStorage.getItem("tasks");
}


// localStorage.setItem("task", JSON.stringify(tasks));
clearBtn.addEventListener("click", clearAll);
headFill();
displayTask()
