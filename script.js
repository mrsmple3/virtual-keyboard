//Create a new tegs
let divMain = document.createElement("div");
let divTextArea = document.createElement("div");
let textArea = document.createElement("textarea");
let keyboards = document.createElement("div");
let first_column = document.createElement("div");
//Add Class
divMain.classList.add("main");
divTextArea.classList.add("textarea");
textArea.classList.add("textarea-content");
keyboards.classList.add("conttainer-keyboard");
first_column.classList.add("fist_column");

// Appends
divTextArea.appendChild(textArea);
divMain.appendChild(divTextArea);
keyboards.appendChild(first_column);
document.body.appendChild(divMain);
// Ohter thing
textArea.rows = 10;
