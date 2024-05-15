console.log('Hello World!')

// Dropdown Toggle
let droptoggle = document.querySelector("#drop-toggle");
let dropdown = document.querySelector('#dropdown');
droptoggle.addEventListener("change", changeDropdown);
function changeDropdown() {
    if (droptoggle.checked) {
      dropdown.classList.add("dropmode");
    } else {
      dropdown.classList.remove("dropmode");
    }
}

// Light & Dark Mode Toggle
let modetoggle = document.querySelector("#mode-toggle");
modetoggle.addEventListener("change", changeMode);
function changeMode() {
    if (modetoggle.checked) {
      document.body.classList.add("lightmode");
    } else {
      document.body.classList.remove("lightmode");
    }
}