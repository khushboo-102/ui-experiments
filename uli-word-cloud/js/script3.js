const mainContainer = document.querySelector("#main-container");
let isDragging = false; 

mainContainer.addEventListener("mousedown", (e) => {
    isDragging = true; 
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) { 
        const x = e.clientX;
        const y = e.clientY;
        mainContainer.style.left = `${x - 25}px`;
        mainContainer.style.top = `${y - 25}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false; 
});
