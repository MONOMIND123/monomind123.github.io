console.log("Hello World");

let triggers = document.querySelectorAll(".color-accent--hover, .animate--hover");
let cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", event => {
    cursor.style.top = event.pageY + "px";
    cursor.style.left = event.pageX + "px";
});


triggers.forEach(trigger => {
    trigger.addEventListener("mouseover", () => {
        cursor.classList.add("effect");
    });
    trigger.addEventListener("mouseleave", () => {
        cursor.classList.remove("effect");
    });
});