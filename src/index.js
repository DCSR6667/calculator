var a = document.getElementsByTagName("button");
var box = document.getElementById("box");
var arr = [];
var prev = "";
var next = "";

function handler() {
  var content = this.innerHTML;
  arr.push(content);
  var s = "";
  for (var i of arr) {
    s = s + i;
  }
  box.innerHTML = s;
}
function input() {
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      prev = prev + arr[i];
    }
    switch (arr[i]) {
      case "+":
        for (var j = i + 1; j < arr.length; j++) {
          if (isFinite(arr[j])) {
            next = next + arr[j];
          } else {
            break;
          }
        }
        i = j - 1;

        prev = Number(prev) + Number(next);
        next = "";
        console.log(prev);
        break;
      case "-":
        for (var j = i + 1; j < arr.length; j++) {
          if (isFinite(arr[j])) {
            next = next + arr[j];
          } else {
            break;
          }
        }
        i = j - 1;
        prev = Number(prev) - Number(next);
        next = "";
        console.log(prev);

        break;
      case "*":
        for (var j = i + 1; j < arr.length; j++) {
          if (isFinite(arr[j])) {
            next = next + arr[j];
          } else {
            break;
          }
        }
        i = j - 1;
        prev = Number(prev) * Number(next);
        next = "";
        console.log(prev);

        break;
      case "/":
        for (var j = i + 1; j < arr.length; j++) {
          if (isFinite(arr[j])) {
            next = next + arr[j];
          } else {
            break;
          }
        }
        i = j - 1;
        prev = Number(prev) / Number(next);
        next = "";
        console.log(prev);

        break;
    }
  }
  arr = [];
  arr.push(prev);
  console.log(prev);

  box.innerHTML = prev;
  prev = "";
}
function cross() {
  arr.pop();
  var s = "";
  for (var i of arr) {
    s = s + i;
  }
  box.innerHTML = s;
}

for (var i of a) {
  i.addEventListener("click", handler);
}
document.getElementsByTagName("input")[0].addEventListener("click", input);
document.getElementsByTagName("input")[1].addEventListener("click", cross);
