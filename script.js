//Create a new tegs
let divMain = document.createElement("div");
let divTextArea = document.createElement("div");
let textArea = document.createElement("textarea");
let keyboards = document.createElement("div");
let first_row = document.createElement("div");
//Add Class
divMain.classList.add("main");
divTextArea.classList.add("textarea");
textArea.classList.add("textarea-content");
keyboards.classList.add("conttainer-keyboard");
first_row.classList.add("fist_row");

// Appends
divTextArea.appendChild(textArea);
divMain.appendChild(divTextArea);
keyboards.appendChild(first_row);
divMain.appendChild(keyboards);
document.body.appendChild(divMain);
// Ohter thing
textArea.rows = 10;
