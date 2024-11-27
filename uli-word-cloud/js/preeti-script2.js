let container = document.getElementById("container");
let isDragging = false;
let offsetX, offsetY
container.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - container.offsetLeft
  offsetY = e.clientY - container.offsetTop
  container.style.cursor = 'dragging'

  container.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const X = e.clientX;
      const Y = e.clientY;
      container.style.left = `${X - offsetX}px`; // change position of div
      container.style.top = `${Y - offsetY}px`
      // console.log("Hello")

      container.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = 'pointer'
      })
    }
  })

})









