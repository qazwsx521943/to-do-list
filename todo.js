const addBtn = document.querySelector(".add");
const taskContent = document.querySelector(".task-content");
const taskFinish = document.querySelector(".task-finish");
let taskList = [],
  finTask = [];

// ===============================================
addBtn.addEventListener("click", addTask);
document.addEventListener("click", deleteTask);

function displayNewTask(array, str, display) {
  let text = ``;
  array.push(str);
  // use array method to display on html
  text += `<ol><li>`;
  text += `${array.join("<span>delete</span></li><li>")}`;
  text += `<span>delete</span></li></ol>`;

  display.innerHTML = text;
}
function displayFinTask(array, str, display) {
  let text = ``;
  array.unshift(str);
  // use array method to display on html
  text += `<ul><li>`;
  text += `${array.join("</li><li>")}`;
  text += `</li></ul>`;

  display.innerHTML = text;
}

function deleteTask(e) {
  if (
    e.target.matches("span") &&
    e.target.parentNode.parentNode.matches("ol")
  ) {
    // move finished task from tasklist => finTask
    const finished = e.target.closest("li").childNodes[0].data;
    taskList.splice(taskList.indexOf(finished), 1);
    displayFinTask(finTask, finished, taskFinish);
    // select outer li and remove html
    e.target.parentNode.remove();
  } else return;
}

function addTask(e) {
  e.preventDefault();
  let content = document.querySelector("#content");
  if (content.value == "") return;
  else {
    displayNewTask(taskList, content.value, taskContent);
    content.value = "";
  }
}
