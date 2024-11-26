const inputBox = document.querySelector("#input");
const buttons = document.querySelectorAll(".btn");

let str = "";
const arr = Array.from(buttons);
arr.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      str = eval(str);
      inputBox.value = str;
    }else if(e.target.innerHTML === "AC"){
      str = "";
      inputBox.value = str;
    }else if(e.target.innerHTML === "DEL"){
      str = str.slice(0, -1);
      inputBox.value = str;
    }else {
      str = str + e.target.innerHTML;
      inputBox.value = str;
    }
  });
});

//"I am completed the calculater app by using the html css and js"
 