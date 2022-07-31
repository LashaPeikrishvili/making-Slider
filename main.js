let boxes = document.querySelectorAll(".box")

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        clearActive();
        boxes[i].classList.add("active")
    })
}

function clearActive() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("active");
    }
}