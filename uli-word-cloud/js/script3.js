const mainContainer = document.querySelector("#main-container");
let isDragging = false; 

mainContainer.addEventListener("mousedown", (e) => {
    isDragging = true; 
});

let width = parseInt(mainContainer.style.width)
let height = parseInt(mainContainer.style.height)
// console.log(height/2);
// console.log(width/2)

document.addEventListener("mousemove", (e) => {
    if (isDragging) { 
        const x = e.clientX;
        const y = e.clientY;
        mainContainer.style.left = `${x - width/2}px`;
        mainContainer.style.top = `${y - width/2}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false; 
});
