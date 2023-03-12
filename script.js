const add = document.querySelector("#addButton");
const inputItem = document.querySelector("#inputItem");
const ulItem = document.querySelector("#ulItem");

add.addEventListener("click", addNewEllement);
function addNewEllement() {
  const span = document.createElement("span");
  span.className = "listGroupItemText";
  const liItem = document.createElement("li");
  liItem.className = "listGroupItem";
  const changeInput = document.createElement("input");
  changeInput.className = "listGroupItemChangedInput";
  const changeButton = document.createElement("input");
  changeButton.type = "submit";
  changeButton.className = "listGroupItemTextChangeButton";
  const deleteIqon = document.createElement("span");
  deleteIqon.className = "deleteIqon";
  deleteIqon.innerHTML = "\u00D7";
  if (inputItem.value.length > 0) {
    ulItem.appendChild(liItem);
    ulItem.appendChild(deleteIqon);
    liItem.appendChild(span);
    liItem.appendChild(changeInput);
    liItem.appendChild(changeButton);
    liItem.appendChild(deleteIqon);
    span.innerHTML = inputItem.value;
    inputItem.style.borderColor = "rgb(118, 118, 118)";
  } else if (inputItem.value === "") {
    inputItem.style.borderColor = "red";
    alert("fill input");
    return;
  }
  inputItem.value = "";

  function changeTodo() {
    changeButton.addEventListener("click", () => {
      if (changeInput.value.length > 0) {
        span.innerHTML = changeInput.value;
        span.className = "listGroupItemText";
        changeInput.style.borderColor = "rgb(118, 118, 118)";
      } else if (changeInput.value === "") {
        changeInput.style.borderColor = "red";
        alert("fill change input");
        return;
      }
      changeInput.value = "";
    });
  }
  changeTodo();
}

function switchChecked() {
  ulItem.addEventListener("click", (event) => {
    event.target.classList.toggle("checked");
  });
}
switchChecked();

function deleteTodo() {
  ulItem.addEventListener("click", (ev) => {
    if (ev.target.className.includes("deleteIqon")) {
      ev.target.parentElement.remove();
    }
  });
}
deleteTodo();
