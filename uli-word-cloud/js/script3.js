const mainContainer = document.querySelector("#main-container");

mainContainer.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    mainContainer.style.left = `${x - 25}px`; 
    mainContainer.style.top = `${y - 25}px`; 
});
