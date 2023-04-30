//Create a new tegs
let divMain = document.createElement("div");
let divTextArea = document.createElement("div");
let textArea = document.createElement("textarea");
let keyboards = document.createElement("div");
let firstRow = document.createElement("div");
let firstRowContent = new Array(14);
for (let i = 0; i < 13; i++) {
  firstRowContent[i] = document.createElement("button");
  firstRowContent[i].classList.add("btn_common");
  firstRow.appendChild(firstRowContent[i]);
}
//Add Class
divMain.classList.add("main");
divTextArea.classList.add("textarea");
textArea.classList.add("textarea-content");
keyboards.classList.add("conttainer-keyboard");
firstRow.classList.add("fist_row");

// Appends
divTextArea.appendChild(textArea);
divMain.appendChild(divTextArea);
keyboards.appendChild(firstRow);
divMain.appendChild(keyboards);
document.body.appendChild(divMain);
// Ohter thing
textArea.rows = 10;
