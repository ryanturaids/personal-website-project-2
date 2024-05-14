console.log('Hello World!')

// Light & Dark Mode Toggle
let toggle = document.querySelector("input");
toggle.addEventListener("change", changeMode);
function changeMode() {
  if (toggle.checked) {
    document.body.classList.add("lightmode");
  } else {
    document.body.classList.remove("lightmode");
  }
}