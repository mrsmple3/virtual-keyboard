//Create a new tegs
let divMain = document.createElement("div");
let divTextArea = document.createElement("div");
let textArea = document.createElement("textarea");
let keyboards = document.createElement("div");
//keyboard 1-row
let firstRow = document.createElement("div");
let firstRowContent = new Array(14);
for (let i = 0; i < 13; i++) {
  firstRowContent[i] = document.createElement("button");
  firstRowContent[i].classList.add("btn_common");
  firstRow.appendChild(firstRowContent[i]);
}
//keyboard 2-row
let secondRow = document.createElement("div");
let secondRowContent = new Array(15);
for (let i = 0; i < 15; i++) {
  secondRowContent[i] = document.createElement("button");
  secondRowContent[i].classList.add("btn_common");
  secondRow.appendChild(secondRowContent[i]);
}
secondRowContent[0].classList.add("btn_primary");
secondRowContent[14].classList.add("btn_primary");
//keyboard 3-row
let thirdRow = document.createElement("div");
let thirdRowContent = new Array(13);
for (let i = 0; i < thirdRowContent.length; i++) {
  thirdRowContent[i] = document.createElement("button");
  thirdRowContent[i].classList.add("btn_common");
  thirdRow.appendChild(thirdRowContent[i]);
}
thirdRowContent[0].classList.add("btn_primary");
thirdRowContent[12].classList.add("btn_primary");
//keyboard 4-rows4
let fourthRow = document.createElement("div");
let fourthRowContent = new Array(14);
for (let i = 0; i < fourthRowContent.length; i++) {
  fourthRowContent[i] = document.createElement("button");
  fourthRowContent[i].classList.add("btn_common");
  fourthRow.appendChild(fourthRowContent[i]);
}
fourthRowContent[0].classList.add("btn_primary");
fourthRowContent[13].classList.add("btn_primary");
fourthRowContent[12].classList.add("btn_primary_top");
//keyboard 5-row
let fifthRow = document.createElement("div");
let fifthRowContent = new Array(9);
for (let i = 0; i < fifthRowContent.length; i++) {
  fifthRowContent[i] = document.createElement("button");
  fifthRowContent[i].classList.add("btn_common");
  fifthRow.appendChild(fifthRowContent[i]);
}
fifthRowContent[0].classList.add("btn_primary");
fifthRowContent[1].classList.add("btn_primary");
fifthRowContent[2].classList.add("btn_primary");
fifthRowContent[4].classList.add("btn_primary");
fifthRowContent[5].classList.add("btn_primary");
fifthRowContent[6].classList.add("btn_primary_left");
fifthRowContent[7].classList.add("btn_primary_bottom");
fifthRowContent[8].classList.add("btn_primary_right");
//btn_primary_~
firstRowContent[0].classList.add("btn_primary");
//btn primary_BACKSPACE
firstRowContent[13] = document.createElement("button");
firstRowContent[13].classList.add("btn_primary", "btn_common");
firstRow.appendChild(firstRowContent[13]);
//Add Class
divMain.classList.add("main");
divTextArea.classList.add("textarea");
textArea.classList.add("textarea-content");
keyboards.classList.add("container-keyboard");
firstRow.classList.add("fist_row");
secondRow.classList.add("second_row");
thirdRow.classList.add("third_row");
fourthRow.classList.add("fourth_row");
fifthRow.classList.add("fifth_row");
// Appends
divTextArea.appendChild(textArea);
divMain.appendChild(divTextArea);
keyboards.appendChild(firstRow);
keyboards.appendChild(secondRow);
keyboards.appendChild(thirdRow);
keyboards.appendChild(fourthRow);
keyboards.appendChild(fifthRow);
divMain.appendChild(keyboards);
document.body.appendChild(divMain);
// Ohter thing
textArea.rows = 10;
//Keyboards
//1
firstRowContent[0].innerHTML = "<span class='left_size'>`</span>";
firstRowContent[1].innerHTML =
  "<span class='left_size'>1</span> <span class='right_size'>!</span>";
firstRowContent[2].innerHTML =
  "<span class='left_size'>2</span> <span class='right_size'>@</span>";
firstRowContent[3].innerHTML =
  "<span class='left_size'>3</span> <span class='right_size'>#</span>";
firstRowContent[4].innerHTML =
  "<span class='left_size'>4</span> <span class='right_size'>$</span>";
firstRowContent[5].innerHTML =
  "<span class='left_size'>5</span> <span class='right_size'>!</span>";
firstRowContent[6].innerHTML =
  "<span class='left_size'>6</span> <span class='right_size'>^</span>";
firstRowContent[7].innerHTML =
  "<span class='left_size'>7</span> <span class='right_size'>&</span>";
firstRowContent[8].innerHTML =
  "<span class='left_size'>8</span> <span class='right_size'>*</span>";
firstRowContent[9].innerHTML =
  "<span class='left_size'>9</span> <span class='right_size'>(</span>";
firstRowContent[10].innerHTML =
  "<span class='left_size'>0</span> <span class='right_size'>)</span>";
firstRowContent[11].innerHTML =
  "<span class='left_size'>-</span> <span class='right_size'>_</span>";
firstRowContent[12].innerHTML =
  "<span class='left_size'>=</span> <span class='right_size'>+</span>";
firstRowContent[13].innerHTML = "Backspace";
//2
secondRowContent[0].innerHTML = "Tab";
secondRowContent[1].innerHTML = "<span class='left_size'>Q</span>";
secondRowContent[2].innerHTML = "<span class='left_size'>W</span>";
secondRowContent[3].innerHTML = "<span class='left_size'>E</span>";
secondRowContent[4].innerHTML = "<span class='left_size'>R</span>";
secondRowContent[5].innerHTML = "<span class='left_size'>T</span>";
secondRowContent[6].innerHTML = "<span class='left_size'>Y</span>";
secondRowContent[7].innerHTML = "<span class='left_size'>U</span>";
secondRowContent[8].innerHTML = "<span class='left_size'>I</span>";
secondRowContent[9].innerHTML = "<span class='left_size'>O</span>";
secondRowContent[10].innerHTML = "<span class='left_size'>P</span>";
secondRowContent[11].innerHTML = "<span class='left_size'>[</span>";
secondRowContent[12].innerHTML = "<span class='left_size'>]</span>";
secondRowContent[13].innerHTML = "<span class='left_size'>\\</span>";
secondRowContent[14].innerHTML = "Del";
//3
thirdRowContent[0].innerHTML = "CapsLock";
thirdRowContent[1].innerHTML = "<span class='left_size'>A</span>";
thirdRowContent[2].innerHTML = "<span class='left_size'>S</span>";
thirdRowContent[3].innerHTML = "<span class='left_size'>D</span>";
thirdRowContent[4].innerHTML = "<span class='left_size'>F</span>";
thirdRowContent[5].innerHTML = "<span class='left_size'>G</span>";
thirdRowContent[6].innerHTML = "<span class='left_size'>H</span>";
thirdRowContent[7].innerHTML = "<span class='left_size'>J</span>";
thirdRowContent[8].innerHTML = "<span class='left_size'>K</span>";
thirdRowContent[9].innerHTML = "<span class='left_size'>L</span>";
thirdRowContent[10].innerHTML = "<span class='left_size'>;</span>";
thirdRowContent[11].innerHTML = "<span class='left_size'>'</span>";
thirdRowContent[12].innerHTML = "<span class='left_size'>Enter</span>";
//4
fourthRowContent[0].innerHTML = "Shift";
fourthRowContent[1].innerHTML = "<span class='left_size'>Z</span>";
fourthRowContent[2].innerHTML = "<span class='left_size'>X</span>";
fourthRowContent[3].innerHTML = "<span class='left_size'>C</span>";
fourthRowContent[4].innerHTML = "<span class='left_size'>V</span>";
fourthRowContent[5].innerHTML = "<span class='left_size'>B</span>";
fourthRowContent[6].innerHTML = "<span class='left_size'>N</span>";
fourthRowContent[7].innerHTML = "<span class='left_size'>M</span>";
fourthRowContent[8].innerHTML = "<span class='left_size'>,</span>";
fourthRowContent[9].innerHTML = "<span class='left_size'>.</span>";
fourthRowContent[10].innerHTML = "<span class='left_size'>/</span>";
fourthRowContent[11].innerHTML = "<span class='left_size'>\\</span>";
fourthRowContent[12].innerHTML = "&uarr;";
fourthRowContent[13].innerHTML = "Shift";
//5
fifthRowContent[0].innerHTML = "Ctrl";
fifthRowContent[1].innerHTML = "Win";
fifthRowContent[2].innerHTML = "Alt";
fifthRowContent[4].innerHTML = "Alt";
fifthRowContent[5].innerHTML = "Ctlr";
fifthRowContent[6].innerHTML = "&larr;";
fifthRowContent[7].innerHTML = "&darr;";
fifthRowContent[8].innerHTML = "&rarr;";
//functions
document.addEventListener("keydown", function (event) {
  if (
    event.key === "Alt" ||
    event.key === "Ctrl" ||
    event.key === "Space" ||
    event.key === "Tab" ||
    event.key === "Delete" ||
    event.key === "CapsLock" ||
    event.key === "Backspace" ||
    event.key === "Enter" ||
    event.key === "Meta"
  ) {
    event.preventDefault();
    // Ваш код для выполнения пользовательских действий при нажатии на клавишу Alt
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key.match(/^[a-z]$/i)) {
    event.preventDefault();
    // Ваш код для выполнения пользовательских действий при нажатии на английские буквы
  }
});

function clickOn(button) {
  document.addEventListener("keydown", function (event) {
    if (
      event.key === button.textContent ||
      event.key.toLowerCase() === button.textContent.toLowerCase()
    ) {
      textArea.value += event.key;
    }
  });
  button.addEventListener("click", function () {
    textArea.value += button.textContent.toLowerCase();
  });
}
function clickOnNumber(button) {
  let buttonValues = Array.from(button.querySelectorAll("span")).map(
    (span) => span.textContent
  );
  document.addEventListener("keydown", function (event) {
    if (
      buttonValues.includes(event.key.toLowerCase()) ||
      event.key.toLowerCase() === button.textContent.toLowerCase()
    ) {
      textArea.value += event.key;
    }
  });
  button.addEventListener("click", function () {
    let leftSizeValue = button.querySelector(".left_size").textContent;
    textArea.value += leftSizeValue;
  });
}
function clickOnCommon(button) {
  button.addEventListener("mousedown", function () {
    this.style.opacity = 0.7;
  });
  button.addEventListener("mouseup", function () {
    this.style.opacity = "";
  });

  let buttonValues = Array.from(button.querySelectorAll("span")).map(
    (span) => span.textContent
  );
  document.addEventListener("keydown", function (event) {
    if (
      buttonValues.includes(event.key.toLowerCase()) ||
      event.key.toLowerCase() === button.textContent.toLowerCase()
    ) {
      button.style.opacity = "0.7";
    }
  });
  document.addEventListener("keyup", function (event) {
    if (
      buttonValues.includes(event.key.toLowerCase()) ||
      event.key.toLowerCase() === button.textContent.toLowerCase()
    ) {
      button.style.opacity = "";
    }
  });
}

//1-row functions
for (let i = 0; i < firstRowContent.length - 1; i++) {
  clickOnCommon(firstRowContent[i]);
}
for (let i = 1; i < firstRowContent.length - 1; i++) {
  clickOnNumber(firstRowContent[i]);
}
clickOn(firstRowContent[0]);
clickOnCommon(firstRowContent[firstRowContent.length - 1]);
firstRowContent[13].addEventListener("click", function () {
  textArea.value = textArea.value.slice(0, -1);
});
document.addEventListener("keydown", function (event) {
  if (event.key === firstRowContent[13].textContent) {
    textArea.value = textArea.value.slice(0, -1);
  }
});
//2-row functions
secondRowContent[0].addEventListener("mousedown", function () {
  this.style.opacity = 0.7;
  textArea.value += "  ";
});
secondRowContent[0].addEventListener("mouseup", function () {
  this.style.opacity = "";
});
document.addEventListener("keydown", function (event) {
  if (event.key === secondRowContent[0].textContent) {
    secondRowContent[0].style.opacity = "0.7";
    textArea.value += "  ";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === secondRowContent[0].textContent) {
    secondRowContent[0].style.opacity = "";
  }
});
for (let i = 1; i < secondRowContent.length; i++) {
  clickOnCommon(secondRowContent[i]);
}
for (let i = 1; i < secondRowContent.length - 1; i++) {
  clickOn(secondRowContent[i]);
}
secondRowContent[secondRowContent.length - 1].addEventListener(
  "mousedown",
  function () {
    let cursorPosition = textArea.selectionStart;
    textArea.value =
      textArea.value.slice(0, cursorPosition) +
      textArea.value.slice(cursorPosition + 1);
    textArea.setSelectionRange(cursorPosition, cursorPosition);
  }
);
document.addEventListener("keydown", function (event) {
  if (event.key === "Delete") {
    secondRowContent[14].style.opacity = "0.7";
    let cursorPosition = textArea.selectionStart;
    textArea.value =
      textArea.value.slice(0, cursorPosition) +
      textArea.value.slice(cursorPosition + 1);
    textArea.setSelectionRange(cursorPosition, cursorPosition);
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "Delete") {
    secondRowContent[14].style.opacity = "";
  }
});
//3-row functions
for (let i = 0; i < thirdRowContent.length; i++) {
  clickOnCommon(thirdRowContent[i]);
}
for (let i = 1; i < thirdRowContent.length - 1; i++) {
  clickOn(thirdRowContent[i]);
}
document.addEventListener("keydown", function (event) {
  if (event.key === thirdRowContent[thirdRowContent.length - 1].textContent) {
    let cursorPosition = textArea.selectionStart;
    textArea.value =
      textArea.value.slice(0, cursorPosition) +
      "\n" +
      textArea.value.slice(cursorPosition);
    textArea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
});
thirdRowContent[thirdRowContent.length - 1].addEventListener(
  "mousedown",
  function () {
    let cursorPosition = textArea.selectionStart;
    textArea.value =
      textArea.value.slice(0, cursorPosition) +
      "\n" +
      textArea.value.slice(cursorPosition);
    textArea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
);
//4-row functions
for (let i = 0; i < fourthRowContent.length; i++) {
  clickOnCommon(fourthRowContent[i]);
}
for (let i = 1; i < fourthRowContent.length - 3; i++) {
  clickOn(fourthRowContent[i]);
}
//5-row functions
for (let i = 0; i < fifthRowContent.length; i++) {
  clickOnCommon(fifthRowContent[i]);
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Control") {
    fifthRowContent[0].style.opacity = "0.7";
    fifthRowContent[5].style.opacity = "0.7";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "Control") {
    fifthRowContent[0].style.opacity = "";
    fifthRowContent[5].style.opacity = "";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Meta") {
    fifthRowContent[1].style.opacity = "0.7";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "Meta") {
    fifthRowContent[1].style.opacity = "";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Meta") {
    fifthRowContent[1].style.opacity = "0.7";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    fifthRowContent[3].style.opacity = "0.7";
    textArea.value += " ";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === " ") {
    fifthRowContent[3].style.opacity = "";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    fifthRowContent[6].style.opacity = "0.7";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowLeft") {
    fifthRowContent[6].style.opacity = "";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    fifthRowContent[7].style.opacity = "0.7";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowDown") {
    fifthRowContent[7].style.opacity = "";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    fifthRowContent[8].style.opacity = "0.7";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight") {
    fifthRowContent[8].style.opacity = "";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    fourthRowContent[12].style.opacity = "0.7";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowUp") {
    fourthRowContent[12].style.opacity = "";
  }
});
document.addEventListener("keydown", function (event) {
  console.log(event.key);
});
