const main = document.getElementById("main");
const taskContainer = document.getElementById("task-container");
const heading = document.getElementById("heading");
const addForm = document.getElementById("form");
const submitBtn = document.querySelector("button[type='submit']");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector("#clear-btn");
const doneBtn = document.querySelector(".done");

function headFill() {
  const headingPrompt = prompt("Your New Project Name");
  if (headingPrompt !== null && headingPrompt.trim() !== "" && headingPrompt ) {
    let headingValue = headingPrompt.toUpperCase();
    heading.innerHTML = headingValue;
  } else {
    heading.innerHTML = "Refresh! I Asked Something.";
    main.style.display = "none";
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
});

function checkHeading() {
  if (!heading.innerHTML) {
    headFill();
  }
}


taskContainer.addEventListener("click", function (e) {
  let eDiv = e.target.closest(".list-wrapper");

  if (eDiv) {
    if (e.target.closest(".done-btn")){ 
      eDiv.classList.add("done");
    const img = e.target.closest(".done-btn").querySelector(".img");
    if (img) {
      img.src = "icon/double-tick.svg";
    }}

    if(e.target.closest(".delete")){
      eDiv.remove();
    }

  }}
);

function clearAll() {
  taskContainer.innerHTML = "";
  setTimeout(() => {
    headFill();
  }, 0);
}


clearBtn.addEventListener('click', clearAll)
headFill()
