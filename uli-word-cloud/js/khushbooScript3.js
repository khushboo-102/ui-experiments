let dragDiv = document.querySelector("#dragg-div")
let categoriesDiv = document.querySelectorAll(".category-div")
 
let isDragging = false;  
let offsetX, offsetY;  // Store mouse position 

// Mouse down event to start dragging
dragDiv.addEventListener('mousedown', (e) => {
    isDragging = true;  // Start dragging

     offsetX = e.clientX - dragDiv.offsetLeft;
    offsetY = e.clientY - dragDiv.offsetTop;

    dragDiv.style.cursor = 'grabbing';  // Change cursor to grabbing when dragging
});

// Mouse move event to move the div, only if dragging is true
dragDiv.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const X = e.clientX;
        const Y = e.clientY;

        dragDiv.style.left = `${X - offsetX}px`;  // Update left position
        dragDiv.style.top = `${Y - offsetY}px`;  // Update top position
        categoriesDiv.forEach(categoryDiv=> {
            const div1 = dragDiv.getBoundingClientRect();
            const div2 = categoryDiv.getBoundingClientRect();
        
            const overlay = !(
              div1.right < div2.left ||
              div1.left > div2.right ||
              div1.bottom < div2.top ||
              div1.top > div2.bottom
            );
          // Check for overlap and change color accordingly
          if (overlay) {
            console.log(categoryDiv);
            
            categoryDiv.style.backgroundColor = "yellow";
          }else {
            categoryDiv.style.backgroundColor = "white";
          }
          })
    
      }});
    
    
    


// Mouse up event to stop dragging
dragDiv.addEventListener('mouseup', () => {
    isDragging = false;  // Stop dragging
    dragDiv.style.cursor = 'poiner';  // Reset cursor to normal pointer
});
 
    
    
 
    